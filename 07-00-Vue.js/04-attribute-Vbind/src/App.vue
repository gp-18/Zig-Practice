<script setup>
const mydata = " jack" ;
const url = "https://www.google.com/"

const obj = {
  id:"this is the id" ,
  url:"https://www.google.com/"
}
</script>

<template>
 <h1>{{ mydata }}</h1>
 <div :id="mydata">this is the passing of script ki value into the html ke attribute ki value ko </div>
 <a :href="url" target="_blank">this is the url using vbind shortcut : and then attribute name </a> <br>

 <a v-bind="obj">this is the object v bind</a><br>

 <a v-bind:[attributeName]="url">visit</a>
</template>

<style scoped>

</style>
