import { defineAsyncComponent } from 'vue'

// Configure the site, your profile, links, and projects here
import krabyPreview from '../assets/images/krabypaty-tebingtinggi.png'
export const yourProfile = {
  name: 'Axel Ramadhan',
  bio: 'CS student, frontend developer, and Vue.js enthusiast',

  links: [
    {
      label: 'Email',
      alt: 'Email me',
      to: 'mailto:axelmychro@gmail.com',
      icon: 'mdi:email-edit',
    },
    {
      label: 'GitHub',
      to: 'https://github.com/axelmychro',
      icon: 'mdi:github',
    },
    {
      label: 'LinkedIn',
      alt: 'Connect?',
      to: 'https://linkedin.com/in/axelramadhan',
      icon: 'mdi:linkedin',
      trailingIcon: 'mdi:connect-without-contact',
    },
    {
      label: 'Instragram',
      to: 'https://www.instagram.com/axelmychro',
      icon: 'mdi:instagram',
    },
    { label: 'Discord', to: 'https://discord.com/users/', icon: 'mdi:discord' },
  ],

  projects: [
    {
      title: 'Priestess',
      subtitle: 'Discord.js-powered bot for my server',
      preview: '',
      description: '',
      date: '2025-09-28',
      repository: `priestess`,
      icons: ['devicon:nodejs', 'devicon:discordjs'],
    },
    {
      title: 'Wanderer',
      subtitle: 'A personal blog built with Nuxt UI and CMS',
      preview: '',
      description: '',
      date: '2025-12-22',
      repository: `Wanderer`,
      icons: ['devicon:nuxt', 'devicon:tailwindcss'],
    },
    {
      title: 'Template Vue Portfolio',
      subtitle: 'Build with vue & tailwind',
      preview: '',
      description: '',
      date: '2025-12-27',
      repository: `template-vue-portfolio`,
      icons: ['devicon:vitejs', 'devicon:vuejs', 'devicon:tailwindcss'],
    },
    {
      title: 'Kraby Paty Tebing Tinggi',
      subtitle: 'Static website for a local burger UMKM',
      preview: krabyPreview,
      description:
        'A small local burger shop in Tebing Tinggi. This website helps customers quickly view featured menu items and order via GoFood or GrabFood.',
      date: '2026-01-04',
      repository: `krabypaty-tebingtinggi`,
      icons: ['devicon:vitejs', 'logos:preact', 'devicon:tailwindcss'],
    },
  ],
}

const sectionMap = {
  home: () => import('../sections/HomeSection.vue'),
  projects: () => import('../sections/ProjectsSection.vue'),
  about: () => import('../sections/AboutSection.vue'),
  timeline: () => import('../sections/TimelineSection.vue'),
  contact: () => import('../sections/ContactSection.vue'),
}
export const navigationLinks = [
  {
    label: 'Home',
    to: '#home',
    icon: 'gg:shape-rhombus',
    component: defineAsyncComponent(sectionMap.home),
    header: true,
  },
  {
    label: 'Projects',
    to: '#projects',
    icon: 'mdi:cube-outline',
    trailingIcon: 'mdi:arrow-right-bold-circle',
    component: defineAsyncComponent(sectionMap.projects),
    header: false,
  },
  {
    label: 'About',
    to: '#about',
    icon: 'mdi:triangle-outline',
    trailingIcon: 'mdi:magnify-expand',
    component: defineAsyncComponent(sectionMap.about),
    header: false,
  },
  {
    label: 'Timeline',
    to: '#timeline',
    icon: 'mdi:hourglass',
    component: defineAsyncComponent(sectionMap.timeline),
    header: false,
  },
  {
    label: 'Contact',
    to: '#contact',
    icon: 'mdi:paper-airplane-outline',
    trailingIcon: 'mingcute:cellphone-vibration-line',
    component: defineAsyncComponent(sectionMap.contact),
    header: false,
  },
]

export const siteConfig = {
  name: 'mychro',
  url: 'https://axelmychro.my.id',
}
