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
      <NewSection id="home" header="">
        <template #>
          <h1 class="flex-1">hello title</h1>
        </template>
      </NewSection>

      <NewSection id="projects"> <h2>world</h2> </NewSection>

      <NewSection id="about"> <h2>world</h2> </NewSection>

      <NewSection id="timeline"> <h2>world</h2> </NewSection>

      <NewSection id="contact"> <h2>world</h2> </NewSection>
    </main>
    <Overlay />
  </div>
</template>
