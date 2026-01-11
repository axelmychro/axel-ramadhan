<script setup>
// import { timeline } from '../data/timeline'
// import { Icon } from '@iconify/vue'
</script>

<template>
  <div />
  <!-- <div class="flex size-full flex-col items-center justify-center gap-8">
    <div class="flex flex-col gap-4">
      <div
        v-for="(item, index) in timeline"
        :key="index"
        class="flex gap-4"
      >
        <div class="flex flex-col items-center">
          <div
            class="bg-primary flex h-16 w-16 items-center justify-center rounded-full border-2"
          >
            <Icon
              :icon="item.icon"
              class="size-8"
            />
          </div>
          <div
            v-if="index < timeline.length - 1"
            class="bg-default h-12 w-1"
          />
        </div>
        <div class="flex flex-col justify-center pb-8">
          <h3 class="font-display text-lg font-bold">
            {{ item.date }}
          </h3>
          <h4 class="font-display text-base font-semibold">
            {{ item.title }}
          </h4>
          <p class="text-sm leading-relaxed tracking-wide text-pretty">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div> -->
</template>
