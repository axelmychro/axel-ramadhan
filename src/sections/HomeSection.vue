<script setup>
import { Icon } from '@iconify/vue'
import { navigationLinks } from '../data/siteConfig'

import ProfileCard from '../components/ProfileCard.vue'
import CTAButton from '../components/CTAButton.vue'

import { yourProfile } from '../data/siteConfig'
import { useProjects } from '../composables/useProjects'
const { latestProject } = useProjects(yourProfile.projects)
</script>

<template>
  <div class="flex size-full justify-evenly not-lg:flex-col">
    <div class="flex justify-center sm:items-center">
      <div class="flex flex-col sm:gap-2">
        <ProfileCard class="not-sm:border-b-0" />
        <div class="flex not-lg:flex-col sm:gap-2">
          <CTAButton class="not-sm:border-b-0" profile-link="Email" />
          <CTAButton profile-link="LinkedIn" />
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center sm:items-center">
      <div class="flex flex-col items-center">
        <div class=" ">
          <div class="flex flex-col sm:gap-2 lg:gap-6">
            <CTAButton class="not-sm:border-b-0" section="projects">
              <span class="text-base tracking-wide text-pretty">
                View latest:
                <b class="font-bold">{{ latestProject.title }}</b></span
              >
            </CTAButton>
            <div
              class="flex perspective-normal perspective-origin-top-left not-sm:flex-col sm:gap-2 lg:gap-6"
            >
              <CTAButton class="not-sm:border-b-0" section="about" />
              <CTAButton class="not-sm:border-b-0" section="timeline" />
            </div>
            <CTAButton section="contact">
              <span class="text-base tracking-wide text-pretty"
                >I'm open for collaboration, <b>let's talk</b></span
              >
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
