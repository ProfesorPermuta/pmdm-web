import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

/* ─── Datos del curso ───────────────────────────────────────── */
type TemaPage = {label: string; href: string};
type Tema = {n: number; title: string; color: string; pages: TemaPage[]};

// ─── ÍNDICE DE CONTENIDOS ─────────────────────────────────────────────────────
// Añade aquí cada tema conforme se vaya creando el contenido en src/pages/tema-N/.
// Recuerda replicar la entrada correspondiente en el dropdown "Temas"
// de docusaurus.config.ts.
// ─────────────────────────────────────────────────────────────────────────────
const TEMAS: Tema[] = [
  {
    n: 1,
    title: 'El ecosistema móvil y el entorno de trabajo',
    color: '#f59e0b',
    pages: [
      {label: 'Dispositivos móviles', href: '/tema-1/a-dispositivos-moviles'},
      {label: 'Tecnologías de desarrollo', href: '/tema-1/b-tecnologias-desarrollo'},
      {label: 'Entorno: Android Studio', href: '/tema-1/c-entorno-android-studio'},
      {label: 'Emuladores y perfiles', href: '/tema-1/d-emuladores-y-perfiles'},
      {label: 'Actividades', href: '/tema-1/e-actividades'},
      {label: 'Plantilla del Proyecto A', href: '/tema-1/f-plantilla-proyecto'},
    ],
  },
  {
    n: 2,
    title: 'Anatomía de una aplicación Android: componentes y ciclo de vida',
    color: '#3b82f6',
    pages: [
      {label: 'Componentes y el Manifest', href: '/tema-2/a-componentes-android'},
      {label: 'Recursos: layouts, drawables y strings', href: '/tema-2/b-recursos'},
      {label: 'Ciclo de vida de la Activity', href: '/tema-2/c-ciclo-vida-activity'},
      {label: 'Ciclo de vida de la app y Git', href: '/tema-2/d-ciclo-vida-app-git'},
      {label: 'Actividades', href: '/tema-2/e-actividades'},
    ],
  },
  {
    n: 3,
    title: 'Diseño y programación de interfaces con Jetpack Compose',
    color: '#10b981',
    pages: [
      {label: 'Composables y su invocación', href: '/tema-3/a-composables-y-invocacion'},
      {label: 'Componentes de estructura', href: '/tema-3/b-componentes-estructura'},
      {label: 'Componentes comunes', href: '/tema-3/c-componentes-comunes'},
      {label: 'Material 3: el sistema de color', href: '/tema-3/g-material3-theming'},
      {label: 'MVVM y remember', href: '/tema-3/h-mvvm-y-remember'},
      {label: 'Scaffold', href: '/tema-3/d-scaffold'},
      {label: 'Navegación (I): NavGraph y rutas tipadas', href: '/tema-3/j-navegacion-basica'},
      {label: 'Navegación (II): pila, intents y estructura', href: '/tema-3/k-navegacion-avanzada'},
      {label: 'Leer un mockup: catálogo de apps', href: '/tema-3/f-mockup-catalogo-apps'},
      {label: 'Actividades', href: '/tema-3/e-actividades'},
      {label: 'Enlaces de interés', href: '/tema-3/i-enlaces-de-interes'},
    ],
  },
];

/* ─── Tarjeta de tema ───────────────────────────────────────── */
function TemaCard({tema}: {tema: Tema}) {
  return (
    <div className={styles.temaCard} style={{borderTopColor: tema.color}}>
      <div className={styles.temaCardHeader}>
        <span className={styles.temaNumber} style={{background: tema.color}}>
          T{tema.n}
        </span>
        <Heading as="h3" className={styles.temaTitle}>
          <Link to={tema.pages[0].href} style={{color: tema.color}}>
            {tema.title}
          </Link>
        </Heading>
      </div>
      <ul className={styles.temaPageList}>
        {tema.pages.map((p) => (
          <li key={p.href}>
            <Link to={p.href}>{p.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Hero ──────────────────────────────────────────────────── */
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

/* ─── Página principal ──────────────────────────────────────── */
export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <section className={styles.temasSection}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              Índice de contenidos
            </Heading>
            {TEMAS.length === 0 ? (
              <p>Aún no hay contenido publicado.</p>
            ) : (
              <div className={styles.temasGrid}>
                {TEMAS.map((tema) => (
                  <TemaCard key={tema.n} tema={tema} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
