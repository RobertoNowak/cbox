<?php

namespace App\Http\Controllers\Shipper;

use App\Http\Controllers\Controller;
use App\Models\Buyer;
use App\Models\Order;
use App\Models\House;
use App\Models\HouseIo;
use App\Permission;
use App\Role;
use Illuminate\Http\Request;
use Session;
use File;
use Config;
use Auth;
use DB;
class ShipperController extends Controller
{

    public function __construct()
    {
        $menus = [];
        if (File::exists(base_path('resources/laravel-admin/shipper_menus.json'))) {
            $menus = json_decode(File::get(base_path('resources/laravel-admin/shipper_menus.json')));
            view()->share('shipperMenus', $menus);
        }
    }
    /**
     * Display a listing of the resource.
     *
     * @return void
     */
    public function index()
    {
        return view('shipper.dashboard');
    }

    public function orders(Request $request){
        $param = $request->only(['state']);
        $user = Auth::user();
        if(!$user->can('SHIP_MANAGE')) {
            Session::flash('flash_message', 'Permission required!');
            return view('shipper.orders.index');
        }
        $orders = [];
        $state = $param['state'];
        if($state == 'APPOINTED')
            $orders = Order::where('del_flg', config('constants.BOX_SHIP_APPOINTED'))->orderby('created_at', 'desc')->paginate(10);
        else if($state == 'DONE')
            $orders = Order::where('del_flg', config('constants.BOX_SHIP_DONE'))->orderby('created_at', 'desc')->paginate(10);
        else{
            $orders = Order::where('del_flg', '<>', config('constants.BOX_SHIP_CANCELLED'))->orderby('created_at', 'desc')->paginate(10);
            $state = "";
        }
        return view('shipper.orders.index', compact('orders', 'state'));
    }

    public function editOrder($id, Request $request){
        $order = Order::findOrFail($id);
        $_houses = House::where('del_flg', config('constants.ITEM_IS_LIVE'))->get();;
        $houses = [];
        foreach($_houses as $house){
            $houses[$house->id] = $house->name.' -- '.$house->city.' -- '.$house->state;
        }
        return view('shipper.orders.order', compact('order', 'houses'));
    }

    public function warehouses(){
        $user = Auth::user();
        if(!$user->can('SHIP_MANAGE')) {
            Session::flash('flash_message', 'Permission required!');
            return view('shipper.warehouses.index');
        }
        $houses = DB::table('cbox_houses')->leftjoin('cbox_houseios', function($join){
                      $join->on('cbox_houses.id', '=', 'cbox_houseios.house_id');
                    })
                    ->where('cbox_houses.del_flg', config('constants.ITEM_IS_LIVE'))
                    ->select('cbox_houses.id', 'cbox_houses.name', 'cbox_houses.manager' , 'cbox_houses.manager_email', 'cbox_houses.address', 'cbox_houses.city', 'cbox_houses.state', DB::raw('sum(cbox_houseios.amount) as balance'))
                    ->groupby('cbox_houses.id')->get();
        
        return view('shipper.warehouses.index', compact('houses'));
    }

    public function createWareHouse(){
        return view('shipper.warehouses.create');
    }

    public function createNewHouse(Request $request){
        $param = $request->only(['name', 'manager', 'manager_email', 'address', 'city', 'state']);
        House::unguard();
        $house = House::create($param);
        House::reguard();
        Session::flash('flash_message', 'WareHouse added!');
        return redirect('shipper/warehouses');
    }

    public function editWareHouse($id){
        $house = House::findOrFail($id);
        return view('shipper.warehouses.edit', compact('house'));
    }

    public function editCurrentHouse($id, Request $request){
        $param = $request->only(['name', 'manager', 'manager_email', 'address', 'city', 'state']);
        $house = House::findOrFail($id);
        $house->update($param);
        Session::flash('flash_message', 'House updated!');
        return redirect('shipper/warehouses');
    }

    public function deleteHouse($id){
        // House::destroy($id);
        $house = House::findOrFail($id);
        $house->update(['del_flg' => config('constants.ITEM_IS_DELETE')]);

        Session::flash('flash_message', 'House deleted!');

        return redirect('shipper/warehouses');
    }

    public function ship($id, Request $request){
        $param = $request->only(['house', 'comment']);
        $order = Order::findOrFail($id);
        $house = House::findOrFail($param['house']);
        $houseParam = [];
        $houseParam['house_id'] = $house->id;
        $houseParam['order_id'] = $id;
        $houseParam['amount'] = -$order->amount;
        if($param['comment'] == null)
            $param['comment'] = '';
        $houseParam['comment'] = $param['comment'];
        HouseIo::unguard();
        $houseIo = HouseIo::create($houseParam);
        HouseIo::reguard();
        $order->update(['del_flg' => config('constants.BOX_SHIP_DONE')]);
        Session::flash('flash_message', 'Boxes shiped!');
        return redirect('shipper/orders');
    }
}
