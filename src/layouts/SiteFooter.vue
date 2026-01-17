<script setup>
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import ColorModeSwitch from '../components/ColorModeSwitch.vue'
import { useResolvedLink } from '../composables/useResolvedLink'
import { profile } from '../data/profile'
import { site } from '../data/site'

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
    class="bg-invert text-default flex min-h-48 min-w-full shrink-0 items-center justify-between gap-8 px-2 py-8 not-sm:flex-col sm:px-8"
  >
    <small class="flex flex-col gap-4">
      <a
        class="font-display text-4xl leading-none"
        href="#"
      >
        {{ site.name }}
      </a>
      <div class="text-base leading-none tracking-wide">
        &copy;
        <time :datetime="new Date()">{{ new Date().getFullYear() }}</time>
        {{ profile.name }}
      </div>
      <div class="flex items-center gap-2 text-lg">
        Theme: <ColorModeSwitch size="6" />
      </div>
    </small>

    <article>
      <h4 class="text-center text-lg">
        Not for business?
      </h4>
      <ul class="flex items-center justify-center gap-2">
        <li
          v-for="link in profile.links.slice(4)"
          :key="link.label"
        >
          <a
            class="text-center"
            :href="link.to"
            target="_blank"
            rel="noopener noreferrer"
          ><Icon
            class="min-h-6 min-w-6"
            :icon="link.icon"
          /><span class="sr-only">{{ link.label }}</span></a>
        </li>
      </ul>
    </article>

    <ul class="flex flex-col gap-4">
      <li
        v-for="link in resolvedLinks"
        :key="link.to"
        class="text-end"
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
          class="cursor-pointer font-serif text-base leading-none font-medium tracking-wide uppercase"
        >
          {{ link.label }}
        </component>
      </li>
    </ul>
  </footer>
</template>
