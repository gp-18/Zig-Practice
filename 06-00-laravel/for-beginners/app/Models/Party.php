<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Party extends Model
{
    // link model to the table
    protected $table = "parties";

    //    primary key 
    protected $primaryKey = "id";

    // fillable columns 
    protected $fillable = array("full_name");
    use HasFactory;
}
