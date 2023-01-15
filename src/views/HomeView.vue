<script setup lang="ts">
import router from '@/router';
// import TheWelcome from '../components/TheWelcome.vue'
const toAnothoerView = ()=>{
    router.push('/home')
    console.log("go")
}
</script>

<template>
    <!-- <TheWelcome /> -->
    <div>

    hello2??
    </div>
<div @click="toAnothoerView">
    hello2??
</div>
</template>
