<script setup>
import TimeCapsule from '../components/TimeCapsule.vue'
import { timeline } from '../data/timeline'
</script>

<template>
  <div class="flex size-full items-center justify-center">
    <div class="">
      <span class="flex items-center justify-end">
        <h2
          class="bg-invert text-default fontm size-fit rounded-tl-lg border-b-0 px-6 py-2 text-end font-serif text-base leading-none font-medium tracking-wide text-balance uppercase lg:text-2xl"
        >
          Timeline
        </h2>
      </span>
      <TransitionGroup
        class="flex flex-col items-center justify-center"
        tag="div"
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
    </div>
  </div>
</template>
