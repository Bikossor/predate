// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const packageLink = {
  npm: 'https://npmjs.com/package/predate'
};

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'predate',
  tagline: 'Functional time library with TypeScript in mind',
  url: 'https://predate.pages.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Bikossor', // Usually your GitHub org/user name.
  projectName: 'predate', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/Bikossor/predate/edit/main/packages/predate-website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'predate',
        logo: {
          alt: 'predate Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: packageLink.npm,
            label: 'npm',
            position: 'right',
          },
          {
            href: 'https://github.com/Bikossor/predate',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Introduction',
                to: '/docs/intro',
              },
              {
                label: 'Installation',
                to: '/docs/getting-started/installation',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/predate',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'npm',
                href: packageLink.npm,
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Bikossor/predate',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} predate by Bikossor. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
