<script setup>
import SiteHeader from './layouts/SiteHeader.vue'
import NewSection from './components/NewSection.vue'
import Overlay from './layouts/Overlay.vue'
import SiteFooter from './layouts/SiteFooter.vue'
import { navigation } from './data/navigation'
</script>

<template>
  <SiteHeader />
  <main>
    <NewSection
      v-for="section in navigation"
      :id="section.anchor?.slice(1)"
      :key="section.to"
      :header="section.header"
    >
      <component :is="section.component" />
    </NewSection>
  </main>
  <Overlay />
  <SiteFooter />
</template>
