<script setup>
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
function switchMode() {
  toggleDark()
}

import { Icon } from '@iconify/vue'
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
      class="border-invert min-h-8 min-w-8 border"
      icon="devicon:typescript"
    />
    <Icon
      v-else
      class="border-invert min-h-8 min-w-8 border"
      icon="devicon:javascript"
    />
  </button>
</template>
