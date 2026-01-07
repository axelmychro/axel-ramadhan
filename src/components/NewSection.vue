<script setup>
defineProps({
  id: String,
  header: Boolean,
})
</script>

<template>
  <section
    class="min-h-screen min-w-full bg-linear-to-b from-cyan-50 via-sky-50 to-cyan-50 dark:from-neutral-950 dark:via-gray-950 dark:to-neutral-950"
    :id="id"
  >
    <div
      :class="header ? 'bg-primary' : 'bg-transparent'"
      class="flex min-h-16 min-w-full"
    />

    <div class="flex">
      <div class="flex-1">
        <slot />
      </div>

      <div class="max-w-12 min-w-12 shrink-0">
        <slot name="right" />
      </div>
    </div>
  </section>
</template>
