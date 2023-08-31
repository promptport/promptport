// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PromptPort',
  tagline: 'Welcome to PromptPort docs!',
  favicon: 'img/favicon.ico',
  url: 'https://promptport.ai',
  baseUrl: '/docs/',
  organizationName: 'promptport.ai',
  projectName: 'promptport',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', "zh"],
    localeConfigs: {
      en: {
        label: 'English'
      },
      zh: {
        label: '中文简体',
        htmlLang: 'zh',
      }
    }
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      }),
    ],
  ],

  themeConfig: ({
    navbar: {
      title: 'PromptPort',
      logo: {
        alt: 'PromptPort Logo',
        src: 'img/logo.png',
        href: 'https://promptport.ai/'
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'promptSidebar',
          position: 'left',
          label: 'Prompt',
        },
        {
          type: 'localeDropdown',
          position: 'right'
        },
        {
          href: 'https://github.com/promptport/promptport-docs',
          label: 'GitHub',
          position: 'right'
        }
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    }
  }),

  themes: ['@saucelabs/theme-github-codeblock']
};

module.exports = config;
