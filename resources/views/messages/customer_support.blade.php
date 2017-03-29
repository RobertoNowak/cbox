@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <h1>MillionMitzvot support</h1>
        <label class="form-control">Ask anything</label>
        {!! Form::open([
            'method'=>'POST',
            'url' => ['/customer_support'],
            'class' => 'form-horizontal',
            'role' => 'form',
        ]) !!}
            <div class="row">
                <div class="col-md-12 col-sm-12">
                    <fieldset>
                        <legend>Thank you for contacting us. We will response in a few minutes.</legend>
                        <div class="form-group margin-top:20px">
                            <div class="col-xs-12">
                                <input class="form-control" name="message" type="text" placeholder="Type message here"> </span>
                            </div>
                        </div>
                    </fieldset>
                </div>
            </div>
        {!! Form::close() !!}
    </div>
</div>
@endsection
