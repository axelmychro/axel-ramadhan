<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { navigationLinks, siteConfig } from '../data/siteConfig'
</script>

<template>
  <header
    class="border-default fixed top-0 right-0 left-0 z-10 flex min-h-16 min-w-full items-center border-b-2 pr-12 backdrop-blur-xs"
  >
    <nav class="flex items-center p-2">
      <a href="#" :aria-label="`${siteConfig.name}, home`"
        ><Icon aria-hidden="true" class="size-8" icon="gg:shape-rhombus"
      /></a>
      <div class="flex items-center not-lg:hidden">
        <a
          v-for="link in navigationLinks"
          class="truncate px-2 font-serif text-[2rem] leading-none font-medium tracking-tight uppercase"
          :key="link.to"
          :href="link.to"
          >{{ link.label }}</a
        >
      </div>
    </nav>
  </header>
</template>
