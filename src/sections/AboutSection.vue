<script setup>
import { useDark } from '@vueuse/core'

import { profile } from '../data/profile'
import { site } from '../data/site'

const isDark = useDark()

const newAboutCollection = [
  {
    id: 'about-me',
    title: 'About me',
    author: profile.name,
    icon: profile.picture,
  },
  {
    id: 'about-site',
    title: 'This site',
    author: site.name,
    icon: '/apple-touch-icon.png',
  },
]
</script>
<template>
  <div class="flex size-full flex-col items-center justify-center gap-8">
    <NewArticle
      v-for="item in newAboutCollection"
      :key="item.id"
      :title="item.title"
      :author="item.author"
      :icon="item.icon"
    >
      <template v-if="item.id === 'about-me'">
        <p>
          Just a computer science student who love websites a little too much.
        </p>
        <p>
          My equivalent of people's .txt file would be .html, if that even makes
          sense. Markdown exists, but that <i>feels</i> like cheating... I want
          to style everything myself, <b>breakpoint by breakpoint</b>.
        </p>
        <p>
          I also find optimizing SEO somewhat fun, given that I can rest my eyes
          from jarring lines of codes and design a summary image in Canva.
        </p>
      </template>

      <template v-else-if="item.id === 'about-site'">
        <p>
          You may have noticed the familiar accent for these icons. Correct,
          this site is essentially a love letter for
          {{ isDark ? 'TypeScript' : 'JavaScript' }} and
          <a
            class="link"
            href="https://www.gryphline.com"
            target="_blank"
            rel="noopener noreferrer"
          >Gryphline</a>.
        </p>
        <p>
          Design aside, your ever-presence here is thanks to
          <b><span class="text-vue">Vue</span> wizardry</b> that clumps my
          <code>div Soups&trade;</code> nicely and thus finally be able to
          <b>hex</b> (and fix) this very section.
        </p>
      </template>
    </NewArticle>
  </div>
</template>
