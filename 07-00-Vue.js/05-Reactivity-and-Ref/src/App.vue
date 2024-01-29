<script setup>
import {reactive} from "vue"

// example : 1 

// without reactivity 
// let num = { a:10 , b:20} ;
// setTimeout(() =>{
// console.log("setTimeout Called");
// console.log("num" , num);
// num.a = 30 ; 
// console.log("a value is " , num.a);
// },2000)

// with reactivity 
// let num = reactive({ a:10 , b:20}) ;
// setTimeout(() =>{
// console.log("setTimeout Called");
// console.log("num" , num);
// num.a = 30 ; 
// console.log("a value is " , num.a);
// },2000)


// example 2 

// without reactivity 
// let count = 0 ; 
// setTimeout(()=>{
// console.log("setTimeOut Called");
// count++;
// console.log("count:" , count);
// },5000)

// with reactive
// let num = reactive({count:0});
// setTimeout(()=>{
// console.log("settimeout called");
// num.count++;
// console.log("count" , count) ;
// },5000)


// deep reactive 
const obj = reactive({
  num : {count : 0},
  user:["user1" , "user2"],
});

setTimeout(()=>{
console.log("settimeout called");
console.log("obj" , obj);
console.log("obj.num" , obj.num);
console.log("obj.num.count", obj.num.count);
console.log("obj.user" , obj.user);
obj.num.count++;
obj.user.push("user3");
obj.user.reverse();
console.log("count" , count) ;
},5000)

</script>

<template>
<!-- example 1 : -->
<!--   <h1>sum : {{ num.a + num.b }}</h1> -->

<!-- example2 :  -->
 <!-- <h1>count : {{ num.count }}</h1> -->


<!-- deep reactive -->

</template>

<style scoped>

</style>
