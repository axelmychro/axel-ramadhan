<script setup>
import ProfileCard from '../components/ProfileCard.vue'
import CTAButton from '../components/CTAButton.vue'

import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { useProjects } from '../composables/useProjects'
const { latestProject } = useProjects(projects, profile.links)
</script>

<template>
  <div class="flex size-full justify-evenly not-lg:flex-col">
    <div class="flex justify-center sm:items-center">
      <div class="flex flex-col sm:gap-2">
        <Transition
          name="fade-stagger"
          appear
        >
          <ProfileCard
            :author="profile.name"
            :bio="profile.bio"
            :picture="profile.picture"
            :style="{ '--i': 0 }"
            class="not-sm:border-b-0"
          />
        </Transition>
        <TransitionGroup
          tag="div"
          class="flex justify-between not-lg:flex-col sm:gap-2"
          name="fade-stagger"
          appear
        >
          <CTAButton
            key="0"
            :style="{ '--i': 1 }"
            class="not-sm:border-b-0"
            content="Email"
          />
          <CTAButton
            key="1"
            :style="{ '--i': 2 }"
            content="LinkedIn"
          />
          <CTAButton
            key="2"
            :style="{ '--i': 3 }"
            content="Resume"
          />
        </TransitionGroup>
      </div>
    </div>

    <div class="flex flex-col justify-center sm:items-center">
      <div class="flex flex-col items-center">
        <div class="flex flex-col sm:gap-2 lg:gap-6">
          <Transition
            name="fade-stagger"
            appear
          >
            <CTAButton
              :style="{ '--i': 0 }"
              class="not-sm:border-b-0"
              content="#projects"
            >
              <span class="text-base tracking-wide text-pretty">
                View latest:
                <b class="font-bold">{{ latestProject.title }}</b></span>
            </CTAButton>
          </Transition>

          <TransitionGroup
            class="flex justify-between not-sm:flex-col sm:gap-2 lg:gap-6"
            tag="div"
            name="fade-stagger"
            appear
          >
            <CTAButton
              key="0"
              :style="{ '--i': 1 }"
              class="not-sm:border-b-0"
              content="#about"
            />
            <CTAButton
              key="1"
              :style="{ '--i': 2 }"
              class="not-sm:border-b-0"
              content="#timeline"
            />
          </TransitionGroup>

          <Transition
            name="fade-stagger"
            appear
          >
            <CTAButton
              :style="{ '--i': 3 }"
              content="#contact"
            >
              <span class="text-base tracking-wide text-pretty">I'm open for collaboration, <b>let's talk</b></span>
            </CTAButton>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-stagger-enter-active {
  transition:
    opacity 400ms ease-out,
    scale 400ms ease-out;
  transition-delay: calc(var(--i) * 200ms);
}
.fade-stagger-enter-from {
  opacity: 0;
  scale: 97%;
}
</style>
