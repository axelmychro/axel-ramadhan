<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main
    class="flex min-h-screen min-w-full flex-col items-center justify-center"
  >
    <article class="xs:min-w-xs">
      <header
        class="bg-invert text-default flex items-center justify-between rounded-tl-4xl px-6 py-2"
      >
        <icon
          class="size-9"
          icon="gg:shape-rhombus"
          aria-hidden="true"
        />
        <h1 class="font-display text-end text-4xl tracking-widest">
          404 <span class="block">Not</span> Found
        </h1>
      </header>

      <router-link
        to="/"
        aria-label="Return to homepage"
      >
        <section class="bg-primary border-2 p-2">
          <p class="text-xl leading-none tracking-wide">
            Let's return to safety...
          </p>
        </section>
      </router-link>
    </article>
  </main>
</template>
