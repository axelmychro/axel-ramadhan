<script setup>
import { ref } from 'vue'
import { yourProfile } from '../data/siteConfig'

const linkHovered = ref(false)
</script>

<template>
  <div
    :class="linkHovered ? 'bg-primary' : 'bg-default'"
    class="xs:p-2 relative flex flex-col items-center border-2 p-0 shadow-xs transition-colors duration-500 ease-out lg:py-8"
  >
    <div
      class="pointer-events-none absolute bottom-1 left-1 font-mono text-[8px] leading-none tracking-tighter opacity-70 select-none sm:text-xs"
      aria-hidden="true"
    >
      ProfileCard.vue
    </div>
    <a
      class="relative"
      :aria-label="`Visit ${yourProfile.name}'s GitHub`"
      :href="yourProfile.links.find(link => link.label === 'GitHub')?.to"
      target="_blank"
      rel="noopener noreferrer"
      @mouseenter="linkHovered = true"
      @mouseleave="linkHovered = false"
    >
      <img
        class="bg-primary aspect-square size-full max-h-32 min-h-32 max-w-32 min-w-32 border-2 transition-transform duration-500 ease-out lg:max-h-48 lg:min-h-48 lg:max-w-48 lg:min-w-48"
        :src="`${yourProfile.links.find(link => link.label === 'GitHub')?.to}.png`"
        width="128"
        height="128"
        loading="lazy"
        alt=""
        role="none"
      />
      <div
        :class="linkHovered ? 'opacity-90' : 'opacity-0'"
        class="pointer-events-none absolute -top-6 left-0 cursor-none leading-none tracking-wide transition-opacity duration-500 ease-in"
        aria-hidden="true"
      >
        To my GitHub profile?
      </div>
    </a>
    <h1
      class="font-display mt-2 text-center text-2xl leading-none tracking-tighter lg:text-3xl"
    >
      {{ yourProfile.name }}
    </h1>
    <p
      class="text-center text-base leading-relaxed tracking-wide text-pretty lg:text-lg"
    >
      {{ yourProfile.bio }}
    </p>
  </div>
</template>
