<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Role;
use App\Models\Option;
use Illuminate\Http\Request;
use Session;
use Validator;
class AdminController1 extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return void
     */
    public function index()
    {
        return view('admin.uploads.video');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     *
     * @return void
     */
    public function upload_video(Request $request)
    {
        $video_path = '/public/assets/video/';
        $video = $request->file('video');
        if (!is_null($video)) {
            $destinationPath = base_path().$video_path; // upload path
            $fileName = '1.mp4';
            $video->move($destinationPath, $fileName); // uploading file to given path
        }
        Session::flash('flash_message', 'Video has been uploaded successfully!');
        return view('admin.uploads.video');
    }

    public function upload_firmware(Request $request){
        return view('admin.uploads.firmware');
    }

    public function upload_firmware_post(Request $request){
        $data = $request->only(['major_version', 'minor_version']);
        $validator = Validator::make($data, [
            'major_version'    => 'required|numeric',
            'minor_version' => 'required|numeric'
        ]);
        if ($validator->fails()) {
            Session::flash('flash_message', 'Please fill the form with correct data.');
            return view('admin.uploads.firmware');
        }
        $file_path = '/firmware/';
        $fileName = '';
        $file = $request->file('firmware');
        if (!is_null($file)) {
            $destinationPath = base_path().$file_path; // upload path
            $fileName = 'CBox_firmware_v_'.$data['major_version'].'_'.$data['minor_version'];
            $file->move($destinationPath, $fileName); // uploading file to given path
        }
        Option::where('key', 'firmware_major_version')->update(array('value' => $data['major_version'] ));
        Option::where('key', 'firmware_minor_version')->update(array('value' => $data['minor_version'] ));
        Option::where('key', 'firmware_file_name')->update(array('value' => $fileName ));
        Session::flash('flash_message', 'Firmware has been uploaded successfully!');
        return view('admin.uploads.firmware');
    }
}
