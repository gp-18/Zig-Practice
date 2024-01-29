<script setup>
const message = "hello i am parth" ;

function testingfunction(){
  return "this is the test function" ;
}

const on = true ; 
</script>

<template>
<h1>{{ message }}</h1>
<p>{{ 10 + 10  }}</p>
<h1>{{ testingfunction() }}</h1>
<p>{{  on ? "dark" : "light" }}</p>

</template>

<style scoped>

</style>
