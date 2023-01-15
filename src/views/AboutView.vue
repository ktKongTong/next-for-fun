<template>
 <div @click="toAnothoerView">
    hello wht
</div>
hello wht
</template>
<script setup lang="ts">
import router from '@/router';
const toAnothoerView = ()=>{
router.push('/home')
}
</script>
<style>
</style>
