<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainLayout from './components/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f8f9fa;
  color: #2c3e50;
}

#app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}

/* Force fullscreen */
html,
body,
#app {
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  outline: 0 !important;
  font-size: 100% !important;
  vertical-align: baseline !important;
  background: transparent !important;
}

/* Fullscreen styles */
.fullscreen {
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: 100vw !important;
  height: 100vh !important;
  z-index: 9999 !important;
  background: #f8f9fa !important;
}

/* Hide browser UI elements when in fullscreen */
.fullscreen body {
  overflow: hidden !important;
}

.fullscreen #app {
  height: 100vh !important;
  width: 100vw !important;
}
</style>
