<script setup>
defineProps({
  id: String,
  header: Boolean,
})
</script>

<template>
  <section
    class="min-h-screen bg-linear-to-b from-cyan-50 via-sky-50 to-cyan-50 dark:from-neutral-950 dark:via-gray-950 dark:to-neutral-950"
    :id="id"
  >
    <div
      :class="header ? 'bg-primary' : 'bg-transparent'"
      class="min-h-16 w-full"
    />
    <slot />
  </section>
</template>
