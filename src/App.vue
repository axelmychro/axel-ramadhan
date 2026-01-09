<script setup>
import { onMounted, onUnmounted } from 'vue'
import NewSection from './components/NewSection.vue'
import SiteHeader from './layouts/SiteHeader.vue'
import Overlay from './layouts/Overlay.vue'

import { navigationLinks } from './data/siteConfig'
import { initializeLenis, destroyLenis } from './composables/useLenis'

onMounted(initializeLenis)
onUnmounted(destroyLenis)
</script>

<template>
  <div>
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
  </div>
</template>
