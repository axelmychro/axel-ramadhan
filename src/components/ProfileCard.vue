<script setup>
import { ref } from 'vue'
import { yourProfile } from '../data/siteConfig'

const linkHovered = ref(false)
</script>

<template>
  <div
    :class="linkHovered ? 'bg-primary' : 'bg-default'"
    class="xs:p-2 flex flex-col items-center border-2 p-0 transition-colors duration-500 lg:py-8"
  >
    <a
      class="relative"
      @mouseenter="linkHovered = true"
      @mouseleave="linkHovered = false"
      :aria-label="`Visit ${yourProfile.name}'s GitHub`"
      :href="yourProfile.links.find(link => link.label === 'GitHub')?.to"
      target="_blank"
      rel="noopener no referrer"
    >
      <img
        :class="linkHovered ? 'scale-105' : 'scale-100'"
        class="bg-primary aspect-square size-full max-h-32 min-h-32 max-w-32 min-w-32 border-2 transition-transform duration-500 lg:max-h-48 lg:max-w-48"
        :src="`${yourProfile.links.find(link => link.label === 'GitHub')?.to}.png`"
        width="128"
        height="128"
        loading="lazy"
        alt=""
        role="none"
      />
      <span
        :class="linkHovered ? 'opacity-50' : 'opacity-0'"
        class="pointer-events-none absolute -top-6 left-0 cursor-none leading-none font-bold transition-opacity duration-500"
        aria-hidden="true"
        >To my GitHub profile?</span
      >
    </a>
    <h1
      class="mt-2 text-center text-4xl leading-none tracking-tight lg:text-5xl"
    >
      {{ yourProfile.name }}
    </h1>
    <p
      class="text-center text-base leading-none font-bold tracking-wide text-pretty lg:text-lg"
    >
      {{ yourProfile.bio }}
    </p>
  </div>
</template>
