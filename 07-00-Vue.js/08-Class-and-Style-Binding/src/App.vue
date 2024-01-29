<script setup>
const c1 = ref("red") ;
const bg = ref("green") ;

const styleObj = reactive({
  color:"yellow" ,
  backgroundColor:"black" 
})

</script>

<template>
<h1 style="color:red ; background: blueviolet;">hello 1</h1>
<h1 v-bind:style="{color:'red', backgroundColor: 'blue'}">hello 2</h1>
<h1 :style="{color:'black' ,backgroundColor:'white'}">hello 3</h1>
<h1 :style="{color:c1 , backgroundColor:bg}">hello 4</h1>
<h1 :style="styleObj">hello 5</h1>
</template>

<style scoped>


</style>
