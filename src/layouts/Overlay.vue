<script setup>
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
  <span
    class="fixed top-0 right-0 z-50 flex min-h-16 min-w-12 items-center justify-center lg:hidden"
  >
    <MenuButton />
  </span>
  <nav
    :class="showMenu ? 'translate-x-0' : 'translate-x-52'"
    class="fixed top-0 right-0 bottom-0 z-40 flex min-w-64 flex-col overflow-auto border-l-2 transition-transform duration-500 ease-out"
  >
    <span
      :class="showMenu ? 'bg-primary' : 'bg-transparent'"
      class="flex min-h-16 items-center gap-2 border-b-2 p-2 transition duration-500"
    >
      <ColorModeSwitch class="border-invert" />
      <span
        class="pointer-events-none leading-none font-bold tracking-tighter uppercase select-none"
      >Theme: 「{{ isDark ? 'Order' : 'Chaos' }}」</span>
    </span>

    <ul class="flex-1 backdrop-blur-xs transition duration-500 ease-out">
      <li
        v-for="link in navigationLinks"
        :key="link.to"
        @click="showMenu = false"
      >
        <a
          :href="link.to"
          :class="showMenu ? 'bg-default' : 'bg-transparent'"
          class="flex gap-2 border-b-2 p-2 font-serif text-[2rem] leading-none font-medium tracking-tight uppercase transition-colors duration-500 ease-out select-none"
        >
          <Icon
            class="bg-primary border"
            :icon="link.icon"
          />
          {{ link.label }}
        </a>
      </li>
    </ul>
  </nav>
  <div
    :class="showMenu ? '-translate-x-52' : 'translate-x-0'"
    class="fixed top-13.75 right-9.75 z-50 min-h-4 min-w-4 border-2 transition-transform duration-500 ease-out"
    aria-hidden="true"
  />
</template>
