<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

import { navigationLinks, yourProfile } from '../data/siteConfig'

const props = defineProps({
  section: {
    type: String,
    default: null,
  },
  profileLink: {
    type: String,
    default: null,
  },
})

const navItem = computed(() =>
  navigationLinks.find(l => l.label === props.section),
)

const profileItem = computed(() =>
  yourProfile.links.find(l => l.label === props.profileLink),
)
</script>

<template>
  <a
    :class="section ? 'lg:p-6' : ''"
    class="bg-default xs:p-2 attention-primary relative flex max-h-32 min-h-16 max-w-lg min-w-24 flex-1 flex-col justify-center border-2"
    :href="navItem?.to ?? profileItem?.to"
  >
    <span
      :class="section ? 'lg:text-4xl' : ''"
      class="flex gap-2 font-serif text-2xl leading-none font-medium tracking-tight uppercase"
    >
      <Icon :icon="navItem?.icon ?? profileItem?.icon" />
      {{ navItem?.label ?? profileItem?.alt }}
    </span>

    <Icon
      aria-hidden="true"
      class="absolute size-12 self-end opacity-20"
      :icon="
        (navItem?.trailingIcon ?? profileItem?.trailingIcon) ||
          'mdi:arrow-right-bold-circle-outline'
      "
    />

    <div>
      <slot />
    </div>
  </a>
</template>
