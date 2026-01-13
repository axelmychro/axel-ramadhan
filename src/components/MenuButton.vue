<script setup>
import { Icon } from '@iconify/vue'
import { useMenuState } from '../composables/useMenuState'

const { showMenu } = useMenuState()

const props = defineProps({
  size: {
    type: Number,
    required: false,
    default: 4,
  },
})
</script>

<template>
  <button
    class="flex shrink-0 cursor-pointer items-center justify-center"
    type="button"
    aria-label=" navigation menu"
    @click="showMenu = !showMenu"
  >
    <Icon
      v-if="showMenu"
      icon="line-md:menu-to-close-alt-transition"
      :class="`min-w-${props.size} min-h-${props.size} shrink-0`"
    />
    <Icon
      v-else
      icon="line-md:close-to-menu-alt-transition"
      :class="`min-w-${props.size} min-h-${props.size} shrink-0`"
    />
  </button>
</template>
