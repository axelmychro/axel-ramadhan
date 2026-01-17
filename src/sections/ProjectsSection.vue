<script setup>
import { Icon } from '@iconify/vue'
import { ref, watch } from 'vue'
import { computed } from 'vue'

import FolderShowcase from '../components/FolderShowcase.vue'
import { activeSection } from '../composables/useActiveSection'
import { profile } from '../data/profile'
import { projects } from '../data/projects'

const hasEntered = ref(false)

watch(
  () => activeSection.value,
  section => {
    if (section === '#projects') {
      hasEntered.value = true
    }
  },
  { immediate: true },
)

const otherProjects = computed(() =>
  hasEntered.value ? projects.slice(0, projects.length - 1) : [],
)
</script>

<template>
  <div
    :class="
      hasEntered ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
    "
    class="flex size-full items-center justify-evenly transition-all duration-500 ease-out not-lg:flex-col"
  >
    <div class="shrink-0">
      <span
        class="bg-primary/80 xs:pl-2 size-fit rounded-tr-md border-2 py-2 pr-2 font-mono leading-none"
      ><Icon
        class="inline"
        icon="mdi:cube-outline"
      />
        Latest project:</span>
      <FolderShowcase />
    </div>

    <div class="shrink-0 p-2">
      <div
        :class="hasEntered ? 'scale-100 opacity-100' : 'scale-97 opacity-0'"
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
        appear
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
              <h3 class="font-display text-lg leading-none tracking-tighter">
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
    opacity 500ms ease-out,
    scale 500ms ease-out;
}
.fade-stagger-enter-from {
  opacity: 0;
  scale: 97%;
}
.fade-stagger-enter-active {
  transition-delay: calc(var(--i) * 300ms + 1s);
}
</style>
