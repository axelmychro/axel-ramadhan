<script setup>
import NewSection from './components/NewSection.vue'
import SiteBar from './layouts/SiteBar.vue'
import SiteFooter from './layouts/SiteFooter.vue'
import { navigation } from './data/navigation'
</script>

<template>
  <div class="flex not-md:flex-col">
    <SiteBar />
    <main
      class="flex flex-1 flex-col items-center justify-center md:order-first"
    >
      <NewSection
        v-for="section in navigation"
        :id="section.anchor?.slice(1)"
        :key="section.to"
        :header="section.header"
      >
        <component :is="section.component" />
      </NewSection>
    </main>
  </div>
  <SiteFooter />
</template>
