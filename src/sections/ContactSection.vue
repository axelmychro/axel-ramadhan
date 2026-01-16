<script setup>
import { Icon } from '@iconify/vue'

import { profile } from '../data/profile'

const myEmail = profile.links.find(link => link.label === 'Email')
</script>

<template>
  <article class="size-fit max-w-xs">
    <header class="bg-primary border-2 p-2">
      <h2
        class="font-display text-invert text-end text-xl leading-none tracking-tight text-balance uppercase md:text-2xl lg:text-2xl"
      >
        Contact
      </h2>
    </header>

    <section>
      <h3
        class="bg-invert text-default p-2 text-lg leading-none font-bold underline md:text-xl"
      >
        <a
          :href="myEmail?.to"
          class="flex gap-2"
        >
          <Icon
            :icon="profile.links.find(icon => icon.label === 'Email')?.icon"
          />{{ myEmail?.to.slice(7) }}
        </a>
      </h3>
      <p
        class="bg-default border-x-2 p-2 leading-relaxed tracking-wide text-pretty md:text-lg"
      >
        I'm open for internships, collaborations, and interesting discussions.
      </p>
    </section>

    <section>
      <h3
        class="bg-invert text-default p-2 text-center text-base leading-none md:text-lg"
      >
        Also available:
      </h3>
      <ul>
        <li
          v-for="link in profile.links.slice(1, 4)"
          :key="link.to"
          class="bg-default border-x-2 border-b-2 p-2"
        >
          <a
            class="flex items-center justify-center gap-2 text-base md:text-lg"
            :href="link.to"
          >
            <Icon :icon="link.icon" />{{ link.label }}
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>
