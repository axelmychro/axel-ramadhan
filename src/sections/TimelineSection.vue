<script setup>
import TimeCapsule from '../components/TimeCapsule.vue'
import { timeline } from '../data/timeline'
</script>

<template>
  <article class="size-fit">
    <header
      class="bg-invert flex items-center justify-end rounded-t-sm px-6 py-2"
    >
      <h2
        class="text-default text-end font-serif text-base leading-none font-medium tracking-wide text-balance uppercase lg:text-2xl"
      >
        Timeline
      </h2>
    </header>
    <TransitionGroup
      class="flex flex-col items-center justify-center"
      tag="section"
    >
      <TimeCapsule
        v-for="event in timeline"
        :key="event.title"
        :title="event.title"
        :description="event.description"
        :date="event.date"
        :icon="event.icon"
      />
    </TransitionGroup>
  </article>
</template>
