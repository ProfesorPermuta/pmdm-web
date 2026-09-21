import NextPageButton from '@site/src/components/NextPageButton';

# Leer un mockup: catálogo de aplicaciones

Antes de pasar a las actividades, conviene practicar algo que se hará constantemente durante el curso: **mirar el diseño de una pantalla y reconocer qué composables hacen falta para construirla**. A continuación se analiza el mockup de una app de catálogo de aplicaciones (estilo tienda de apps), con dos pantallas: un listado ("My Games") y una ficha de detalle.

<div style={{textAlign: 'center'}}>
  <img src="/img/mockup_catalogo_apps.png" alt="Mockup de una app de catálogo: pantalla de listado 'My Games' y pantalla de detalle de una app" style={{maxWidth: '100%', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />
</div>

<p style={{textAlign: 'center'}}>
  <a href="/img/mockup_catalogo_apps.png" download>Descargar imagen</a>
</p>

:::note
En esta página no hay código
El objetivo aquí es solo **identificar** qué pieza de Compose corresponde a cada zona del diseño. Escribir esos composables será el trabajo de la actividad correspondiente, en la página siguiente.
:::

---

## Componentes que se repiten

Varias zonas del mockup no son un elemento único, sino **un mismo diseño que se repite varias veces con datos distintos**. Esa repetición es la pista más clara de que, en Compose, corresponden a un `item` dentro de una lista (`LazyColumn`/`LazyRow`), no a composables escritos uno a uno.

### Tarjeta de progreso

<img src="/img/mockup/04-card-progreso.png" alt="Tarjeta de un juego en curso, con imagen, nombre y barra de progreso" style={{maxWidth: '260px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

Aparece dos veces en "Continue Playing" (Neon Runners, Echo Realm), una por cada juego que el usuario tiene empezado. Combina una imagen, un texto y una barra de progreso: es el elemento que se repetiría dentro de una `LazyRow`.

### Fila de listado con acción

<img src="/img/mockup/06-list-item-install.png" alt="Fila de un juego popular, con icono, nombre, categoría, valoración y botón Install" style={{maxWidth: '400px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

Se repite tres veces en "Popular Games" (Orbit Command, Prism Shift, Wilderwood). Icono a la izquierda, dos líneas de texto en el centro y un botón de acción a la derecha: el elemento típico de una `LazyColumn`.

### Chip de filtro

<img src="/img/mockup/03-filter-chips.png" alt="Fila de chips de categoría: All, Action, RPG, Strategy, Puzzle" style={{maxWidth: '400px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

Cinco etiquetas seleccionables ("All", "Action", "RPG"...), una de ellas resaltada como activa. Es el mismo patrón visual repetido en horizontal: candidato a una `LazyRow` de chips.

### Fila de reseña

<img src="/img/mockup/12-review-item.png" alt="Fila de una reseña de usuario, con avatar circular, nombre, comentario y valoración" style={{maxWidth: '400px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

Se repite en "Reviews" (Ava R., Marcus K.), con un avatar circular, nombre y comentario a la izquierda, y la valoración a la derecha.

### Tira de capturas

<img src="/img/mockup/11-screenshots-row.png" alt="Tira horizontal de tres capturas de pantalla del juego" style={{maxWidth: '400px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

Tres miniaturas de captura, desplazables en horizontal en la pantalla de detalle: el mismo patrón de tira que "Continue Playing", pero con imágenes sueltas en vez de tarjetas con texto.

---

## Componentes que aparecen una sola vez

El resto de piezas son fijas: no dependen de una lista de datos, aparecen una única vez en la pantalla y forman el "armazón" alrededor de las listas.

### Barra superior

<img src="/img/mockup/01-topbar.png" alt="Barra superior con el título My Games y un icono de perfil" style={{maxWidth: '400px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

Título de la pantalla ("My Games") y un icono de acción a la derecha (perfil). Es el hueco `topBar` de `Scaffold`, típicamente resuelto con `TopAppBar`.

### Campo de búsqueda

<img src="/img/mockup/02-search-field.png" alt="Campo de texto de búsqueda con icono de lupa y texto de ejemplo Search games..." style={{maxWidth: '400px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

Una caja de entrada de texto con un icono y un texto de ejemplo ("Search games..."). Es un campo de texto con icono inicial, no una lista.

### Cabecera de sección

<img src="/img/mockup/05-section-header.png" alt="Cabecera de sección con el título Continue Playing y el enlace See all" style={{maxWidth: '400px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

El título de cada bloque ("Continue Playing", "Popular Games") con, en algunos casos, un enlace de texto a la derecha ("See all"). Se repite como *patrón de diseño* (dos veces en esta pantalla), pero no como *lista de datos*: son dos títulos distintos escritos a mano, no generados a partir de una colección.

### Barra de navegación inferior

<img src="/img/mockup/07-bottom-nav.png" alt="Barra de navegación inferior con Home, Explore, Library y Profile" style={{maxWidth: '400px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

Cuatro secciones fijas de la aplicación (Home, Explore, Library, Profile), con la actual resaltada. Es el hueco `bottomBar` de `Scaffold`.

### Imagen de cabecera con iconos superpuestos

<img src="/img/mockup/08-header-image-box.png" alt="Imagen grande de portada con flecha de volver, botón de compartir y etiqueta Editor's Choice superpuestos" style={{maxWidth: '260px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

La imagen de portada de la pantalla de detalle, con varios elementos **flotando encima** de ella: la flecha de volver y el botón de compartir arriba, el icono de guardar y la etiqueta "Editor's Choice" abajo. Cualquier elemento dibujado "sobre" otro, en vez de al lado, es la pista de un `Box`.

### Etiquetas de metadatos

<img src="/img/mockup/09-tag-chips.png" alt="Etiquetas Size 2.4 GB, Age 12+ y Version 3.1" style={{maxWidth: '400px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

Tres etiquetas con datos fijos de la app (tamaño, edad, versión), una junto a otra. A diferencia de los chips de filtro, aquí no se selecciona nada: son solo texto informativo con fondo redondeado.

### Botón de ancho completo

<img src="/img/mockup/10-full-width-button.png" alt="Botón Install ocupando todo el ancho de la pantalla" style={{maxWidth: '400px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

El botón principal de la pantalla de detalle, ocupando todo el ancho disponible en vez del tamaño ajustado al texto que tiene el botón "Install" de las filas de listado.

---

## Pantalla 1 completa: listado ("My Games")

<img src="/img/mockup/pantalla1-listado-anotada.png" alt="Pantalla de listado My Games con las distintas secciones marcadas con recuadros de colores" style={{maxWidth: '480px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

| Sección marcada | Sería... |
|---|---|
| **topBar** (rojo) | `Scaffold(topBar = { TopAppBar(...) })` |
| **TextField** (ámbar) | `OutlinedTextField` con icono de búsqueda |
| **LazyRow (chips)** (violeta) | `LazyRow` con un chip de filtro por `item` |
| **Row (cabecera)** (rosa) | `Row` con el título de la sección y un `TextButton` ("See all") |
| **LazyRow (tarjetas)** (verde) | `LazyRow` con una tarjeta de progreso por `item` |
| **LazyColumn (filas)** (azul) | `LazyColumn` con una fila de listado por `item` |
| **NavigationBar** (amarillo) | `Scaffold(bottomBar = { NavigationBar(...) })` |

---

## Pantalla 2 completa: detalle de la app

<img src="/img/mockup/pantalla2-detalle-anotada.png" alt="Pantalla de detalle de Neon Runners con las distintas secciones marcadas con recuadros de colores" style={{maxWidth: '480px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />

| Sección marcada | Sería... |
|---|---|
| **Box (imagen + iconos)** (verde) | `Box` con la imagen de fondo y los `IconButton` superpuestos con `Modifier.align(...)` |
| **Row (título + favorito)** (rosa) | `Row` con un `Column` (nombre, categoría, valoración) y un icono de favorito |
| **Row (etiquetas)** (violeta) | `Row` con las etiquetas de metadatos |
| **Button (ancho completo)** (azul) | `Button(modifier = Modifier.fillMaxWidth())` |
| **Column (texto)** (rojo) | `Column` con el título "Description" y el párrafo |
| **LazyRow (capturas)** (ámbar) | `LazyRow` con una imagen de captura por `item` |
| **LazyColumn (reseñas)** (amarillo) | `LazyColumn` con una fila de reseña por `item` |
| **NavigationBar** (rojo, abajo) | La misma barra inferior que en el listado |

:::tip
Esta pantalla no es una única lista
El detalle mezcla secciones muy distintas entre sí (cabecera, texto fijo, dos listas horizontales/verticales). En vez de forzarlo todo dentro de una `LazyColumn`, es más práctico un `Column` con scroll que contenga, dentro, las listas puntuales (`LazyRow` de capturas, `LazyColumn` de reseñas) donde de verdad hay una colección de datos que puede crecer.
:::

---

## Resumen del proceso de lectura

1. **Buscar elementos que se repiten con datos distintos**: si el mismo diseño aparece varias veces (tarjetas, filas, chips, reseñas), es un candidato a `item` dentro de una lista `Lazy*`.
2. **Separar eso del contenido fijo**: títulos de sección, barras y botones únicos no dependen de una lista, aunque el patrón visual se repita.
3. **Identificar las zonas fijas de `Scaffold`**: ¿hay barra superior?, ¿barra inferior?, ¿botón flotante?
4. **Elegir horizontal o vertical** para cada lista: carruseles y tiras → `LazyRow`; listados que ocupan la pantalla → `LazyColumn`.
5. **Buscar superposiciones**: cualquier elemento "flotando" sobre otro es la pista de un `Box` con `Modifier.align(...)`.

<NextPageButton to="/tema-3/e-actividades">
Actividades del tema 3
</NextPageButton>
