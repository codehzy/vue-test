<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { ContentLoader } from "vue-content-loader";
const HelloWorld = defineAsyncComponent(
  () => import("./components/HelloWorld.vue")
);
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Suspense>
    <template #default>
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite"></HelloWorld>
    </template>
    <template #fallback>
      <content-loader></content-loader>
    </template>
  </Suspense>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
