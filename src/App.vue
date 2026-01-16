<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'

import { initializeLenis, destroyLenis } from './composables/useLenis'

const envMode = import.meta.env.VITE_ENV_MODE

onMounted(initializeLenis)
onUnmounted(destroyLenis)
</script>

<template>
  <RouterView />
  <pre>VITE_ENV_MODE:{{ envMode }}</pre>
</template>
