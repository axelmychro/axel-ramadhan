import { defineAsyncComponent } from 'vue'

const sections = {
  home: () => import('../sections/HomeSection.vue'),
  projects: () => import('../sections/ProjectsSection.vue'),
  about: () => import('../sections/AboutSection.vue'),
  timeline: () => import('../sections/TimelineSection.vue'),
  contact: () => import('../sections/ContactSection.vue'),
}

// Configure the site's navigation here
export const navigation = [
  {
    label: 'Home',
    anchor: '#home',
    icon: 'gg:shape-rhombus',
    component: defineAsyncComponent(sections.home),
  },
  {
    label: 'Projects',
    anchor: '#projects',
    icon: 'lucide:box',
    trailingIcon: 'lucide:code-xml',
    component: defineAsyncComponent(sections.projects),
  },
  {
    label: 'About',
    anchor: '#about',
    icon: 'gg:shape-triangle',
    component: defineAsyncComponent(sections.about),
    header: 'min-h-64 border-y-2',
  },
  {
    label: 'Timeline',
    anchor: '#timeline',
    icon: 'lucide:hourglass',
    component: defineAsyncComponent(sections.timeline),
  },
  {
    label: 'Contact',
    anchor: '#contact',
    icon: 'lucide:send',
    trailingIcon: 'lucide:bell-ring',
    component: defineAsyncComponent(sections.contact),
  },
]
