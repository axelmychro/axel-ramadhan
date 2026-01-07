<script setup>
import { Icon } from '@iconify/vue'
import { useMenuState } from '../composables/useMenuState'

const { showMenu } = useMenuState()
</script>

<template>
  <button
    @click="showMenu = !showMenu"
    class="flex shrink-0 cursor-pointer items-center justify-center"
    type="button"
    aria-label=" navigation menu"
  >
    <Icon
      v-if="showMenu"
      icon="line-md:menu-to-close-alt-transition"
      class="min-h-8 min-w-8 backdrop-blur-xs"
    />
    <Icon
      v-else
      icon="line-md:close-to-menu-alt-transition"
      class="min-h-8 min-w-8 backdrop-blur-xs"
    />
  </button>
</template>
