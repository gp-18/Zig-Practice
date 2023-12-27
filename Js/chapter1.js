// chapter - 1  datatype 

// console.log("hello world"); 

// var score = 18 ;
// var score = 19 ; 
// //  the disadvantage with the var is it can be reassigned with the same name which cause the error 

// let points = 99 ;
// points = 100 ; 
// //  in let variable cannot be reassgined but value can be change 

// const number = 1 ;
// // in const once the value is assigned it cannot be changed 
 

// // datatypes 
// // 7 datatype
// // number : 1 , 1.22 
// // string : " i am string" , "18";
// // boolean : true and false ; 
// //  null means empty let score = null ;
// // undefined : let name ; the value is not defined therefore it is undefined 
// // object   



// // strings 
// let firstName = "parth" ;
// let lastName = "gupta" ;
// console.log(firstName , lastName) ;
// let fullName = "parth gupta" ;
// let anothername = `my name is ${fullName}` ;  

// // string access 
// console.log(firstName[0]);

// // string methods ;

// console.log(fullName.toUpperCase());

// let trimvar = anothername.trim();

// // slice method slice(0,5) the 5 is not included it only the 0 1 2 3 4 

// // string are inmutable it does not change the orignial string 

// // split

// let colours = "red white brown pink yellow" ;

// let splitColour = colours.split(" ");

// console.log(splitColour);

// // number 
// let score = 44 ;

// console.log(typeof(score));

// // rule for solving is 
// // priority and precedence  * / + - left to right 

// //  == vs === 
// // == only checks for the value whereas === checks for the value as well as for the datatype 

// //  type conversion
// // string to number 
// let strings = "1122";
// let stringnumber = Number(strings);
// console.lof(stringnumber);


// let nam = 33 ;
// let convert = String(nam);
// console.log(convert);

// // arrays 
// let arrays = [1 , "parth" , "helloee" ,  55] ;

// // method 
// // push pop 
// // shift and unshfit 

// // comparision operators 



// // chapter -2 control flows 

// // for loop 
// // while loop 
// // do while 

// // if 
// // if else 
// // if elseif else 
// // nested if else 

// // continue and break 
// // continue means ke skip the current situation (1 3 4 5 skip 2 )
// // break if that value come it terminate all other ( 1 2 over)

// // logical operators 

// // block scope  and variable scope 
// // scope means ke where they can be access 
 
// // global scaope var
// // block scope let 

// // ternary operators 
// // (condition) ? true : false ; 


// // switch case 

// // switch(varible name)

// // case value : properties 
// // break ;

// // default : properties 
// // break ;


// // chapter 3 functiions 
// // MAIN THERE ARE  TYPES OF FUNCTION 

// // NORMAL FUNCTIONS , ASSIGN IT TO THE VARAIABLE AND ARROW FUNCTION , CALLBACKS(PASSING FUNCTION AS AN ARUGMENT), FUNCTION RETURNING FUNCTION  

// // function ThisIsTheFunction(){
// //     console.log("this is the normal function");
// // }

// // ThisIsTheFunction();


// // let nameOfFunction = function(a,b){
// //     console.log(`this is the function assigned to the variable ${a*b}`);    
// // }

// // nameOfFunction(10,20);

// // let DefaultValues = function (a = "default value")
// // {
// //     console.log(a);
// // }

// // DefaultValues();
// // DefaultValues("parth");

// // let ArrowFunction = (a,b) =>{
// //     console.log(`this is the arrow function i am using ${a+b}`);
// // }

// // ArrowFunction(10,20);

// // let AnotherArrowFunction = (a , b) =>{
// //     return(a-b);
// // }

// // console.log(AnotherArrowFunction(10,5));


// // let normalPrint = a => `this is the single line arrow function ${a}` ;

// // console.log(normalPrint(18));


// // passing function as an arugment (higher order function) this is also callled as callback function where functions are passed as an argument to another function 

// // let uppercase = function (str){
// //     return str.toUpperCase();
// // }

// // let transformer = function(str , fun)
// // {
// //     return fun(str);
// // }

// // console.log(transformer("hello",uppercase))

