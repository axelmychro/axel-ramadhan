<script setup>
import { onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'

import { initializeLenis, destroyLenis } from './composables/useLenis'

onMounted(initializeLenis)
onUnmounted(destroyLenis)
</script>

<template>
  <RouterView />
</template>
