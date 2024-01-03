<?php
// this modules contains the inbuilt php functions 
$fruits = ["apple", "mango", "watermelon", "anotherfruit"];

//  get length 
echo count($fruits);

// search in array 
echo "<br>", in_array("apple", $fruits);

//  add in array 
// way one 
$fruits[] = "grapes";

// way two
array_push($fruits, "strawberry", "anotherfruits one");
print_r($fruits);

// way three 
array_unshift($fruits, "at the starting");
print_r($fruits);

// remove from the array

// from the last  
array_pop($fruits);

// from the starting 
array_shift($fruits);

// at particular index 
unset($fruits[3]);
print_r($fruits);

// split into chunks 
$chunked_into_3 = array_chunk($fruits, 2);
print_r($chunked_into_3);

// Concatenate arrays
$arr1 = [1, 2, 3];
$arr2 = [4, 5, 6];
$arr3 = array_merge($arr1, $arr2);
var_dump($arr3);
$arr4 = [...$arr1, ...$arr2]; // Use Spread
var_dump($arr4);

// Combine arrays (Keys & values)
$a = ['green', 'red', 'yellow'];
$b = ['avocado', 'apple', 'banana'];
$c = array_combine($a, $b);

// Array of keys
$keys = array_keys($c);

// Flip keys with values
$flipped = array_flip($c);
var_dump($flipped);

// range 
$num = range(1,20) ;
// print_r($num) ;

// map 

$num_map = array_map(function($number) {
    return " the numbers are ${number}"  ;
}, $num ) ;

print_r($num_map) ;

// Filter array
$lessThan10 = array_filter($numbers, fn($number) => $number < 10);