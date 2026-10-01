import NextPageButton from '@site/src/components/NextPageButton';

# Actividades del tema 3

Las actividades son **abiertas**: se indica el objetivo y lo que hay que entregar, no una lista de pasos cerrada. El alcance concreto se acuerda en clase.

Por cada actividad crea en la carpeta `docs` un ADR con el siguiente formato (imagina el ADR para A3.1):

```
0301.md
```

y dentro del documento:

``` md
# Pantalla de perfil con Jetpack Compose

## Qué composables de estructura has usado y por qué

Respuesta a la pregunta

## Qué componentes comunes has usado y para qué

...
```

---

## A3.1 · Tarjeta de reseña

**Objetivo:** practicar la invocación de composables y la diferencia entre parámetros y contenido (*trailing lambda*), reproduciendo un elemento del mockup del catálogo de aplicaciones.

Crea una función `@Composable` propia, `FilaResenya`, que reproduzca la ["Fila de reseña"](/tema-3/f-mockup-catalogo-apps#fila-de-reseña) del mockup: un avatar circular, el nombre del usuario y su comentario a la izquierda (combinando `Row` y `Column`), y la valoración a la derecha. Después, úsala varias veces dentro de una `Column` para mostrar 4 o 5 reseñas de ejemplo.

**Criterios de evaluación:** 2a, 2b.

---

## A3.2 · Listado con LazyColumn

**Objetivo:** elegir el componente de estructura adecuado según el volumen de datos, reproduciendo otro elemento del mockup.

Crea una función `@Composable` propia, `FilaListadoInstall`, que reproduzca la ["Fila de listado con acción"](/tema-3/f-mockup-catalogo-apps#fila-de-listado-con-acción) del mockup: icono a la izquierda, dos líneas de texto en el centro (nombre y categoría/valoración) y un botón de acción ("Install") a la derecha.

Después, muéstrala dentro de una `LazyColumn` con al menos 30 elementos (pueden ser inventados).

**Entrega:** capturas de pantalla del resultado, y una explicación de por qué se ha elegido `LazyColumn` y no `Column` para este listado.

**Criterios de evaluación:** 2a, 2b.

---

## A3.3 · Formulario de nuevo usuario

**Objetivo:** practicar los componentes comunes de entrada de datos.

Diseña una pantalla de "Nuevo usuario" que use, como mínimo:

- Dos `TextField` (o `OutlinedTextField`), por ejemplo para nombre y correo electrónico.
- Un `Checkbox` o un `Switch`, por ejemplo para aceptar condiciones o recibir notificaciones.
- Un grupo de `RadioButton` con al menos tres opciones mutuamente excluyentes, por ejemplo un rol o tipo de cuenta.
- Un `Button` de acción principal ("Registrar") y un `TextButton` de cancelar.

No hace falta que el formulario haga nada al enviarse (eso se trabajará en la unidad de estado); basta con que la interfaz esté bien organizada y sea usable.

**Criterios de evaluación:** 2a, 2b.

---

## A3.4 · Pantalla completa con Scaffold

**Objetivo:** integrar todas las piezas de estructura de pantalla en un único ejemplo coherente.

Sobre el Proyecto A (o un proyecto de prueba si el Proyecto A no tiene aún pantallas construidas), monta una pantalla principal con `Scaffold` que incluya:

1. Una `TopAppBar` con título y al menos un icono de acción.
2. Una `NavigationBar` inferior con 2 o 3 secciones (el cambio de contenido puede ser tan simple como una variable de estado que decide qué `Column` mostrar).
3. Un `FloatingActionButton` con una acción con sentido para tu aplicación.
4. Un `Snackbar` que se muestre al pulsar el FAB, confirmando la acción.

:::warning
Cuidado con el padding del contenido
Recuerda aplicar el `paddingValues` que `Scaffold` proporciona al contenido, para que no quede tapado por la barra superior o inferior. Es el fallo más habitual en esta actividad.
:::

**Entrega:** código de la pantalla y una captura mostrando el snackbar visible tras pulsar el FAB.

**Criterios de evaluación:** 2a, 2b.

---

## A3.5 · Análisis de componentes del mockup del Proyecto A

**Objetivo:** aprender a *leer* un mockup antes de programarlo, descomponiendo cada pantalla en componentes reutilizables y en las piezas de estructura que los forman, tal y como se hizo en el [mockup del catálogo de aplicaciones](/tema-3/f-mockup-catalogo-apps).

Con el mockup de tu Proyecto A (el de la propuesta del tema 1) abierto en **Figma** o **Canva**, haz un análisis visual de componentes siguiendo este método:

1. **Una lámina por pantalla.** Coloca la pantalla completa a la izquierda con su nombre en formato de composable (por ejemplo, `PaginaMisJuegos`).
2. **Un recorte por cada componente repetido o relevante.** Al lado de la pantalla, copia el recorte de cada componente y ponle nombre en `PascalCase` (por ejemplo, `TarjetaVertical`, `TarjetaHorizontal`, `Buscador`).
3. **Marca la estructura con una leyenda de colores.** Dibuja sobre cada recorte rectángulos de contorno, siempre con el mismo código de color, e incluye la leyenda en la lámina:

   | Color | Contenedor |
   |-------|------------|
   | Rojo | `Column` |
   | Verde | `Row` |
   | Morado | `Box` |
   | Naranja | `LazyColumn`|
   | Azul | `LazyRow` |

4. **Etiqueta los componentes hoja.** Los elementos que ya no se descomponen más (`Image`, `Text`, `ProgressBar`, `Button`, `Icon`…) se marcan con una etiqueta o con un contorno amarillo.
5. **Respeta la anidación.** Si un `Row` contiene una `Column` que a su vez contiene otro `Row` (como en la tarjeta horizontal: imagen + columna con título y fila de categoría/valoración + botón), los rectángulos deben reflejar esa jerarquía.

:::tip
Pregúntate en cada recorte
¿Qué contenedor coloca a sus hijos en vertical, en horizontal o apilados? ¿Qué parte cambia según los datos (parámetros del composable) y qué parte es fija?
:::

**Entrega:** exporta la lámina como imagen (PNG) o PDF e inclúyela en el ADR, junto con una tabla con, para cada componente: nombre, contenedores que lo forman, componentes hoja y parámetros que recibiría.

**Criterios de evaluación:** 2a, 2b.

---

## A3.6 · Componentes y páginas del Proyecto A en Compose

**Objetivo:** convertir el análisis de A3.5 en código, generando los componentes y las páginas del mockup del Proyecto A.

1. **Componentes.** Crea un `@Composable` por cada componente identificado en A3.5, con los datos como parámetros (nada de textos o imágenes escritos a fuego dentro) y un `modifier` opcional. Agrúpalos en un paquete `ui/components`. Cada componente debe tener su `@Preview`.
2. **Páginas.** Crea un `@Composable` por cada pantalla del mockup (por ejemplo, `PaginaMisJuegos`) en un paquete `ui/pages` (o `ui/screens`), que **componga** los componentes anteriores con datos de ejemplo. Usa `Scaffold` si la pantalla tiene barra superior, inferior o FAB, y `LazyColumn`/`LazyRow` para los listados.
3. **Fidelidad.** Compara el resultado con el mockup lado a lado: estructura, espaciados, jerarquía de textos y colores deben ser reconocibles. No se pide navegación entre pantallas ni lógica; eso llegará en unidades posteriores.
4. Intenta **hacer todos los posibles**, si falta alguno de los elementos de los mockups se podrán hacer más adelante, pero cuanto más avances ahora menos trabajo quedará para despues. Como mínimo deberías tener 3 componentes y 2 páginas montadas al finalizar la actividad.

**Entrega:** código en el repositorio del Proyecto A y una captura de cada página junto a su mockup original.

**Criterios de evaluación:** 2a, 2b.

<NextPageButton to="/tema-3/a-composables-y-invocacion">
Volver al inicio del tema 3
</NextPageButton>
