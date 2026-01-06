<script setup lang="ts">
import { navigationLinks, yourProfile } from '../data/siteConfig'
</script>

<template>
  <header
    class="border-default fixed top-0 right-0 left-0 z-10 flex min-h-16 min-w-full items-center border-b-2 pr-12"
  >
    <nav class="flex flex-1 items-center justify-end p-2">
      <a class="font-display flex-1 text-2xl leading-none" href="#">{{
        yourProfile.name
      }}</a>
      <div class="flex items-center not-lg:hidden">
        <a
          v-for="link in navigationLinks"
          class="inline-block truncate px-2 font-serif text-[2rem] leading-none font-medium tracking-tight uppercase"
          :key="link.to"
          :href="link.to"
          >{{ link.label }}</a
        >
      </div>
    </nav>
  </header>
</template>
