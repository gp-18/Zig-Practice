<script setup>
import {ref} from "vue" ;
const isActive = ref(true) ;
const num = ref(5) ;
const type = ref("A") ; 
</script>

<template>
 <!-- v-if directive -->
 <h1 v-if="true">true</h1>
 <h1 v-if="isActive">isActive is true</h1>
 <h1 v-if="num === 5">isActive is true</h1>

<!-- v-if and v-else -->
<h1 v-if="true">true</h1>
<h1 v-else>the value is not true</h1>

<!-- v-if v-elseif and v-else -->
<h1 v-if="type ==='A'">displayed value is A</h1>
<h1 v-else-if="type === 'B'">displayed value is B</h1>
<h1 v-else-if="type === 'C'">displayed value is C</h1>
<h1 v-else>a/b/c is not the value</h1>

<!-- v-if on template -->
<!-- on template we can work on v-if v-else-if  and v-else-->
<template v-if="isActive">
  <h1>line1</h1>
  <h1>line2</h1>
  <h1>line3</h1>
</template>

<template v-if="type ==='A'">
  <h1>line1</h1>
  <h1>line2</h1>
  <h1>line3</h1>
</template>

<template v-else-if="type === 'B'">
  <h1>line1</h1>
  <h1>line2</h1>
  <h1>line3</h1>
</template>

<template v-else-if="type === 'C'">
  <h1>line1</h1>
  <h1>line2</h1>
  <h1>line3</h1>
</template>

<template v-else>
  <h1>line1</h1>
  <h1>line2</h1>
  <h1>line3</h1>
</template>


<!-- v-show -->
<h1 v-show="isActive">true v-show</h1>


</template>

<style scoped>

</style>
