<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Overlay from './layouts/Overlay.vue'
import SiteHeader from './layouts/SiteHeader.vue'
import NewSection from './components/NewSection.vue'
</script>

<template>
  <div>
    <SiteHeader />

    <main>
      <NewSection id="home" header=""> hello </NewSection>
      <NewSection id="projects"> world </NewSection>
    </main>
    <Overlay />
  </div>
</template>
