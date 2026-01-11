import { defineAsyncComponent } from 'vue'

// Configure the site, your profile, links, and projects here
import profilePicture from '/profile.webp'
import krabyPreview from '../assets/images/krabypaty-tebingtinggi.png'

export const yourProfile = {
  name: 'Axel Ramadhan',
  bio: 'CS student, frontend developer, and Vue.js enthusiast',
  picture: profilePicture,

  links: [
    {
      label: 'Email',
      alt: 'Email me',
      to: 'mailto:axelmychro@gmail.com',
      icon: 'lucide:mail',
    },
    {
      label: 'GitHub',
      to: 'https://github.com/axelmychro',
      icon: 'simple-icons:github',
    },
    {
      label: 'LinkedIn',
      alt: 'Connect?',
      to: 'https://linkedin.com/in/axelramadhan',
      icon: 'simple-icons:linkedin',
      trailingIcon: 'lucide:wifi',
    },
    {
      label: 'Resume',
      alt: 'My resume',
      to: '/resume',
      icon: 'lucide:file-text',
      trailingIcon: 'lucide:user-round-search',
    },
    {
      label: 'Instagram',
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
    header: 'min-h-16', // Default to 16 (header nav height)
  },
  {
    label: 'Projects',
    to: '#projects',
    icon: 'lucide:box',
    trailingIcon: 'lucide:code-xml',
    component: defineAsyncComponent(sectionMap.projects),
    header: undefined,
  },
  {
    label: 'About',
    to: '#about',
    icon: 'gg:shape-triangle',
    component: defineAsyncComponent(sectionMap.about),
    header: 'min-h-64 border-y-2',
  },
  {
    label: 'Timeline',
    to: '#timeline',
    icon: 'lucide:hourglass',
    component: defineAsyncComponent(sectionMap.timeline),
    header: undefined,
  },
  {
    label: 'Contact',
    to: '#contact',
    icon: 'lucide:send',
    trailingIcon: 'lucide:bell-ring',
    component: defineAsyncComponent(sectionMap.contact),
    header: undefined,
  },
]

export const siteConfig = {
  name: 'mychro',
  url: 'https://axelmychro.my.id',
  repository: 'https://github.com/axelmychro/axel-ramadhan',
}
