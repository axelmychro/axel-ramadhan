<script setup>
import { ref, onMounted } from 'vue'
import { yourProfile } from '../data/siteConfig'
import { useProjects } from '../composables/useProjects'

const thisWholeSection = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
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
const { latestProject } = useProjects(yourProfile.projects, yourProfile.links)
</script>

<template>
  <div
    ref="thisWholeSection"
    :class="
      visible
        ? 'translate-y-0 bg-red-500 opacity-100'
        : 'translate-y-8 opacity-0'
    "
    class="size-ful flex items-center justify-evenly transition-all duration-500 ease-out not-lg:flex-col"
  >
    <div class="">
      <h2>{{ latestProject?.title }}</h2>
      <img class="" src="" width="128" height="128" alt="Latest project" />
    </div>

    <div>
      <div v-for="project in yourProfile.projects" class="text-8xl">
        <h3>{{ project.title }}</h3>
      </div>
    </div>
  </div>
</template>
