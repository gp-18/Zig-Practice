<?php
// simple arrays 
$number = [ 1 , 2 , 3 , 4] ;
print_r($number) ;

// second way 
$fruits = array("apple" , "mango");
var_dump($fruits) ;
echo $fruits[1] ;

// associatvea array 
//  we can create our own index and value to it just like key value pair

$colors = [
    1 => "red" ,
    12 => "blue"
];

echo $colors[12] ;

$colors = [
    1 => 'red',
    2 => 'green',
    3 => 'blue',
  ];
  
  // echo $colors[1];
  
  // Strings as keys
  $hex = [
    'red' => '#f00',
    'green' => '#0f0',
    'blue' => '#00f',
  ];
  
  echo $hex['red'];
  var_dump($hex);

  $person1 = [
    'first_name' => 'Brad',
    'last_name' => 'Traversy',
    'email' => 'brad@gmail.com',
  ];
  
  // Array of people
  $people = [
    $person1, //   [...$person1]
    [
      'first_name' => 'John',
      'last_name' => 'Doe',
      'email' => 'john@gmail.com',
    ],
    [
      'first_name' => 'Jane',
      'last_name' => 'Doe',
      'email' => 'jane@gmail.com',
    ],
  ];
  
  var_dump($people);
  
  // Accessing values in a multi-dimensional array
  echo $people[0]['first_name'];
  echo $people[2]['email'];
  
  // Encode to JSON
  var_dump(json_encode($people));
  
  // Decode from JSON
  $jsonobj = '{"first_name":"Brad","last_name": "Traversy","email":"brad@gmail.com"}';
  var_dump(json_decode($jsonobj));
?>