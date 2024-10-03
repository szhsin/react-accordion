import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.vsDark;

const config: Config = {
  title: 'React Accordion',
  tagline:
    'An unstyled, accessible accordion library for React apps and design systems',
  url: 'https://szhsin.github.io',
  baseUrl: '/react-accordion/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'szhsin', // Usually your GitHub org/user name.
  projectName: 'react-accordion', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/szhsin/react-accordion/tree/master/website/'
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    navbar: {
      title: 'React Accordion',
      items: [
        {
          type: 'doc',
          docId: 'docs/getting-started',
          position: 'left',
          label: 'Docs'
        },
        {
          type: 'doc',
          docId: 'api/components/Accordion',
          position: 'left',
          label: 'API'
        },
        {
          href: 'https://github.com/szhsin/react-accordion',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['bash']
    },
    colorMode: {
      defaultMode: 'dark'
    }
  } satisfies Preset.ThemeConfig
};

export default config;
