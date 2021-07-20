<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class BalanceController extends Controller
{


//---------------------Customer Balance------------------------------

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function balanceindex()
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
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function balanceshow($id)
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
    public function balanceedit($id)
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
    public function balanceupdate(Request $request, $id)
    {
        //
        $data = User::find($id);

        $data-> balance = 0 +  $request->balance; 

        $data->card_no          = $request->card_no;
        $data->bank_name        = $request->bank_name;       
        $data->balance            = $request->balance;
        $data->save();
    }

    public function balanceeditAdded($id)
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
    public function balanceupdateadded(Request $request, $id)
    {
        //
        $data = User::find($id);

        $data->added = $data->added +  $request->added;
        $data->balance = $data->balance +  $request->added;
        

        $data->card_no          = $request->card_no;
        $data->bank_name        = $request->bank_name;       
        $data->added            = $request->added;
        $data->save();
    }


    public function balanceeditrecharge($id)
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
    public function balanceupdaterecharge(Request $request, $id)
    {
        //
        $data = User::find($id);

        $data->balance = $data->balance - $request->mobile_recharge;

        $request->mobile_recharge = 0;

        $data->card_no          = $request->card_no;
        $data->bank_name        = $request->bank_name; 
        $data->phone            = $request->phone;       
        $data->mobile_recharge  = $request->mobile_recharge;
        $data->save();
    }


    public function balanceeditbill($id)
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
    public function balanceupdatebill(Request $request, $id)
    {
        //
        $data = User::find($id);

        $data->balance = $data->balance - $request->electricity_bill;

        $request->electricity_bill = 0;

        $data->card_no           = $request->card_no;
        $data->bank_name         = $request->bank_name; 
        $data->phone             = $request->phone;       
        $data->electricity_bill  = $request->electricity_bill;
        $data->save();
    }

    public function balanceeditloan($id)
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
    public function balanceupdateloan(Request $request, $id)
    {
        //
        $data = User::find($id);

        $data->loanreq = $data->loanreq + $request->loanreq;

        $request->loanreq = 0;

        $data->card_no   = $request->card_no;
        $data->bank_name = $request->bank_name;       
        $data->save();
    }


    public function balanceeditloanAp($id)
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
    public function balanceupdateloanAp(Request $request, $id)
    {
        //
        $data = User::find($id);

        $data->loan = $data->loan + $request->loan;

        $data->balance = $data->balance + $request->loan;

        $data->loanreq = 0;

        $data->card_no   = $request->card_no;
        $data->bank_name = $request->bank_name;       
        $data->save();
    }

    
    public function balanceeditloanPaid($id)
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
    public function balanceupdateloanPaid(Request $request, $id)
    {
        //
        $data = User::find($id);

        $data->loanpaid = $data->loadpaid + $request->loanpaid;

        $data->loan = $data->loan - $data->loanpaid;

        $data->balance = $data->balance - $data->loanpaid;

        $data->card_no   = $request->card_no;
        $data->bank_name = $request->bank_name;       
        $data->save();
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function balancedestroy($id)
    {
        //
        $data = User::find($id);
        $data->delete();
    }
}