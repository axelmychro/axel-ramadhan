<script setup>
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import { profile } from '../data/profile'
</script>

<template>
  <header class="bg-primary">
    <nav>
      <RouterLink
        to="/"
        class="flex items-center gap-2 font-serif text-xl font-medium tracking-wide uppercase">
        <Icon icon="mdi:arrow-left-bold-circle-outline" />return
      </RouterLink>
    </nav>
  </header>
  <main>
    <iframe
      :title="`${profile.name}'s resume'`"
      src="/resume.pdf"
      style="width: 100%; height: 100vh; border: none" />
  </main>
</template>
