// Configure your profile, links, and projects here
export const yourProfile = {
  name: 'Axel Ramadhan',
  bio: 'CS Student, Frontend Developer, Vue.js Enthusiast',

  links: [
    {
      label: 'Email',
      to: 'mailto:axel.ramadhan.js@gmail.com',
      icon: 'mdi:email-edit',
    },
    {
      label: 'GitHub',
      to: 'https://github.com/axelmychro',
      icon: 'mdi:github',
    },
    {
      label: 'LinkedIn',
      to: 'https:/linkedin.com/in/axelramadhan',
      icon: 'mdi:linkedin',
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
      title: 'Krabby Patty Tebing Tinggi',
      description: '',
      date: '2026-01-04',
      repository: `krabypaty-tebingtinggi`,
    },
  ],
}

export const navigationLinks = [
  { label: 'home', to: '#home', icon: 'gg:shape-rhombus' },
  { label: 'projects', to: '#projects', icon: 'mdi:cube-outline' },
  { label: 'about', to: '#about', icon: 'mdi:triangle-outline' },
  { label: 'timeline', to: '#timeline', icon: 'mdi:hourglass' },
  { label: 'contact', to: '#contact', icon: 'mdi:paper-airplane-outline' },
]
