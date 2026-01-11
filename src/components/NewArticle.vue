<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <article class="size-fit">
    <header
      class="bg-invert text-default xs:pl-4 xs:pr-16 flex size-fit shrink-0 items-center gap-2 rounded-tr-md py-2 pr-8 pl-2 sm:pr-32 sm:pl-8">
      <span class="flex-1">
        <h2
          class="font-display text-xl leading-none tracking-tight text-balance lg:text-2xl">
          {{ props.title }}
        </h2>
        <p
          class="text-default-soft text-base leading-relaxed tracking-wide text-pretty lg:text-lg">
          {{ props.author }}
        </p>
      </span>
      <figure class="order-first shrink-0">
        <img
          class="min-h-8 min-w-8 shrink-0 rounded-sm object-cover"
          :src="props.icon"
          width="32"
          height="32"
          role="none"
          aria-hidden="true" />
      </figure>
    </header>

    <section
      class="bg-default xs:p-2 max-w-prose space-y-4 rounded-b-sm border-y-2 text-base leading-relaxed tracking-wide text-pretty sm:border-x-2 sm:px-4 sm:text-lg lg:text-xl">
      <slot />
    </section>
  </article>
</template>
