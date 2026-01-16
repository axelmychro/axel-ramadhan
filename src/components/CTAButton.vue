<script setup>
import { Icon } from '@iconify/vue'
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

import { useResolvedLink } from '../composables/useResolvedLink'
import { navigation } from '../data/navigation'
import { profile } from '../data/profile'

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

const resolved = useResolvedLink(
  navItem.value ?? profileItem.value ?? { to: props.content },
)
</script>

<template>
  <component
    :is="resolved?.isInternal ? RouterLink : 'a'"
    :key="resolved.to"
    :to="resolved?.isInternal ? resolved.to : undefined"
    :href="resolved?.isInternal ? undefined : resolved.to"
    :target="resolved?.type === 'external' ? '_blank' : undefined"
    :rel="resolved?.type === 'external' ? 'noopener noreferrer' : undefined"
    class="bg-default attention-primary relative flex flex-1 cursor-pointer flex-col items-start justify-center border-2 p-2"
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
