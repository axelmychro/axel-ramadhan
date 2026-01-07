<script setup>
import { Icon } from '@iconify/vue'

import { navigationLinks, yourProfile } from '../data/siteConfig'

defineProps({
  section: String,
  profileLink: String,
})
</script>

<template>
  <a
    :class="section ? 'lg:p-6' : ''"
    class="bg-default xs:p-2 attention-primary relative flex max-h-32 min-h-16 max-w-lg min-w-24 flex-1 flex-col justify-center border-2"
    :href="
      navigationLinks.find(link => link.label === section)?.to ||
      yourProfile.links.find(link => link.label === profileLink)?.to
    "
  >
    <span
      :class="section ? 'lg:text-4xl' : ''"
      class="flex gap-2 font-serif text-2xl leading-none font-medium tracking-tight uppercase"
      ><Icon
        :icon="
          navigationLinks.find(icon => icon.label === section)?.icon ||
          yourProfile.links.find(icon => icon.label === profileLink)?.icon
        "
      />
      {{
        navigationLinks.find(label => label.label === section)?.label ||
        yourProfile.links.find(icon => icon.label === profileLink)?.alt
      }}
    </span>

    <div>
      <slot></slot>
    </div>

    <Icon
      class="absolute size-12 self-end opacity-20"
      :icon="
        section ? 'mdi:arrow-right-circle-outline' : 'mdi:arrow-right-circle'
      "
    />
  </a>
</template>
