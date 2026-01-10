<script setup>
import { onMounted, onUnmounted } from 'vue'
import { initializeLenis, destroyLenis } from './composables/useLenis'
import { RouterView } from 'vue-router'

onMounted(initializeLenis)
onUnmounted(destroyLenis)
</script>

<template>
  <RouterView />
</template>
