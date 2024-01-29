<script setup>
import {ref , reactive , isRef} from "vue";

let a = 10 ; 
let b = ref(10) ;
console.log(isRef(a));
console.log(isRef(b));
console.log(unref(b));

let c = isRef(b) ? b.value : b ;

let num = reactive({count : 10})
console.log(isReactive(num));
console.log(isProxy(num));
</script>

<template>

</template>

<style scoped>

</style>
