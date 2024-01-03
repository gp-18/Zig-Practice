<?php
/*
- String - A string is a series of characters surrounded by quotes
- Integer - Whole numbers
- Float - Decimal numbers
- Boolean - true or false
- Array - An array is a special variable, which can hold more than one value
- Object - A class
- NULL - Empty variable
- Resource - A special variable that holds a resource
*/

/* --------- Variable Rules --------- */
/*
- Variables must be prefixed with $
- Variables must start with a letter or the underscore character
- variables can't start with a number
- Variables can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
- Variables are case-sensitive ($name and $NAME are two different variables)
*/

$name = "parth" ;
$age = 18 ;

// in boolean when the value is true it shows 1 in echo and shows nothing in echo when the value is false ;

$has_kids = false ; 
 echo $name ," ", $age ," ", $has_kids; 

 echo "my name is ${name} and my age is ${age}"; 

 $x = '5' + '5' ;
//  in js it will give 55 but in php it will give 10 
 echo "${x}" ;
 echo 10 - 5 ; 
 echo 5 - 3 ; 
 echo 5%1 ; 

 define('DB_NAME' , 'dev_db');
 echo DB_NAME ;
?>

