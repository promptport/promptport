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
  baseUrl: '/',
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/promptport/promptport-docs'
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
          label: 'Docs',
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
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Learn',
              to: '/docs/prompt-intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/promptport',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    }
  }),

  themes: ['@saucelabs/theme-github-codeblock']
};

module.exports = config;
