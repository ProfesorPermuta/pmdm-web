import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Programación Multimedia e Dispositivos Móbiles',
  tagline: 'Apuntes do módulo 0489 — CS DAM',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
    faster: {
      // El bundler Rspack de @docusaurus/faster provoca un panic interno al
      // arrancar `docusaurus start` en este entorno (Node 24 + Windows).
      // Se desactiva solo esa pieza; el resto de mejoras de "faster" se
      // mantienen activas.
      rspackBundler: false,
      rspackPersistentCache: false,
    },
  },

  // Set the production url of your site here
  url: 'https://permuta.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  organizationName: 'permuta',
  projectName: 'web-pmdm',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        // El contenido vive en src/pages/, igual que en web-programacion.
        // Los plugins de docs y blog quedan desactivados.
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'PMDM',
      logo: {
        alt: 'Logo Programación Multimedia e Dispositivos Móbiles',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'dropdown',
          label: 'Temas',
          position: 'left',
          items: [
            {
              label: 'Tema 1 — El ecosistema móvil y el entorno',
              to: '/tema-1/a-dispositivos-moviles',
            },
          ],
        },
        {to: '/tema-1/f-plantilla-proyecto', label: 'Proyecto A', position: 'left'},
        {to: '/presentaciones', label: 'Presentaciones', position: 'left'},
        {to: '/changelogs', label: 'Changelogs', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} — Programación Multimedia e Dispositivos Móbiles. Feito con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['kotlin', 'java', 'csharp', 'json', 'bash'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
