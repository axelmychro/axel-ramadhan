<script setup lang="ts">
import { useMenuState } from '../composables/useMenuState'
import { navigationLinks } from '../data/siteConfig'
import { Icon } from '@iconify/vue'
import MenuButton from '../components/MenuButton.vue'
import ColorModeSwitch from '../components/ColorModeSwitch.vue'
import { useDark } from '@vueuse/core'

const { showMenu } = useMenuState()
const isDark = useDark()
</script>

<template>
  <div
    class="fixed top-0 right-0 z-50 flex min-h-16 min-w-12 items-center justify-center lg:hidden"
  >
    <MenuButton />
  </div>

  <nav
    :class="showMenu ? 'translate-x-0' : 'translate-x-52'"
    class="fixed top-0 right-0 bottom-0 z-20 min-w-64 border-l-2 transition-transform duration-500 ease-out"
  >
    <div
      :class="showMenu ? 'bg-primary' : ''"
      class="flex min-h-16 items-center border-b-2 p-2 transition duration-500"
    >
      <ColorModeSwitch class="border-default" />
      <span
        class="pointer-events-none leading-none font-bold tracking-tighter uppercase select-none"
        aria-hidden="true"
        >「{{ isDark ? 'order' : 'chaos' }}」</span
      >
    </div>
    <a
      v-for="link in navigationLinks"
      @click="showMenu = false"
      class="block truncate border-b-2 p-2 font-serif text-[2rem] leading-none font-medium tracking-tight uppercase select-none"
      :key="link.to"
      :href="link.to"
      ><Icon class="bg-primary inline border" :icon="link.icon" />
      {{ link.label }}</a
    >
  </nav>
  <div
    :class="showMenu ? '-translate-x-52' : 'translate-x-0'"
    class="fixed top-14 right-9.75 z-30 min-h-4 min-w-4 border-2 transition-transform duration-500 ease-out"
  />
</template>
