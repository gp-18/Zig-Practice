<?php
$y = 10 ; 
function registerUser(){
    //  if you want to use the thing which is outside the function and need to call inside then use it like this 

    global $y;
    echo $y;
    $x = 10 ; 
    echo "user registeration is done" ;
}

// this will cause an error because x is define inside function you cannot access it outside 
// echo $x ; 

registerUser();

function sum($n1 , $n2){
    return $n1+$n2;
} 

$num = sum(5, 15) ;

echo " <br>${num} " ;

// when we want to pass the default values 

function sum1($n1 = 0 , $n2 = 0){
    return $n1+$n2;
};

$num1 = sum1() ;

echo " <br>${num1} " ;

$subtract = function($n1 , $n2){
    return $n1 - $n2;
};

echo "<br>" , $subtract(5 , 10);

//  now working with arrow functions 
$multiply = fn($n1 , $n2) => $n1 * $n2 ;

echo "<br>" , $multiply(5 , 10) ;
?>