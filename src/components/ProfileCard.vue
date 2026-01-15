<script setup>
import { profile } from '../data/profile'

const props = defineProps({
  author: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: false,
    default: undefined,
  },
})

const githubLinkExists = profile.links.find(link => link.label === 'GitHub')?.to
</script>

<template>
  <article class="xs:p-2 bg-default relative border-2 p-0 lg:py-8">
    <header class="flex flex-col items-center">
      <a
        :aria-label="
          githubLinkExists ? `Visit ${profile.name}'s GitHub` : undefined
        "
        :href="githubLinkExists"
        target="_blank"
        rel="noopener noreferrer"
      >
        <figure>
          <img
            class="bg-primary aspect-square size-full max-h-32 min-h-32 max-w-32 min-w-32 border-2 lg:max-h-48 lg:min-h-48 lg:max-w-48 lg:min-w-48"
            :src="props.picture"
            width="128"
            height="128"
            loading="lazy"
            alt=""
            role="none"
          >
        </figure>
      </a>
      <h1
        class="font-display mt-4 text-center text-2xl leading-none tracking-tighter lg:text-3xl"
      >
        {{ props.author }}
      </h1>
    </header>
    <section class="mt-2">
      <p
        class="text-center text-base leading-relaxed tracking-wide text-pretty lg:text-lg"
      >
        {{ props.bio }}
      </p>
    </section>
  </article>
</template>
