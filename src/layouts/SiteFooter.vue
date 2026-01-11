<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useResolvedLink } from '../composables/useResolvedLink'
import { site } from '../data/site'
import { profile } from '../data/profile'

const footerLinks = [
  { label: 'Back to top', to: '#' },
  { label: "This site's repository", to: site.repository },
  { label: 'My resume', to: '/resume' },
]

const resolvedLinks = computed(() =>
  footerLinks.map(link => ({
    ...link,
    resolved: useResolvedLink(link),
  })),
)
</script>

<template>
  <footer
    class="bg-invert text-default flex min-h-48 min-w-full shrink-0 items-center justify-between gap-8 py-8 not-sm:flex-col sm:px-8 lg:px-4"
  >
    <small>
      <a
        class="flex flex-col gap-4"
        href="#"
      >
        <span class="font-display text-4xl leading-none">{{ site.name }}</span>
        <div class="text-base leading-none tracking-wide">
          &copy;
          <time :datetime="new Date()">{{ new Date().getFullYear() }}</time>
          {{ profile.name }}
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
          :is="link.resolved?.isInternal ? RouterLink : 'a'"
          :to="link.resolved?.isInternal ? link.resolved.to : undefined"
          :href="!link.resolved?.isInternal ? link.resolved.to : undefined"
          :target="link.resolved?.type === 'external' ? '_blank' : undefined"
          :rel="
            link.resolved?.type === 'external'
              ? 'noopener noreferrer'
              : undefined
          "
        >
          {{ link.label }}
        </component>
      </li>
    </ul>
  </footer>
</template>
