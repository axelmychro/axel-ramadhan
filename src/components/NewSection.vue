<script setup>
defineProps({
  id: {
    type: String,
    required: false,
    default: undefined,
  },
  header: {
    type: String,
    required: false,
    default: 'hidden',
  },
})
</script>

<template>
  <section
    :id="id"
    class="relative z-0 min-h-[calc(100vh-4rem)] min-w-full shrink-0 overflow-hidden bg-linear-to-b from-sky-100 via-cyan-50 to-sky-100 pt-16 dark:from-neutral-900 dark:via-gray-950 dark:to-neutral-900"
  >
    <div
      aria-hidden="true"
      :class="header"
      class="bg-primary absolute top-0 -z-10 min-w-full shrink-0"
    />

    <div class="z-0 flex min-h-[calc(100vh-4rem)] min-w-full">
      <div class="max-w-[calc(100vw-3rem)] flex-1 not-lg:pt-8">
        <slot />
      </div>

      <div class="max-w-12 min-w-12 flex-1 shrink-0">
        <slot name="right" />
      </div>
    </div>
  </section>
</template>
