<script setup>
import CTAButton from '../components/CTAButton.vue'
import ProfileCard from '../components/ProfileCard.vue'
import { useProjects } from '../composables/useProjects'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
const { latestProject } = useProjects(projects, profile.links)
</script>

<template>
  <div class="flex size-full justify-evenly not-lg:flex-col">
    <div class="flex justify-center sm:items-center">
      <div class="flex flex-col sm:gap-2">
        <ProfileCard
          :author="profile.name"
          :bio="profile.bio"
          :picture="profile.picture"
          class="not-sm:border-b-0"
        />
        <TransitionGroup
          tag="div"
          class="flex justify-between not-lg:flex-col sm:gap-2"
          name="fade-stagger"
          appear
        >
          <CTAButton
            key="0"
            :style="{ '--i': 0 }"
            class="not-sm:border-b-0"
            content="Email"
          />
          <CTAButton
            key="1"
            :style="{ '--i': 1 }"
            content="LinkedIn"
          />
          <CTAButton
            key="2"
            :style="{ '--i': 2 }"
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
              :style="{ '--i': 3 }"
              class="not-sm:border-b-0"
              content="#projects"
            >
              <span class="text-base tracking-wide text-pretty">
                View latest:
                <b class="font-bold">{{
                  latestProject.title
                }}</b></span>
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
              :style="{ '--i': 4 }"
              class="not-sm:border-b-0"
              content="#about"
            />
            <CTAButton
              key="1"
              :style="{ '--i': 5 }"
              class="not-sm:border-b-0"
              content="#timeline"
            />
          </TransitionGroup>

          <Transition
            name="fade-stagger"
            appear
          >
            <CTAButton
              :style="{ '--i': 6 }"
              content="#contact"
            >
              <span class="text-base tracking-wide text-pretty">I'm open for collaboration,
                <b>let's talk</b></span>
            </CTAButton>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fade-stagger-enter-from {
    scale: 100%;
    filter: drop-shadow(-2px 2px 0px var(--color-shadow));
}
.fade-stagger-active-enter {
    transition: scale 400ms ease-out;
    transition: filter 400ms ease-out;
}
.fade-stagger-enter-to {
    transition-delay: calc(var(--i) * 200ms + 2s);
    scale: 103%;
    filter: drop-shadow(-6px 6px 0px var(--color-shadow-less));
}
</style>
