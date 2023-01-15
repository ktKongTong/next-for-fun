<script setup lang="ts">
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted } from 'vue';
import { World } from './world';

onMounted(async () => {
  const container = document.getElementById('render');
  const world = new World(container);
// complete async tasks
console.log("hello")
  await world.init();
  // start the animation loop
  world.start();
})
</script>

<template>
  <div id="render"></div>
  <div  class="router">
    <RouterView />
  </div>
</template>
<style>
.router {
  position: absolute;
  background: lime;
  top: 10px;
  right: 30px;
}
</style>