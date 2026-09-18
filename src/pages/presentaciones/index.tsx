import type {ReactNode} from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '../index.module.css';

/* ─── Datos de presentaciones ───────────────────────────────── */
type Presentacion = {n: number; title: string; color: string; href: string};

// ─── ÍNDICE DE PRESENTACIONES ─────────────────────────────────────────────────
// Añade aquí cada presentación conforme se vaya generando en static/presentaciones/.
// ────────────────────────────────────────────────────────────────────────────
const PRESENTACIONES: Presentacion[] = [
  {
    n: 1,
    title: 'El ecosistema móvil y el entorno de trabajo',
    color: '#f59e0b',
    href: '/presentaciones/tema-1.html',
  },
];

/* ─── Tarjeta de presentación ───────────────────────────────── */
function PresentacionCard({presentacion}: {presentacion: Presentacion}) {
  return (
    <div className={styles.temaCard} style={{borderTopColor: presentacion.color}}>
      <div className={styles.temaCardHeader}>
        <span className={styles.temaNumber} style={{background: presentacion.color}}>
          T{presentacion.n}
        </span>
        <Heading as="h3" className={styles.temaTitle}>
          <a href={presentacion.href} target="_blank" rel="noreferrer" style={{color: presentacion.color}}>
            {presentacion.title}
          </a>
        </Heading>
      </div>
    </div>
  );
}

/* ─── Página principal ──────────────────────────────────────── */
export default function PresentacionesPage(): ReactNode {
  return (
    <Layout title="Presentaciones" description="Diapositivas de clase por tema">
      <main>
        <section className={styles.temasSection}>
          <div className="container">
            <Heading as="h2" className={styles.sectionTitle}>
              Presentaciones
            </Heading>
            {PRESENTACIONES.length === 0 ? (
              <p>Aún no hay presentaciones publicadas.</p>
            ) : (
              <div className={styles.temasGrid}>
                {PRESENTACIONES.map((p) => (
                  <PresentacionCard key={p.n} presentacion={p} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </Layout>
  );
}
