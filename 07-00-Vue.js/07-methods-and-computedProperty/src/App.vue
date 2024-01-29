<script setup>
let firstName = ref("parth");
let lastName = ref("gupta");

// const fullName = () =>{
//   firstName.value = "alka" ;
//   return  firstName.value + " " + lastName.value ;
// }

const fullName =computed(()=>{
  return firstName+" "+lastName ;
})


</script>

<template>
<h1>{{ fullName.value }}</h1>
</template>

<style scoped>

</style>