// // let lowerCase = function (str)
// // {
// //     return str.toLowerCase();
// // }

// // let transformer = function (str , fun)
// // {
// //     return fun(str);
// // }

// // console.log(transformer("PARTH GUPTA" , lowerCase));

// // FUNCTION RETURNING THE FUNCTION 

// // function hi(message){
// //     return function(name){
// //         console.log(`${message} ${name}`);
// //     }
// // }

// // hi("this is the message")("with name");

// // SETTIMEOUT AND SETINTERVAL 

// // settimeout is used when we want to run a function after some time 

// // setinterval is used when we want to run a function repeatedly after some interval of time 

// // number which are given are in milliseconds 


// // setTimeout(function greeting(){
// //     console.log("hello");
// // },5000);


// // setInterval(function thisIsInterval(){
// //     console.log("this is the interval i am using")
// // },5000);



// // hoisting

// // var are hoisted which means 

// tested = 10 ;
// console.log(tested);
// var tested ;

// // the above same thing is cannot be done by let and const 

// // normal functions are hosited too 
// test()
// function test()
// {
//     console.log("this function is hoisted");
// }


// // other two function which are used are not hoisted the other two are the function expression which are used to assign to the varible and arrow function 

// // this is the normal function 
// function sum  (a , b)
// {
//     return a , b;
// }

// // this is the function expression function assigned to the variable 
// let sum1 = function (a ,b)
// {
//     return a+ b ;
// }

// // this is the arrow function 
// let sum = (a,b) => {
//     return a+b ;
// }


// chapter 4 objects 
// let car = {
//     color:"black" ,
//     model:2022,
//     "built in" : "mustang"
// }

// console.log(car);
// console.log(car.color);
// console.log(car["built in"]);


// // we can access in 2 way . and [] but the best way is to access with [] because . cannnot take space in betwween and [] can . therefore [] are the best we want to access 

// // modify 

// car["color"] = "pink" ;
// car.model = 2024 ;

// // delete 

// delete car["built in"] ; 

// // methods are the functions which are declare inside the objects 


// let person = {
//     age : function(birthyear = 2003)
//     {
//         console.log(birthyear);
//     }
// }

// person.age(2001);


// // this keyword 

// let person1 = {
//     name : "parth gupta" ,
//     "get summary" : function ()
//     {
//         return `$(this.name)`;
//     } 
// }

// console.log(person1["get summary"]);


// // in forEach loop we get the function and with the help of the function we need to print .
 
// // forof loop works on the element itself 

// // forin loop works on the index 

// // object inside the array 

// let hi = [
//     {
//         userName : "parth",
//         add:"opp"
//     },
//     {
//         userName : "agga" ,
//         add:"o"
//     },
//     {
//         userName : "dadada",
//         add:"op"
//     },
//     {
//         userName : "daddffd",
//         add:"p"
//     },
//     {
//         userName : "esdfass",
//         add:"+"
//     },
// ]

// // for of loop directly works on the value 
// for (const name of hi) {
//         console.log(name["userName"]);    
// }

// // for in loop works on the indexs 
// for(const a in hi){
//     console.log(hi[a]["add"]);
// }


// // pass by value and pass by reference 

// // arrays and objects are pass by refernce is you want to differnce then use spread operator 

// let arr1 = [8,16,18,27];

// let arr2 = arr1 ; 

// console.log(arr1) ;
// console.log(arr2) ;

// arr2.shift();

// console.log(arr1) ;
// console.log(arr2) ;


// // therefore use shift oprators that does not change the original array 


// chapter - 5 
// DOM Manipulations (document object model)
//  we mainly do 2 things in dom 
// first select the element 
// and then modify it 

// queryselector 
// console.log(document.querySelector(''));
// query selectros all gives us the node list 
// console.log(doucment.querySelectorAll(''));

// . for class selector 
// # for id selector 

// doucment.getElementById();


// modification is done in 2 way
// by updating the text or by updating the innerHtml 
// let name = doucment.querySelector();
// console.log(name.innerText);
// console.log(name.innerHTML);
 
// styling with js 
// heading.style.color = "red" ;

// add remove and replace class elements 

