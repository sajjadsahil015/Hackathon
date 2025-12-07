import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Interactive Robotics Textbook',
  tagline: 'Physical AI & Humanoid Robotics Course',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sajjadsahil015.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Hackathon/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sajjadsahil015', // Usually your GitHub org/user name.
  projectName: 'Hackathon', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-mermaid'],
  plugins: ['./plugins/context7-loader'],

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false, // Disable blog as per spec
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Robotics Textbook',
      logo: {
        alt: 'Robotics Textbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Curriculum',
        },
        {
          to: '/docs/hardware',
          label: 'Hardware',
          position: 'left',
        },
        {
          href: 'https://github.com/sajjadsahil015/Hackathon',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Modules',
          items: [
            {
              label: 'Module 1: Robotic Nervous System',
              to: '/docs/Module-1-Robotic-Nervous-System/Week-1/intro',
            },
            {
              label: 'Module 2: Digital Twin',
              to: '/docs/Module-2-Digital-Twin/Week-4/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/sajjadsahil015/Hackathon',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Interactive Robotics Textbook. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;