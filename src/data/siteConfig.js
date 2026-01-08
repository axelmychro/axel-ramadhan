import { defineAsyncComponent } from 'vue'

// Configure the site, your profile, links, and projects here
export const yourProfile = {
  name: 'Axel Ramadhan',
  bio: 'CS Student, Frontend Developer, Vue.js Enthusiast',

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
      description: 'Discord.js-powered bot for my server',
      date: '2025-09-28',
      repository: `priestess`,
    },
    {
      title: 'Wanderer',
      description: '',
      date: '2025-12-22',
      repository: `Wanderer`,
    },
    {
      title: 'Template Vue Portfolio',
      description: '',
      date: '2025-12-27',
      repository: `template-vue-portfolio`,
    },
    {
      title: 'Kraby Paty Tebing Tinggi',
      description: '',
      date: '2026-01-04',
      repository: `krabypaty-tebingtinggi`,
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
