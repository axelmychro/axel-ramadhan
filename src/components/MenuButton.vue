<script setup>
import { Icon } from '@iconify/vue'
import { useMenuState } from '../composables/useMenuState'

const { showMenu } = useMenuState()

const props = defineProps({
  size: {
    type: String,
    required: false,
    default: '',
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
      :class="props.size ? `min-w-${props.size} min-h-${props.size} ` : ''"
      class="shrink-0"
    />
    <Icon
      v-else
      icon="line-md:close-to-menu-alt-transition"
      :class="props.size ? `min-w-${props.size} min-h-${props.size} ` : ''"
      class="shrink-0"
    />
  </button>
</template>
