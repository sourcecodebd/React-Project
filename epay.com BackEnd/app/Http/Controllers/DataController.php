<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\review;

class DataController extends Controller
{


//---------------------Customer Profile------------------------------

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $data = User::all();
        return $data;
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $data = new User();
        $data->full_name= $request->full_name;
        $data->email= $request->email;
        $data->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        $data = User::find($id);
        return $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $data = User::find($id);
        return $data;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $data = User::find($id);
        $data->full_name= $request->full_name;
        $data->email= $request->email;
        $data->password= md5($request->password);
        $data->save();
    }

 /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateimage(Request $request, $id)
    {
        
        if($request->hasFile('myfile')){
            $file = $request->file('myfile');  
            /*echo $file->getClientOriginalName()."<br>";  
            echo $file->getClientOriginalExtension()."<br>";  
            echo $file->getSize()."<br>";*/
            //$file->move('upload', $file->getClientOriginalName());
            
            $filename = time().".".$file->getClientOriginalName();
            
            $file->move('upload', $filename);
        }

        $data = User::find($id);
        $data->img= $filename;
        $data->save();
        
        //Working
        // if($request->hasFile('myfile')){
        //     $file = $request->file('myfile');  
        //     $filename = $file->getClientOriginalName();
        //     $finalName = date('His'). $filename;
        //     $request->file('myfile')->storeAs('images/', $finalName, 'public');
        //     $data = User::find($id);
        //     $data->img= $finalName;
        //     $data->save();
        //     return response()->json(['message' => 'Successfully Uploaded Profile Picture']);
        // }
        // else{
        //     return response()->json(['message' => 'Uploading Profile Picture Failed']);
        // }

        
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        $data = User::find($id);
        $data->delete();
    }

//---------------------Review------------------------------
/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function reviewindex()
    {
        //
        $data = review::all();
        return $data;
    }


   /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function reviewshow($id)
    {
        //
        $data = review::find($id);
        return $data;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function reviewstore(Request $request)
    {
        //
        $data = new review();
        $data->full_name= $request->full_name;
        $data->review= $request->review;
        $data->save();
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function reviewedit($id)
    {
        //
        $data = review::find($id);
        return $data;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function reviewupdate(Request $request, $id)
    {
        //
        $data = review::find($id);
        $data->full_name= $request->full_name;
        $data->review= $request->review;
        $data->save();
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function reviewdestroy($id)
    {
        //
        $data = review::find($id);
        $data->delete();
    }


//---------------------Contact------------------------------
/**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function messageindex()
    {
        //
        $data = User::all();
        return $data;
    }


   /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function messageshow($id)
    {
        //
        $data = User::find($id);
        return $data;
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function messagestore(Request $request)
    {
        //
        $data = new User();
        $data->full_name= $request->full_name;
        $data->message= $request->message;
        $data->save();
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function messageedit($id)
    {
        //
        $data = User::find($id);
        return $data;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function messageupdate(Request $request, $id)
    {
        //
        $data = User::find($id);
        $data->full_name= $request->full_name;
        $data->message= $request->message;
        $data->save();
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function messagedestroy($id)
    {
        //
        $data = User::find($id);
        $data->delete();
    }
}

