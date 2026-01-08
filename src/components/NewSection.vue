<script setup>
defineProps({
  id: String,
  header: Boolean,
})
</script>

<template>
  <section
    class="relative min-h-[calc(100vh-8rem)] min-w-full overflow-hidden bg-linear-to-b from-cyan-50 via-sky-50 to-cyan-50 dark:from-neutral-950 dark:via-gray-950 dark:to-neutral-950"
    :id="id"
  >
    <div
      :class="header ? 'bg-primary' : 'bg-transparent'"
      class="min-h-16 min-w-full"
    />

    <div class="flex min-h-[calc(100vh-8rem)] min-w-full">
      <div class="max-w-[calc(100vw-3rem)] flex-1">
        <slot />
      </div>

      <div class="max-w-12 min-w-12 shrink-0">
        <slot name="right" />
      </div>
    </div>
  </section>
</template>
