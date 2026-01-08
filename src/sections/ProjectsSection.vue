<script setup>
import { ref, onMounted } from 'vue'
import { yourProfile } from '../data/siteConfig'
import { useProjects } from '../composables/useProjects'
import { Icon } from '@iconify/vue'

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
const { latestProject, formattedLatestDate, repositoryUrl } = useProjects(
  yourProfile.projects,
  yourProfile.links,
)
</script>

<template>
  <div
    ref="thisWholeSection"
    :class="visible ? 'translate-y-0' : 'translate-y-8 opacity-0'"
    class="flex size-full items-center justify-evenly transition-all duration-500 ease-out not-lg:flex-col"
  >
    <div class="">
      <div class="xs:border-x-2 flex border-y-2 not-lg:flex-col">
        <div
          class="bg-default xs:p-2 flex max-w-96 flex-col items-center justify-center gap-2 not-lg:border-b-2 sm:px-4 lg:border-l-2"
        >
          <div class="flex flex-col self-start">
            <h2
              class="text-2xl leading-none font-bold tracking-tight text-balance"
            >
              {{ latestProject?.title }}
            </h2>
            <div class="mt-2 text-lg tracking-tight text-pretty sm:text-xl">
              {{ latestProject?.subtitle }}
            </div>
            <time class="text-sm" :datetime="latestProject?.date">{{
              formattedLatestDate
            }}</time>
          </div>
          <a :href="repositoryUrl" target="_blank" rel="noopener noreferrer">
            <img
              class="xs:border-x-2 aspect-4/3 size-full max-w-72 border-y-2 object-cover lg:max-w-96"
              :src="latestProject?.preview"
              width="256"
              alt="Latest project"
            />
          </a>
          <p
            class="max-w-prose leading-relaxed tracking-wide text-pretty sm:text-lg"
          >
            {{ latestProject?.description }}
          </p>
        </div>

        <div
          class="bg-invert border-default flex max-h-fit gap-2 border-2 lg:order-first lg:max-w-12 lg:flex-col"
        >
          <span class="text-default font-mono leading-none tracking-tighter"
            >Built
            <div role="none">with:</div></span
          >
          <span class="flex items-center lg:flex-col">
            <Icon
              v-for="icon in latestProject?.icons"
              class="size-6"
              :icon="icon"
            />
          </span>
        </div>
      </div>
    </div>

    <div class="border-2">
      <div
        v-for="project in yourProfile.projects.slice(
          0,
          yourProfile?.projects.length - 1,
        )"
        class="text-xl"
      >
        <h3>{{ project.title }}</h3>
      </div>
    </div>
  </div>
</template>
