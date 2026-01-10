<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="bg-primary">
    <nav>
      <RouterLink
        to="/"
        class="flex items-center gap-2 font-serif text-xl uppercase"
      >
        <Icon icon="mdi:arrow-left-bold-circle-outline" />return
      </RouterLink>
    </nav>
  </header>
  <main>
    <iframe
      src="/resume.pdf"
      style="width: 100%; height: 100vh; border: none"
    />
  </main>
</template>
