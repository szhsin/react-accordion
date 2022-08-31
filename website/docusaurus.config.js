// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Accordion',
  tagline:
    'An unstyled, accessible accordion library for building React apps and design systems',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/szhsin/react-accordion/tree/master/website/'
        },
        blog: false,
        googleAnalytics: false,
        gtag: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
        darkTheme: darkCodeTheme
      },
      colorMode: {
        defaultMode: 'dark'
      }
    })
};

module.exports = config;
