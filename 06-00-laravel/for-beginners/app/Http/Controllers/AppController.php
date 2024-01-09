<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Party;
use Illuminate\Support\Facades\DB;

class AppController extends Controller
{
    public function index()
    {
        // return "helloo parth" ;
        // $name = "parth gupta";
        // $phone = "9662044751";

        // using compact 
        // return view("welcome", compact("name"));

        // // using associative array
        // return view('wecome', array(
        //     'name' => $name,
        //     'phone' => $phone
        // ));

        // using with method
        // return view("welcome")->with("name", $name)->with("phone", $phone);

        // insert operatiions in model option -1 
        // $party = new Party;
        // $party->full_name = "parth gupta";
        // $party->phone_no = "1234567890";
        // $party->save();

        // insert - option -2 
        // $param = array(
        //     "full_name" => "abc",
        //     "phone_no" => "1234567890"
        // );

        // party::create($param);

        // select operations 
        // select all operators 
        // $parties = party::all();
        // dd($parties);

        // select one operation by id 
        // $id = 1;
        // $party = party::find($id);
        // dd($party);

        // select one record by another column /field 
        // $party = Party::where("phone_no" ,"87678")->get();
        // dd($party);

        // update 
        // $id = 1;
        // $party = party::find($id);
        // $party->full_name = "parth gupta";
        // $party->save();

        // delete 
        // $id = 1;
        // $party = party::find($id);
        // $party->delete();

        // query builder 
        // insert 
        // $param = array(
        //     "full_name" => "parth gupta"
        // );

        // DB::table('parties')->insert($param);

        // select 
        // $party = DB::table("parties")->get();
        // echo "<pre>"; 
        // print_r($party);

        // update
        // $param = array(
        //     "full_name" => "parth gupta"
        // );

        // DB::table('parties')
        //     ->where('id', 6)
        //     ->update($param);

        // delete
         // DB::table('parties')
        //     ->where('id', 6)
        //     ->delete();

    }

    public function about()
    {
        return "hello from about";
    }
}
