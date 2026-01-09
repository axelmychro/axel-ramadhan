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
      <span
        class="bg-primary/80 rounded-tr-md border-2 p-2 font-mono leading-none"
        ><Icon class="inline" icon="mdi:cube-outline" /> Latest project:</span
      >
      <div
        class="xs:border-x-2 flex rounded-tr-sm rounded-b-sm border-y-2 not-lg:flex-col"
      >
        <div
          class="bg-invert/20 flex max-w-lg flex-col items-center justify-center gap-2 not-lg:border-b-2"
        >
          <div class="bg-primary flex self-stretch border-b-2 p-2">
            <div class="flex flex-1 flex-col">
              <h2
                class="font-display ftracking-tight text-xl leading-none text-balance lg:text-2xl"
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

            <div class="flex shrink-0 flex-col gap-2">
              <Icon
                v-for="icon in latestProject?.icons"
                :key="icon"
                class="size-4"
                :icon="icon"
              />
            </div>
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
            class="bg-invert text-default max-w-prose px-2 leading-relaxed tracking-wide text-pretty sm:text-lg"
          >
            {{ latestProject?.description }}
          </p>
        </div>
      </div>
    </div>

    <div class="border-2">
      <div
        v-for="project in yourProfile.projects.slice(
          0,
          yourProfile?.projects.length - 1,
        )"
        :key="project.repository"
        class="text-xl"
      >
        <h3>{{ project.title }}</h3>
      </div>
    </div>
  </div>
</template>
