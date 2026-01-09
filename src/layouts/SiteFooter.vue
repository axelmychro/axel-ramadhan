<script setup>
import { siteConfig, yourProfile } from '../data/siteConfig'
</script>
<template>
  <footer class="bg-invert text-default size-full flex-1 shrink-0 p-4">
    <small>
      <a
        class="font-display text-4xl"
        href="#"
      >{{ siteConfig.name }}</a>
      <div class="text-base">
        &copy;
        <time :datetime="new Date()">{{ new Date().getFullYear() }}</time>
        {{ yourProfile.name }}
      </div>
    </small>
  </footer>
</template>
