<script setup>
import {ref , reactive} from "vue" ;

const formData = reactive({
  fullName: " " ,
  email:" ",
  password:" ", 
  message:" ", 
  checkbox:" " ,
})

const handleFormSubmit = () => {
console.log("handle form submit" ,formData)
}
</script>

<template>
  <p>{{ formData.fullName }}</p>
<form @submit.prevent="handleFormSubmit">
  <div>
    <label for="name">Name</label>
    <input type="text" name="" id="name" v-model="formData.fullName">
  </div>

  <div>
    <label for="email">email</label>
    <input type="email" name="" id="email" v-model="formData.email">
  </div>

  <div>
    <label for="password">password</label>
    <input type="password" name="" id="password" v-model="formData.password">
  </div>

  <div>
    <label for="message">message</label>
    <textarea id="message" cols="30" rows="10" v-modeL="formData.message"></textarea>
  </div>

  <div>
    <label for="checkbox">checkbox</label>
    <input type="checkbox" id="checkbox" v-model="formData.checkbox">
  </div>
</form>
</template>

<style scoped>

</style>
