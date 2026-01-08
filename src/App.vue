<script setup>
import { onMounted, onUnmounted } from 'vue'
import Lenis from 'lenis'

import SiteHeader from './layouts/SiteHeader.vue'
import Overlay from './layouts/Overlay.vue'
import { navigationLinks } from './data/siteConfig'

let lenis
let rafId

onMounted(() => {
  lenis = new Lenis({
    smooth: true,
    lerp: 0.09,
    wheelMultiplier: 0.9,
  })

  const raf = time => {
    lenis?.raf(time)
    rafId = requestAnimationFrame(raf)
  }

  rafId = requestAnimationFrame(raf)

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault()
      lenis?.scrollTo(link.getAttribute('href'))
    })
  })
})

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId)
  lenis?.destroy()
})
</script>

<template>
  <div>
    <SiteHeader />

    <main>
      <NewSection
        v-for="section in navigationLinks"
        :key="section.to"
        :id="section.to.slice(1)"
        :header="section.header"
      >
        <component :is="section.component" />
      </NewSection>
    </main>
    <Overlay />
  </div>
</template>
