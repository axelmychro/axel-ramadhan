<script setup>
import { onMounted, onUnmounted } from 'vue'
import NewSection from './components/NewSection.vue'
import SiteHeader from './layouts/SiteHeader.vue'
import Overlay from './layouts/Overlay.vue'

import { navigationLinks } from './data/siteConfig'
import { initializeLenis, destroyLenis } from './composables/useLenis'
import SiteFooter from './layouts/SiteFooter.vue'

onMounted(initializeLenis)
onUnmounted(destroyLenis)
</script>

<template>
  <SiteHeader />
  <main>
    <NewSection
      v-for="section in navigationLinks"
      :id="section.to.slice(1)"
      :key="section.to"
      :header="section.header"
    >
      <component :is="section.component" />
    </NewSection>
  </main>
  <Overlay />
  <SiteFooter />
</template>
