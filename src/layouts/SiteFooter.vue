<script setup>
import { computed } from 'vue'
import { siteConfig, yourProfile } from '../data/siteConfig'
import { RouterLink } from 'vue-router'

const footerLinks = [
  { label: 'Back to top', to: '#' },
  { label: "This site's repository", to: siteConfig.repository },
  { label: 'My resume', to: '/resume' },
]

const resolvedLinks = computed(() =>
  footerLinks.map(link => {
    const isExternal = link.to.startsWith('http')
    const isAnchor = link.to.startsWith('#')

    return {
      ...link,
      isExternal,
      isAnchor,
      isInternal: !isExternal && !isAnchor,
    }
  }),
)
</script>

<template>
  <footer
    class="bg-invert text-default flex min-h-48 min-w-full shrink-0 items-center justify-between gap-8 py-8 not-sm:flex-col sm:px-8 lg:px-4"
  >
    <small>
      <a
        class="flex flex-col gap-4"
        to="#"
        aria-label="Go back to top"
      >
        <span class="font-display text-4xl leading-none">{{
          siteConfig.name
        }}</span>
        <div class="text-base leading-none tracking-wide">
          &copy;
          <time :datetime="new Date()">{{ new Date().getFullYear() }}</time>
          {{ yourProfile.name }}
        </div>
      </a>
    </small>

    <ul class="flex flex-col gap-4 sm:pr-12">
      <li
        v-for="link in resolvedLinks"
        :key="link.to"
        class="text-end font-serif text-base leading-none tracking-wider uppercase"
      >
        <component
          :is="link.isInternal ? RouterLink : 'a'"
          :class="`cursor-pointer`"
          :to="link.isInternal ? link.to : undefined"
          :href="!link.isInternal ? link.to : undefined"
          :target="link.isExternal ? '_blank' : undefined"
          :rel="link.isExternal ? 'noopener noreferrer' : undefined"
        >
          {{ link.label }}
        </component>
      </li>
    </ul>
  </footer>
</template>
