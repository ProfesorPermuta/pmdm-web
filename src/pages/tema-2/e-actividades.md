import NextPageButton from '@site/src/components/NextPageButton';

# Actividades del tema 2

Las actividades son **abiertas**: se indica el objetivo y lo que hay que entregar, no una lista de pasos cerrada. El alcance concreto se acuerda en clase.

por cada actividad crea en una carpeta docs un adr con el siguiente formato (imagina el adr para A2.1).

```
0201.md

```

y dentro del documento:

``` md
# Análisis de una app de código abierto

## Cuántas Activities tiene y qué destinos de navegación (pantallas) contiene, siguiendo el enfoque moderno visto en clase.

Respuesta a la pregunta

## Si usa Services, Broadcast Receivers o Content Providers, y para qué.
...

```

---

Si alguna de las actividades necesita entregar código no lo hagas sobre este proyecto, crea un nuevo repositorio y en adr, en el apartado de la actividad, crea un enlace hacia el repositorio con el nuevo código.

## A2.1 · Análisis de una app de código abierto

**Objetivo:** identificar en un proyecto real los componentes y clases que se han presentado en este tema.

Analiza **Jetnews**, una aplicación de lectura de noticias dentro del repositorio [android/compose-samples](https://github.com/android/compose-samples/tree/main/Jetnews), publicado por Google como colección de ejemplos oficiales en Kotlin y Jetpack Compose. Es un proyecto de tamaño moderado y bien organizado: ni un "Hello World" de un fichero, ni un proyecto con decenas de módulos.

Sobre ella, elabora un **diagrama** (a mano, con una herramienta de diagramación, o incluso una tabla bien organizada) que muestre:

- Cuántas Activities tiene y qué destinos de navegación (pantallas) contiene, siguiendo el enfoque moderno visto en clase.
- Si usa Services, Broadcast Receivers o Content Providers, y para qué.
- Qué contiene su `AndroidManifest.xml`: componentes declarados, permisos solicitados, cuál es la actividad de arranque.
- Cómo está organizada la estructura de paquetes.

**Criterios de evaluación:** 1f.

---

## A2.2 · Modificación funcional de una app existente

**Objetivo:** intervenir sobre código ajeno de forma segura, siguiendo el proceso descrito en la página anterior.

Sobre la misma aplicación de la actividad A2.1 (u otra indicada en clase), añade o modifica una funcionalidad pequeña pero visible: un nuevo botón que haga algo, un cambio en un texto que dependa de una condición, una pantalla adicional sencilla...

1. Ejecuta la app tal cual, antes de tocar nada.
2. Localiza en el código el punto exacto donde hay que intervenir.
3. Implementa el cambio.
4. Documenta: qué cambiaste, dónde, y por qué elegiste ese punto del código.

**Criterios de evaluación:** 1g, 1h.

---

## A2.3 · Experimento de ciclo de vida

**Objetivo:** observar de primera mano las transiciones de estado de una Activity.

1. Sobre un proyecto propio (puede ser el esqueleto del Proyecto A si ya existe, o un proyecto de prueba), añade trazas de `Log.d` en **todos** los callbacks del ciclo de vida (`onCreate`, `onStart`, `onResume`, `onPause`, `onStop`, `onDestroy`).
2. Con Logcat abierto, provoca y registra al menos estas situaciones:
   - Arranque normal de la app.
   - Girar la pantalla.
   - Pulsar el botón de inicio y volver a la app.
   - Cerrar completamente la app y reabrirla.

**Entrega:** capturas de Logcat de cada situación, comentadas, más el código de `onSaveInstanceState` y una comprobación de que funciona.

**Criterios de evaluación:** 1h, 2a.

---

## A2.4 · Hito de proyecto: esqueleto del Proyecto A

**Objetivo:** arrancar formalmente el desarrollo del Proyecto A definido en el tema 1.

1. Crea el **repositorio Git** del proyecto 
2. Crea el proyecto en Android Studio con la estructura de paquetes que hayas decidido para tu aplicación.
3. Declara en el `AndroidManifest.xml` al menos la Activity de arranque.
4. Construye una **pantalla inicial** mínima (no hace falta que tenga toda la interfaz definitiva, solo debe compilar y ejecutarse).
5. Crea en la raiz del proyecto una carpeta llamada `docs/adr` donde mantendrás todos los adr solicitados a lo largo del curso. Añade aquí el adr del tema-1 y del tema-2.
6. Crea la carpeta `docs/proyecto` con el contenido de la plantilla del tema-1 con las especificaciones de tu proyecto, asegurate de cubrir los campos del punto 0.
7. Haz el **primer commit** con este esqueleto y, a partir de aquí, mantén commits regulares en cada sesión de trabajo.
8. Añade a ProfesorPermuta como colaborador de tu proyecto
   
:::warning
Este hito es la base de todo lo que viene
A partir de este tema, cada nueva unidad añade una capa al mismo proyecto. Un esqueleto mal organizado (paquetes desordenados, sin Git desde el principio) se paga en las unidades siguientes. Merece la pena dedicarle el tiempo necesario.
:::

**Criterios de evaluación:** 2a, 2b.

<NextPageButton to="/tema-2/a-componentes-android">
Volver al inicio del tema 2
</NextPageButton>
