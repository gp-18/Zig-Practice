<script setup>
import {ref , reactive , computed} from "vue" ;
const students = ref(["rahul" ,"sonam" ,"rohit"]) ;

const object = ref([
  {name:"parth gupta" , age:20},
  {name:"alka gupta" , age:52},
  {name:"anup gupta" , age:53},
  {name:"priyanka gupta" , age:25},
])

const array = ref([
  [1 ,2],
  [3,4],
  [5,6]
])
</script>

<template>
<h1 v-for="student in students">{{ student }}</h1>
<h1 v-for="(student ,i) in students" :key="i"> {{i}} {{ student }}</h1>

<h1 v-for="o in object">{{ o.name }}</h1>
<h1 v-for="({name , age} , i) in object" :key="i">{{ name }} {{ age }}</h1>

<div v-for="a in array">
  {{ a }}
  <h1 v-for="i in a">{{ i }}</h1>
  </div>

  // v-for and v-if
  <h1 v-for="(student ,i) in students" :key="i"> 
    <h1 v-if="age > 50">{{ student }}</h1>
  </h1>
</template>

<style scoped>

</style>
