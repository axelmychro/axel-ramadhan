<script setup>
import { Icon } from '@iconify/vue'

import MenuButton from '../components/MenuButton.vue'
import { activeSection } from '../composables/useActiveSection'
import { useMenuState } from '../composables/useMenuState'
import { navigation } from '../data/navigation'

const home = navigation.find(link => link?.anchor === '#home')
const { showMenu } = useMenuState()
</script>

<template>
  <header
    :class="[
      'top-0 right-0 left-0 not-md:fixed not-md:max-h-12 not-md:min-h-12 not-md:min-w-full',
      'md:max-w-12 md:min-w-12 md:flex-col',
    ]"
    class="bg-default shadow-shadow-less z-50 flex shrink-0 items-center justify-start shadow-md"
  >
    <nav
      class="sticky top-0 flex flex-1 items-center justify-end p-2 md:hidden"
    >
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
      :class="[
        showMenu ? 'not-md:translate-y-1/2' : 'not-md:translate-y-full',
        'top-0 right-0 bottom-0 left-0 not-md:fixed not-md:border-t-8 not-md:transition-transform not-md:duration-500 md:sticky md:flex',
      ]"
      class="bg-default z-40 order-first min-w-12 flex-col overflow-auto pt-12 ease-out"
    >
      <ul class="flex flex-col">
        <li
          v-for="link in navigation"
          :key="link.anchor"
          class="flex items-center justify-start not-md:p-1"
          @click="showMenu = false"
        >
          <a
            :href="link?.anchor"
            :class="
              activeSection === link.anchor
                ? 'bg-default-soft text-invert border-r-8'
                : 'text-invert-soft'
            "
            class="flex flex-1 items-center justify-start p-1 transition-colors duration-400 ease-out select-none"
          >
            <Icon
              class="min-h-8 min-w-8 shrink-0"
              :icon="link.icon"
            />
            <span class="md:sr-only">{{ link.label }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
