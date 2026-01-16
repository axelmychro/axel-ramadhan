<script setup>
import { Icon } from '@iconify/vue'
import { ref, onMounted, onUnmounted } from 'vue'
import { computed } from 'vue'

import FolderShowcase from '../components/FolderShowcase.vue'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

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

const otherProjects = computed(() => {
    if (!visible.value) return []
    return projects.slice(0, projects.length - 1)
})
</script>

<template>
  <div
    ref="thisWholeSection"
    :class="visible ? 'translate-y-0' : 'translate-y-8 opacity-0'"
    class="flex size-full items-center justify-evenly transition-all duration-800 ease-out not-lg:flex-col"
  >
    <div class="shrink-0">
      <FolderShowcase />
    </div>

    <div class="shrink-0 p-2">
      <div
        :class="
          visible ? 'scale-100 opacity-100' : 'scale-97 opacity-0'
        "
        class="bg-primary xs:pl-2 size-fit -rotate-2 rounded-tr-md border py-2 pr-2 font-mono leading-none outline-1 transition delay-400 duration-400"
      >
        <Icon
          class="inline"
          icon="mdi:cube-unfolded"
        />
        Other projects:
      </div>

      <TransitionGroup
        name="fade-stagger"
        tag="ul"
        class="flex flex-col gap-2"
      >
        <li
          v-for="(project, index) in otherProjects"
          :key="index"
          :style="{ '--i': index }"
          class="bg-default attention-primary -rotate-2 border p-2 outline"
        >
          <a
            :href="`${profile.links.find(link => link.label === 'GitHub')?.to}/${project.repository}`"
          >
            <div class="flex justify-between">
              <h3
                class="font-display text-lg leading-none tracking-tighter"
              >
                {{ project.title }}
              </h3>
              <time
                class="text-sm"
                :datetime="project.date"
              >{{ project.date.slice(0, 4) }}</time>
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
        opacity 400ms ease-out,
        scale 400ms ease-out;
}
.fade-stagger-enter-from {
    opacity: 0;
    scale: 97%;
}
.fade-stagger-enter-active {
    transition-delay: calc(var(--i) * 400ms + 800ms);
}
</style>
