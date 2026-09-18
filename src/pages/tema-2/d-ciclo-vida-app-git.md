import NextPageButton from '@site/src/components/NextPageButton';

# Ciclo de vida de la aplicación y control de versiones

La página anterior trató el ciclo de vida de **una Activity** dentro de una ejecución. Esta página da un paso atrás para mirar el ciclo de vida de **la aplicación como producto**: desde que el usuario la descubre hasta que la desinstala. Y cierra con una herramienta que se va a usar durante todo el curso: Git, para trabajar sobre código que no hemos escrito nosotros.

---

## El ciclo de vida de la aplicación en el dispositivo

Más allá de los estados internos de una `Activity`, una aplicación como producto pasa por sus propias fases en el dispositivo del usuario:

| Fase | Qué ocurre |
|------|-------------|
| **Descubrimiento** | El usuario encuentra la app: tienda de aplicaciones, búsqueda, recomendación, enlace directo. |
| **Instalación** | El sistema descarga el paquete (`.apk`/`.aab`), verifica su firma y permisos, y lo registra en el dispositivo. |
| **Ejecución** | La app se usa. Internamente combina los ciclos de vida de sus Activities, Services y demás componentes. |
| **Actualización** | El sistema sustituye el paquete instalado por una versión nueva, normalmente conservando los datos del usuario. |
| **Borrado** | El usuario (o el sistema, en casos extremos de falta de espacio) desinstala la app, liberando el espacio que ocupaba. |

Este ciclo condiciona decisiones que parecen solo técnicas:

- **`versionCode` y `versionName`** (vistos en `build.gradle.kts` en el tema 1) existen precisamente para que el sistema sepa, en una actualización, si el paquete nuevo es realmente más reciente que el instalado.
- Los **datos de la aplicación sobreviven a una actualización** por defecto, pero no a una desinstalación completa (salvo mecanismos de copia de seguridad en la nube, fuera del alcance de esta unidad).
- El **primer arranque** tras la instalación suele ser distinto de los siguientes: es el momento de pedir permisos, mostrar una introducción o comprobar si hay una sesión guardada.

---

## Procesos y aplicaciones en segundo plano

Cuando el usuario "cierra" una app pulsando el botón de inicio, el **proceso** de esa aplicación normalmente sigue vivo en segundo plano una temporada, no se destruye inmediatamente. Android mantiene una jerarquía de prioridades de proceso, y cuando el sistema necesita memoria para la app que sí está en primer plano, empieza a matar procesos en segundo plano empezando por los de menor prioridad.

Esto conecta directamente con lo visto en el tema 1 (el sistema operativo puede matar tu aplicación en segundo plano, sin avisar) y con `onSaveInstanceState` de la página anterior: ambos mecanismos existen para que ese cierre "silencioso" no se note para el usuario cuando vuelve a abrir la app.

---

## El administrador de aplicaciones del sistema

Android incluye una pantalla de ajustes donde se puede inspeccionar y actuar sobre el ciclo de vida de cualquier app instalada: **Ajustes → Aplicaciones**.

Desde ahí se puede:

- Ver la **versión instalada** y el espacio que ocupa (app, datos, caché).
- **Forzar la detención** de una aplicación (simula que el sistema la ha matado).
- **Borrar caché** (datos temporales recuperables) o **borrar datos** (equivale a reinstalar desde cero, perdiendo todo lo local).
- Revisar y **revocar permisos** concedidos.
- **Desinstalar**.

:::tip
Forzar la detención como herramienta de depuración
"Forzar detención" es útil para comprobar cómo se comporta tu app en un arranque completamente limpio, sin depender de tener que reiniciar el emulador entero.
:::

---

## Modificar una aplicación existente

Una parte importante de la actividad profesional de un desarrollador no es escribir aplicaciones desde cero, sino **entender y modificar código que ha escrito otra persona**. El currículo lo recoge explícitamente como criterio de evaluación, y es una de las actividades de este tema.

Enfrentarse a un proyecto ajeno tiene un orden razonable:

1. **Leer el `AndroidManifest.xml` primero.** Da un mapa rápido: qué componentes tiene la app y cuál es el punto de entrada.
2. **Localizar la Activity de arranque** (la del `intent-filter` con `MAIN`/`LAUNCHER`) y seguir el flujo desde ahí.
3. **Identificar la estructura de paquetes.** Suele reflejar la arquitectura: paquetes por capa (`ui`, `data`, `model`) o por característica (`login`, `perfil`, `listado`).
4. **Ejecutar la app antes de tocar nada**, para tener un punto de referencia de cómo se comporta.
5. Solo entonces, **hacer el cambio mínimo** necesario y volver a probar.

---

## Git: por qué es obligatorio desde este tema

A partir de aquí el Proyecto A se desarrolla en un **repositorio Git**, con commits regulares. No es un añadido burocrático: es la herramienta profesional estándar para dos problemas que van a aparecer constantemente a partir de ahora:

- **Historial de cambios.** Poder volver a un estado anterior cuando una modificación rompe algo, sin depender de copias manuales de carpetas.
- **Trazabilidad del trabajo.** El seguimiento continuo del proyecto (parte de la evaluación del bloque de dispositivos móviles) se apoya en la regularidad de los commits, no solo en la entrega final.

### Flujo mínimo de trabajo

```bash
git init                                  # una vez, al crear el repositorio
git add .
git commit -m "Esqueleto inicial del proyecto"

# tras cada avance con sentido:
git add .
git commit -m "Añade pantalla de detalle y navegación"
```

:::warning
Qué NO se sube al repositorio
Android Studio genera carpetas de compilación (`build/`) y ficheros locales de configuración del IDE que no deben versionarse. Un proyecto nuevo ya trae un `.gitignore` adecuado: conviene revisarlo, no sustituirlo por uno genérico.
:::

### Buenas prácticas de commit

- **Commits pequeños y frecuentes**, no un único commit gigante al final del tema.
- **Mensajes que describan el qué y, si hace falta, el porqué** — no "cambios" o "arreglos".
- Un commit debe dejar el proyecto en un estado que **compile**, siempre que sea razonablemente posible.

<NextPageButton to="/tema-2/e-actividades">
Actividades del tema 2
</NextPageButton>
