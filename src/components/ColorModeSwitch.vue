<script setup>
import { Icon } from '@iconify/vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
function switchMode() {
  toggleDark()
}

const props = defineProps({
  size: {
    type: String,
    required: false,
    default: 'auto',
  },
})
</script>

<template>
  <button
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    class="inline shrink-0 cursor-pointer"
    @click="switchMode"
  >
    <Icon
      :class="`min-w-${props.size} min-h-${props.size}`"
      class="shrink-0"
      :icon="isDark ? 'devicon:typescript' : 'devicon:javascript'"
    />
  </button>
</template>
