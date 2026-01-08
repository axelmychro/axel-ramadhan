<script setup>
import { Icon } from '@iconify/vue'
import { navigationLinks, siteConfig } from '../data/siteConfig'
</script>

<template>
  <header
    class="border-invert fixed top-0 right-0 left-0 z-10 flex min-h-16 min-w-full items-center border-b-2 pr-12 backdrop-blur-xs"
  >
    <nav class="flex items-center p-2">
      <a href="#" :aria-label="`${siteConfig.name}, home`"
        ><Icon aria-hidden="true" class="size-8" icon="gg:shape-rhombus"
      /></a>
      <ul
        role="list"
        aria-label="Navigation links"
        class="flex items-center not-lg:hidden"
      >
        <li
          v-for="link in navigationLinks"
          class="block truncate px-2 font-serif text-[2rem] leading-none font-medium tracking-tight uppercase"
          :key="link.to"
        >
          <a :href="link.to">{{ link.label }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>
