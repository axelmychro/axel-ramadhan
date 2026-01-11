<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

import { navigationLinks, yourProfile } from '../data/siteConfig'
import { RouterLink } from 'vue-router'

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
  navigationLinks.find(link => link.label === props.section),
)

const profileItem = computed(() =>
  yourProfile.links.find(link => link.label === props.profileLink),
)

const targetLink = computed(() => {
  const item = navItem.value ?? profileItem.value
  if (!item?.to) return null

  const isInternal = item.to.startsWith('/') && !item.to.startsWith('//')

  return {
    isInternal,
    to: item.to,
  }
})
</script>

<template>
  <component
    :is="targetLink?.isInternal ? RouterLink : 'a'"
    :to="targetLink?.isInternal ? targetLink.to : undefined"
    :href="!targetLink?.isInternal ? targetLink.to : undefined"
    :target="!targetLink?.isInternal ? '_blank' : undefined"
    :rel="!targetLink?.isInternal ? 'noopener noreferrer' : undefined"
    :class="[
      'bg-default attention-primary relative flex flex-1 shrink-0 cursor-pointer flex-col items-start justify-center border-2 p-2',
      section ? 'lg:p-6' : '',
    ]"
  >
    <span
      :class="section ? 'lg:text-4xl' : ''"
      class="flex items-center gap-2 p-2 font-serif text-2xl leading-none font-medium tracking-tight uppercase"
    >
      <Icon
        class="shrink-0"
        :inline="true"
        :icon="navItem?.icon ?? profileItem?.icon"
      />
      {{ navItem?.label ?? profileItem?.alt }}
    </span>

    <Icon
      aria-hidden="true"
      class="absolute size-12 self-end opacity-20"
      :inline="true"
      :icon="
        (navItem?.trailingIcon ?? profileItem?.trailingIcon) ||
          'mdi:arrow-right-bold-circle'
      "
    />

    <div>
      <slot />
    </div>
  </component>
</template>
