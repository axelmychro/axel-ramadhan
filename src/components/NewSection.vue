<script setup>
defineProps({
  id: {
    type: String,
    required: false,
    default: undefined,
  },
  header: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <section
    :id="id"
    class="relative min-h-[calc(100vh-8rem)] min-w-full overflow-hidden bg-linear-to-b from-cyan-50 via-sky-50 to-cyan-50 dark:from-neutral-950 dark:via-gray-950 dark:to-neutral-950"
  >
    <div
      :class="header ? 'bg-primary' : 'bg-transparent'"
      class="min-h-16 min-w-full"
    />

    <div class="flex min-h-[calc(100vh-8rem)] min-w-full">
      <div class="max-w-[calc(100vw-3rem)] flex-1 not-lg:pt-8">
        <slot />
      </div>

      <div class="max-w-12 min-w-12 shrink-0">
        <slot name="right" />
      </div>
    </div>
  </section>
</template>
