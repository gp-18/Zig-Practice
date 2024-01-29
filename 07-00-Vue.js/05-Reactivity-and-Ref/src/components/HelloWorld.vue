<script setup>
let a = ref(10) ;
let b = ref(20) ;


setTimeout(() =>{
console.log(a);
console.log(b) ;
a.value = 30 ; 
},2000)

</script>

<template>
<h1>{{ a+b }}</h1>
</template>

<style scoped>

</style>
