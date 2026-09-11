import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Tema = {
  title: string;
  path: string;
  items: {label: string; to: string}[];
};

// ─── ÍNDICE DE CONTENIDOS ─────────────────────────────────────────────────────
// Añade aquí cada tema conforme se vaya creando el contenido en src/pages/tema-N/.
// Recuerda replicar la entrada correspondiente en el dropdown "Temas"
// de docusaurus.config.ts.
//
//   {
//     title: 'Tema 0 — Título del tema',
//     path: '/tema-0',
//     items: [
//       { label: 'Introducción', to: '/tema-0/a-introduccion' },
//     ],
//   },
// ─────────────────────────────────────────────────────────────────────────────
const TEMAS: Tema[] = [
  {
    title: 'Tema 1 — El ecosistema móvil y el entorno de trabajo',
    path: '/tema-1',
    items: [
      {label: 'Dispositivos móviles', to: '/tema-1/a-dispositivos-moviles'},
      {label: 'Tecnologías de desarrollo', to: '/tema-1/b-tecnologias-desarrollo'},
      {label: 'Entorno: Android Studio', to: '/tema-1/c-entorno-android-studio'},
      {label: 'Emuladores y perfiles', to: '/tema-1/d-emuladores-y-perfiles'},
      {label: 'Actividades', to: '/tema-1/e-actividades'},
      {label: 'Plantilla del Proyecto A', to: '/tema-1/f-plantilla-proyecto'},
    ],
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

function TopicIndex() {
  return (
    <section style={{maxWidth: '960px', margin: '48px auto', padding: '0 24px'}}>
      <Heading as="h2" style={{marginBottom: '32px'}}>
        Índice de contenidos
      </Heading>
      {TEMAS.length === 0 ? (
        <p>Aún no hay contenido publicado.</p>
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px',
          }}>
          {TEMAS.map((tema) => (
            <div
              key={tema.path}
              style={{
                border: '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: '8px',
                padding: '20px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}>
              <Heading as="h3" style={{fontSize: '1rem', marginBottom: '12px'}}>
                {tema.title}
              </Heading>
              <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                {tema.items.map((item) => (
                  <li key={item.to} style={{marginBottom: '4px'}}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <TopicIndex />
      </main>
    </Layout>
  );
}
