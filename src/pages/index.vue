<script setup>
import SiteHeader from '../layouts/SiteHeader.vue'
import NewSection from '../components/NewSection.vue'
import Overlay from '../layouts/Overlay.vue'
import SiteFooter from '../layouts/SiteFooter.vue'
import { navigationLinks } from '../data/siteConfig'
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