// heading.classList.add("");
// heading.classList.remove("");
// heading.classList.replace("" ,"");


// events 
// heading.addEventListener("click" ,function(e){
    // console.log(e.target); 
// });

// name.addEventListener("hover" , (e) =>{
//     console.log("heeleoeoe");
//     console.log(e.target.value);
// })

// chapter 6 form
// e.preventDefault is used in form to prevent the reload ;
// regular expression (regex) used in form validation  


// chapter - 7 arrays  methods 

// reverse the array 
// this is the mutable method which means it change the orignal array 
// let letter = ["a" , "b" , "c"] ;
// let reverseLetter = letter.reverse();


// concat the array this is not mutable 
// let num = [1 ,2 ,3]  ;
// let num1 = ["a" , "b" ,"c"] ;
// let concated = num.concat(num1);


// join method string type not mutable just array in string 
// let join = num.join(-);

// negative number indicates the elements from the last 

// slice method  not mutable give new array 
// array.slice(string index , end index (not included))
// give ans in array format

// splice mutable used to remove and add in the array 
// Array.splice(index , deleteValue , ValueToBeAdded)
// return deleted item 
// give ans in array format 


// atMethod  give ans in interger form 
// Array.at(1);


// map method 
// give new array from the original array 
// let num = [1 ,2 ,3]  ;

// let num2 = num.map(variable => {
//     let a = toString(variable);
//     return a ; 
// })

// console.log(num2);

// filter 
// give new array from the original array 
// used to check whether to put or not to put 
// let num = [1 ,2 ,3]  ;

// let num2 = num.filter(n =>{
//     if(n <= 2){
//         return n ;
//     }
// })

// console.log(num2);

// array reduce 
// it is used to reduce the array elements 

// let num = [ 1 ,2 , 3] ;
// let sum = num.reduce(function,starting index);

// find 
// Array.find(function)

// findIndex
// Array.findIndex(function);


// some and every 
// give ans in true or false form 
// if every element pass then it give true in every method 
// if some element pass then it give true ans 

// flat 
// convert nested array into the 1d array 
// it concate the nested array into the array 
// Array.flat() bydefault its value is one but when we need more then we can give 

// sorting   
// Array.sort();
// treats in the form of string so at the time of negative number it give wrong ans 
// so to overcome that do 

// this is the perfect sort function 
// Array.sort((a,b) =>{ return a-b } ) ;

// chaining method 
// when we put on method after the another method 


// chapter - 8 date and time method 

// // month start form 0 - 11 that is janurary
// //  date(year , month , date) ;
// let currentDate = new Date() ;
// console.log(currentDate) ;

// // date is gnerally seen in the terms of ms (mili seconds)

// let hr = currentDate.getHours() ;
// console.log(hr) ;

// let utc = currentDate.toUTCString() ;
// console.log(utc);
// let iso = currentDate.toISOString() ;
// console.log(iso) ;


// // chapter - 9 local storage 

// // when we refresh the page all the information is removed from it . from the current state we loose it 

// // when we work with the browser database then it is called as local storage 

// // console.log(window);
// // console.log(localStorage);

// // 3 main property
// // set item  get item update item 


// //  set item 
// // for set item setitem(key , value) gnereally both are string only 
// localStorage.setItem("key" , "value") ;
// console.log(localStorage) ;

// // get item 
// // to get the item we need to give only the key it will automatically will give the value 

// localStorage.getItem("key") ;
// console.log(localStorage.getItem("key")) ;

// // update 
// // their is nothing update property in it but when we pass the set item with the same key then it just update the value from pervious to orignal new array 

// localStorage.setItem("key" , "newUpdatedValue") ;
// console.log(localStorage.getItem("key")) ;


// // remove item 
// // it is used to remove one thing at a time 
// localStorage.removeItem("key");


// // clear item 
// // it is used to remove all the things 
// // it is used to empty the storage 
// localStorage.clear();

// how to store complex data structre array of objects types  

// so to store the complex data structure we use the stringfy meethod the because local storage save things in strings format only so to deal with it we use JSON.stringfy()

// let string = JSON.stringify() ;

// if we want to convert it into the object format then 
// JSON.parse() ;


