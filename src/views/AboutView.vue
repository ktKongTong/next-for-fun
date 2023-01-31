<template>
 <div @click="toAnotherView">
    hello wht
</div>
hello wht
</template>
<script setup lang="ts">
  import router from '@/router';
  const toAnotherView = ()=>{
    router.push('/home')
  }
</script>
<style>
</style>
