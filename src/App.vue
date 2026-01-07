<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Overlay from './layouts/Overlay.vue'
import SiteHeader from './layouts/SiteHeader.vue'
import NewSection from './components/NewSection.vue'
import { navigationLinks, yourProfile } from './data/siteConfig'
import { useProjects } from './composables/useProjects'

const { latestProject } = useProjects(yourProfile.projects)
</script>

<template>
  <div>
    <SiteHeader />

    <main>
      <NewSection id="home" header="">
        <div class="mt-24 flex flex-col sm:items-center">
          <div
            class="bg-default flex flex-col items-center rounded-xs border-y-2 p-2 sm:border-x-2"
          >
            <a
              :href="
                yourProfile.links.find(link => link.label === 'GitHub')?.to
              "
              target="_blank"
              rel="noopener no referrer"
            >
              <img
                class="bg-primary aspect-square size-full max-h-32 min-h-32 max-w-32 min-w-32 rounded-xs border-2"
                :src="`${yourProfile.links.find(link => link.label === 'GitHub')?.to}.png`"
                loading="lazy"
                alt="GitHub Profile"
              />
            </a>

            <h1 class="mt-4 text-center text-4xl leading-none tracking-tight">
              {{ yourProfile.name }}
            </h1>
            <p
              class="mt-2 text-center text-base leading-relaxed font-bold tracking-wide text-pretty"
            >
              {{ yourProfile.bio }}
            </p>
          </div>
        </div>

        <div class="mt-24 flex flex-col items-center">
          <div class="flex flex-col">
            <a
              class="bg-default relative flex flex-col justify-center border-2 p-2"
              :href="
                navigationLinks.find(link => link.label === 'projects')?.to
              "
            >
              <span
                class="flex gap-2 truncate p-2 font-serif text-[2rem] leading-none font-medium tracking-tight uppercase"
                ><Icon
                  :icon="
                    navigationLinks.find(icon => icon.to === '#projects')?.icon
                  "
                />
                {{
                  navigationLinks.find(label => label.to === '#projects')?.label
                }}
              </span>
              <span class="text-base tracking-wide">
                View latest:
                <b class="font-bold">{{ latestProject.title }}</b></span
              >
              <Icon
                class="absolute size-16 self-end opacity-20"
                icon="mdi:arrow-right-circle"
              />
            </a>

            <div class="flex items-stretch justify-stretch not-sm:flex-col">
              <a
                class="bg-default relative flex flex-col justify-center border-2 p-2"
                :href="navigationLinks.find(link => link.label === 'about')?.to"
              >
                <span
                  class="flex gap-2 truncate p-2 font-serif text-[2rem] leading-none font-medium tracking-tight uppercase"
                  ><Icon
                    :icon="
                      navigationLinks.find(icon => icon.to === '#about')?.icon
                    "
                  />
                  {{
                    navigationLinks.find(label => label.to === '#about')?.label
                  }}
                </span>
                <Icon
                  class="absolute size-16 self-end opacity-20"
                  icon="mdi:arrow-right-circle"
                />
              </a>
              <a
                class="bg-default relative flex flex-col justify-center border-2 p-2"
                :href="
                  navigationLinks.find(link => link.label === 'contact')?.to
                "
              >
                <span
                  class="flex gap-2 truncate p-2 font-serif text-[2rem] leading-none font-medium tracking-tight uppercase"
                  ><Icon
                    :icon="
                      navigationLinks.find(icon => icon.to === '#contact')?.icon
                    "
                  />
                  {{
                    navigationLinks.find(label => label.to === '#contact')
                      ?.label
                  }}
                </span>
                <Icon
                  class="absolute size-16 self-end opacity-20"
                  icon="mdi:arrow-right-circle"
                />
              </a>
            </div>
          </div>
        </div>
      </NewSection>

      <NewSection id="projects"> <h2>world</h2> </NewSection>

      <NewSection id="about"> <h2>world</h2> </NewSection>

      <NewSection id="timeline"> <h2>world</h2> </NewSection>

      <NewSection id="contact"> <h2>world</h2> </NewSection>
    </main>
    <Overlay />
  </div>
</template>
