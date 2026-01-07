<script setup lang="ts">
import Overlay from './layouts/Overlay.vue'
import SiteHeader from './layouts/SiteHeader.vue'

import NewSection from './components/NewSection.vue'

import HomeSection from './sections/HomeSection.vue'
</script>

<template>
  <div>
    <SiteHeader />

    <main>
      <NewSection id="home" header="">
        <HomeSection />
      </NewSection>

      <NewSection id="projects"> <h2>world</h2> </NewSection>

      <NewSection id="about"> <h2>world</h2> </NewSection>

      <NewSection id="timeline"> <h2>world</h2> </NewSection>

      <NewSection id="contact"> <h2>world</h2> </NewSection>
    </main>
    <Overlay />
  </div>
</template>
