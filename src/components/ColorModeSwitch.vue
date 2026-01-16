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
    default: '8',
  },
})
</script>

<template>
  <button
    type="button"
    :aria-label="`Switch to ${isDark ? 'light' : 'dark'} mode`"
    class="flex shrink-0 cursor-pointer items-center justify-center"
    @click="switchMode"
  >
    <Icon
      v-if="isDark"
      :class="props.size ? `min-w-${props.size} min-h-${props.size} ` : ''"
      class="shrink-0"
      icon="devicon:typescript"
    />
    <Icon
      v-else
      :class="props.size ? `min-w-${props.size} min-h-${props.size} ` : ''"
      class="shrink-0"
      icon="devicon:javascript"
    />
  </button>
</template>
