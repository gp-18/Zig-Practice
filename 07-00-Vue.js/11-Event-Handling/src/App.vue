<script setup>
import {ref} from "vue" ;
const count = ref(0) ;

function say(){
  console.log("hellooo") ;
}

function parameter(str){
  console.log(str) ;
}

const onsubmit =() =>{
  console.log("submit default called");
}
</script>

<template>
<h1>{{ count }}</h1>
<button @click="count++">increase</button>
<input @focusin="count--" type="text">
<button @click="say()"></button>
<button @click="say"></button>
<button @click="parameter('byee...')"></button>
<button @click="parameter($event)">event</button>
<button @click="(event) =>parameter(event)">inline</button>


<form @submit.prevent="onsubmit">
<button type="submit">submit button</button>
</form>

</template>

<style scoped>

</style>
