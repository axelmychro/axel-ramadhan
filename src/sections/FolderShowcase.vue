<script setup>
import { useProjects } from '../composables/useProjects'
import { yourProfile } from '../data/siteConfig'
import { Icon } from '@iconify/vue'

const { latestProject, formattedLatestDate, repositoryUrl } = useProjects(
  yourProfile.projects,
  yourProfile.links,
)
</script>

<template>
  <span
    class="bg-primary/80 xs:pl-2 size-fit rounded-tr-md border-2 py-2 pr-2 font-mono leading-none"
  ><Icon
    class="inline"
    icon="mdi:cube-outline"
  /> Latest project:</span>
  <div
    class="xs:border-x-2 flex rounded-tr-sm rounded-b-sm border-y-2 not-lg:flex-col"
  >
    <div
      class="bg-invert/20 flex max-w-lg flex-col items-center justify-center gap-2 not-lg:border-b-2"
    >
      <div class="bg-primary xs:px-2 flex self-stretch border-b-2 py-2">
        <div class="flex flex-1 flex-col">
          <h2
            class="font-display ftracking-tight text-xl leading-none text-balance lg:text-2xl"
          >
            {{ latestProject?.title }}
          </h2>
          <div class="mt-2 text-lg tracking-tight text-pretty sm:text-xl">
            {{ latestProject?.subtitle }}
          </div>
          <time
            class="text-sm"
            :datetime="latestProject?.date"
          >{{
            formattedLatestDate
          }}</time>
        </div>

        <div class="flex shrink-0 flex-col gap-2">
          <Icon
            v-for="icon in latestProject?.icons"
            :key="icon"
            class="bg-invert/50 size-4 border-2 saturate-0"
            :icon="icon"
          />
        </div>
      </div>

      <a
        :href="repositoryUrl"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          class="xs:border-x-2 aspect-4/3 size-full max-w-72 border-y-2 object-cover lg:max-w-96"
          :src="latestProject?.preview"
          width="256"
          alt="Latest project"
        >
      </a>
      <p
        class="bg-invert text-default xs:px-2 max-w-prose py-2 leading-relaxed tracking-wide text-pretty sm:text-lg"
      >
        {{ latestProject?.description }}
      </p>
    </div>
  </div>
</template>
