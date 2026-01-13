<script setup>
import { useMenuState } from '../composables/useMenuState'
import { navigation } from '../data/navigation'
import { Icon } from '@iconify/vue'
import MenuButton from '../components/MenuButton.vue'

import ColorModeSwitch from '../components/ColorModeSwitch.vue'

const { showMenu } = useMenuState()

const home = navigation.find(link => link?.anchor === '#home')
</script>

<template>
  <header
    class="bg-default shadow-invert/20 relative top-0 right-0 left-0 z-50 shrink-0 shadow-sm not-md:fixed not-md:max-h-12 not-md:min-h-12 md:max-w-12 md:min-w-12 md:pt-8"
  >
    <nav class="flex items-center justify-end border-b-2 p-2 md:hidden">
      <a
        :href="home.anchor"
        class="flex-1"
      ><Icon
        class="min-h-8 min-w-8 shrink-0"
        :icon="home.icon"
      /></a>
      <MenuButton size="8" />
    </nav>

    <!-- and 768px only -->
    <nav
      class="sticky top-0 right-0 left-0 z-40 hidden flex-col overflow-auto bg-sky-300 ease-out md:flex"
      @mouseenter="showMenu = true"
      @mouseleave="showMenu = false"
    >
      <ul class="flex-1 bg-red-300">
        <li
          v-for="link in navigation"
          :key="link?.anchor"
          @click="showMenu = false"
        >
          <a
            :href="link?.anchor"
            class="flex gap-2 border-b-2 p-2 font-serif text-[2rem] leading-none font-medium tracking-tight uppercase transition-colors duration-500 ease-out select-none"
          >
            <Icon
              class="min-h-8 min-w-8 shrink-0"
              :icon="link.icon"
            />
            {{ link.label }}
          </a>
        </li>
      </ul>
      <ColorModeSwitch class="flex1" />
    </nav>
  </header>
</template>