// chapter 10 object oriented programming  
// older class js is diffcult to understand the prototype and proto 

// this keyword 
// this refer to the current variable 


// new keyword 
// this is used to create a new instance of the object
// let car = function(color , model)
// {
//     this.carColor = color ;
//     this.carModel = model ; 

//     this.engine = function(){
//         console.log(this.carColor , this.carModel) ;
//     }
// }

// car.prototype.startEngine = function()
// {
//     console.log("start engine") ;
// }

// let instanceofCar = new car("yellow" , 2020) ;

// prototype and __proto__

// es6 modern js classes 

// class Car {
//     Car(color , model) {
//         this.color = color ;
//         this.model = model ; 
//     }

//     startEngine(){
//         console.log("engine start") ;
//     }
// }

// let honda = new Car("red" , 2002) ;
// honda.startEngine() ;

// getter and setter 
// seter is used to set the value 
// getter is used to get the value 

//  inheritance 
// use of extend keyword 


// chapter - 11 async js 

// console.log(1);
// console.log(2);

// setTimeout(() =>{
//     console.log("time given in miliseconds") ;
// },3000)

// console.log(3);
// console.log(4);


// xml old and hard method best mehtod is the fetch api 
// async await 

// fetch("data.json").then((response) =>{
//     console.log("response :" , response );
//     return response.json() ;
// }).then((data)=>{
//     console.log(data);
// }).catch((error) =>{
// console.log("error : " , error ) ;
// })

// this is the best way to call an api 

    // async function callApi(){
    //   const response = await fetch("api") ;
    //   const ans = await response.json() ;
    //   return ans ;   
    // }


    // chapter - 12 modern js 
    
    // destructing of the arrays 
    // let items  = [ 1 , 2 , 3 , 4 ] ;
    // const [a , b , ...c] = items ; 
    // const [e ,f] = c ; 
    // console.log(a , b , c , e ,f )  ;

    // nested array destructing 
    // const array = [1 , 2 , [ 3 , 4]] ;
    // const [a , b , [c , d]] = array ; 
    // console.log(a , b , c , d) ;


    // swapping without using the 3rd varible 
    // [one , two] = [two , one ] ;


    // array insde a object and then array destructing 
    // let hotel = {
    //     name : "hottell" ,
    //     location : "street no xyz delhi" ,
    //     categories : ["indian" , "italian" , "rusiaan" , 18] 
    // }

    // const [i , it , r , no] = hotel["categories"] ;
    // console.log(i , it , r , no) ;   

    
    // object destructing 
    
    
    //  let hotel = {
    //     name : "hottell" ,
    //     place : "street no xyz delhi" ,
    //     categories : ["indian" , "italian" , "rusiaan" , 18] , 
    //     cat : {
    //         "indian" : "italian" , 
    //         "rusiaan" : 18
    //     } 
    // }

    //  in object destructing the key name should be same 
    // const {name , location , categories} = hotel ; 

    // if you want to change the name then 
    // const { name : a , place : b , categories : [e , f]  , cat : {indian , rusiaan}} = hotel ; 
    // console.log(a , b ,e , f , indian , rusiaan ) ;


    // spread operators 
    // it convert array into numbers 
    // let nums = [ 1, 2, 3, 4] ;
    // let num1 = [...nums] ;


    // rest operators 
    // it convert number into array 
    //  let nums = [ 1 , 2 ,3 ,4 , 5 , 6] ;
    //  const [ value1 , value2 , ...value3] = nums ; 

    // so here the value3 is the example of the rest operators 
    // console.log(value3) ;

    // fasly anf truth values 
    // falsy values 0 false null undefined  " "

    //  ?? they are used to check the variable should not be null ans undefined because they are the falsy values 

    // if ?? null or undefined values are used then the value after the ?? is implemented 


    // let ans = null ;
    // const a =  ans ?? 10 ; 
    // console.log(a) ;


    // for of loops 
    // it directly work on the element and not on the index 
    // for(let element of elements ){
    //     console.log(element) ;
    // }

    // enhance objects 
    // object ke under object directly define ho skta h 
    // function directly define ho skte h 
    // play (){}

     

// js complete 