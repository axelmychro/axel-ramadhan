<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const mounted = ref(false)

onMounted(() => {
  mounted.value = true
})
onUnmounted(() => {
  mounted.value = false
})
import ProfileCard from '../components/ProfileCard.vue'
import CTAButton from '../components/CTAButton.vue'

import { yourProfile } from '../data/siteConfig'
import { useProjects } from '../composables/useProjects'
const { latestProject } = useProjects(yourProfile.projects, yourProfile.links)
</script>

<template>
  <div class="flex size-full justify-evenly not-lg:flex-col">
    <div class="flex justify-center sm:items-center">
      <div class="flex flex-col sm:gap-2">
        <TransitionGroup name="fade-stagger">
          <ProfileCard
            v-if="mounted"
            :style="{ '--i': 0 }"
            class="not-sm:border-b-0"
          />
        </TransitionGroup>
        <div class="flex not-lg:flex-col sm:gap-2">
          <TransitionGroup name="fade-stagger">
            <CTAButton
              v-if="mounted"
              :style="{ '--i': 2 }"
              class="not-sm:border-b-0"
              profile-link="Email"
            />
            <CTAButton
              v-if="mounted"
              key="ctab2"
              :style="{ '--i': 3 }"
              profile-link="LinkedIn"
            />
          </TransitionGroup>
        </div>
      </div>
    </div>

    <div class="flex flex-col justify-center sm:items-center">
      <div class="flex flex-col items-center">
        <div class="flex flex-col sm:gap-2 lg:gap-6">
          <TransitionGroup name="fade-stagger">
            <CTAButton
              v-if="mounted"
              :style="{ '--i': 0 }"
              class="not-sm:border-b-0"
              section="Projects"
            >
              <span class="text-base tracking-wide text-pretty">
                View latest:
                <b class="font-bold">{{ latestProject.title }}</b></span>
            </CTAButton>
          </TransitionGroup>
          <div
            class="flex perspective-normal perspective-origin-top-left not-sm:flex-col sm:gap-2 lg:gap-6"
          >
            <TransitionGroup name="fade-stagger">
              <CTAButton
                v-if="mounted"
                :style="{ '--i': 1 }"
                class="not-sm:border-b-0"
                section="About"
              />
              <CTAButton
                v-if="mounted"
                :style="{ '--i': 2 }"
                class="not-sm:border-b-0"
                section="Timeline"
              />
            </TransitionGroup>
          </div>

          <TransitionGroup name="fade-stagger">
            <CTAButton
              v-if="mounted"
              :style="{ '--i': 3 }"
              section="Contact"
            >
              <span class="text-base tracking-wide text-pretty">I'm open for collaboration, <b>let's talk</b></span>
            </CTAButton>
          </TransitionGroup>
        </div>
      </div>
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
  transition-delay: calc(var(--i) * 200ms);
}
</style>
