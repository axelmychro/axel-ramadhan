<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { yourProfile } from '../data/siteConfig'
import { Icon } from '@iconify/vue'
import FolderShowcase from './FolderShowcase.vue'

const thisWholeSection = ref(null)
const visible = ref(false)

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        visible.value = true
        observer.disconnect()
      }
    },
    {
      rootMargin: '0px 0px -40% 0px',
    },
  )
  observer.observe(thisWholeSection.value)
})

onUnmounted(() => {
  observer?.disconnect()
})

import { computed } from 'vue'

const otherProjects = computed(() => {
  if (!visible.value) return []
  return yourProfile.projects.slice(0, yourProfile.projects.length - 1)
})
</script>

<template>
  <div
    ref="thisWholeSection"
    :class="visible ? 'translate-y-0' : 'translate-y-8 opacity-0'"
    class="flex size-full items-center justify-evenly transition-all duration-500 ease-out not-lg:flex-col"
  >
    <div>
      <FolderShowcase />
    </div>

    <div class="p-2">
      <div
        :class="
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        "
        class="bg-primary xs:pl-2 size-fit -rotate-2 rounded-tr-md border py-2 pr-2 font-mono leading-none outline-1 filter-[drop-shadow(-2px_2px_0px_var(--color-invert))] transition delay-400 duration-500"
      >
        <Icon class="inline" icon="mdi:cube-unfolded" /> Other projects:
      </div>

      <TransitionGroup name="fade-stagger" tag="ul" class="flex flex-col gap-2">
        <li
          v-for="(project, index) in otherProjects"
          :key="project.repository"
          :style="{ '--i': index }"
          class="bg-default attention-primary -rotate-2 border p-2 outline"
        >
          <a
            :href="`${yourProfile.links.find(link => link.label === 'GitHub')?.to}/${project.repository}`"
          >
            <div class="flex justify-between">
              <h3 class="font-display leading-none tracking-tighter">
                {{ project.title }}
              </h3>
              <time class="text-sm" :datetime="project.date">{{
                project.date.slice(0, 4)
              }}</time>
            </div>
            <p class="leading-relaxed tracking-wide text-pretty">
              {{ project.subtitle }}
            </p>
          </a>
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.fade-stagger-enter-active {
  transition:
    opacity 500ms ease-out,
    transform 500ms ease-out;
}

.fade-stagger-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.fade-stagger-enter-active {
  transition-delay: calc(var(--i) * 400ms + 800ms);
}
</style>
