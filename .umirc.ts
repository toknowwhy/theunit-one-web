import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {
    dark: true
  },
  locale: {
    default: 'en-US',
    antd: true,
    baseNavigator: true,
  },
  theme: {
    'primary-color': '#5956FF',
    'body-background': '#000',
    'font-family': 'Avenir',
    'font-size-base': '18px',
    'text-color': '#F5F5FF',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/MainLayout',
      routes: [
        { path: '/', component: '@/pages/index' },
        { path: '/about', component: '@/pages/About' },
        { path: '/faq', component: '@/pages/FAQ' },
        { path: '/jobs', component: '@/pages/Jobs' },
        { path: '/jobs/:id', component: '@/pages/Job' },
        { path: '/road-map', component: '@/pages/Timeline' },
        { path: '/branding', component: '@/pages/Branding' },
      ],
    },
  ],
  npmClient: 'pnpm',
});

