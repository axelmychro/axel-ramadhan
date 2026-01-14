<script setup>
import { useFormattedDate } from '../composables/useFormattedDate'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    default: undefined,
  },
  date: {
    type: String,
    required: false,
    default: undefined,
  },
  icon: {
    type: String,
    required: false,
    default: undefined,
  },
})

const formattedDate = useFormattedDate(props.date, { hideDay: true })
</script>

<template>
  <article
    class="bg-default xs:border-x-2 xs:px-2 w-full max-w-xs border-y-2 py-2 last:rounded-b-sm"
  >
    <header class="flex justify-between px-2">
      <span class="bg h-fit">
        <h3
          class="font-display text-lg leading-none tracking-tight text-balance"
        >
          {{ props.title }}
        </h3>
        <time
          v-if="props.date"
          class="text-sm"
          :datetime="props.date"
        >{{ formattedDate }}</time>
      </span>

      <figure
        aria-hidden="true"
        class="aspect-square shrink-0"
      >
        <img
          v-if="props.icon"
          class="size-full max-h-8 max-w-8 object-cover object-center"
          :src="props.icon"
          width="32"
          height="32"
          loading="lazy"
        >
      </figure>
    </header>
    <section>
      <p class="leading-relaxed tracking-wide text-pretty">
        {{ props.description }}
      </p>
    </section>
  </article>
</template>
