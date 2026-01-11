<script setup>
import { computed } from 'vue'
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'

import { navigation } from '../data/navigation'
import { profile } from '../data/profile'
import { useResolvedLink } from '../composables/useResolvedLink'

const props = defineProps({
  content: {
    type: String,
    required: true,
  },
})

const navItem = computed(() =>
  navigation.find(link => link.anchor === props.content),
)

const profileItem = computed(() =>
  profile.links.find(link => link.label === props.content),
)

const resolved = computed(() =>
  useResolvedLink(navItem.value ?? profileItem.value ?? { to: props.content }),
)
</script>

<template>
  <component
    :is="resolved?.isInternal ? RouterLink : 'a'"
    :to="resolved?.isInternal ? resolved.to : undefined"
    :href="!resolved?.isInternal ? resolved.to : undefined"
    :target="resolved?.type === 'external' ? '_blank' : undefined"
    :rel="resolved?.type === 'external' ? 'noopener noreferrer' : undefined"
    class="bg-default attention-primary relative flex flex-1 flex-col items-start justify-center border-2 p-2"
  >
    <span
      class="xs:text-3xl flex items-center gap-2 p-2 font-serif text-2xl leading-none font-medium tracking-tight uppercase"
    >
      <Icon
        class="shrink-0"
        :icon="navItem?.icon ?? profileItem?.icon ?? 'gg:shape-rhombus'"
      />
      {{ navItem?.label ?? profileItem?.label ?? props.content }}
    </span>

    <Icon
      aria-hidden="true"
      class="absolute size-12 self-end opacity-20"
      :icon="
        navItem?.trailingIcon ??
          profileItem?.trailingIcon ??
          'mdi:arrow-right-bold-circle'
      "
    />

    <slot />
  </component>
</template>
