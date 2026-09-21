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

## A3.1 · Primeros composables

**Objetivo:** practicar la invocación de composables y la diferencia entre parámetros y contenido (*trailing lambda*).

Crea una función `@Composable` propia, `TarjetaContacto`, que reciba nombre, teléfono y una imagen, y que muestre esa información combinando `Row`, `Column` e `Image`. Después, úsala varias veces dentro de una `Column` para mostrar una pequeña agenda de 4 o 5 contactos.

**Criterios de evaluación:** 2a, 2b.

---

## A3.2 · Estructura de una pantalla de listado

**Objetivo:** elegir el componente de estructura adecuado según el volumen de datos.

Construye una pantalla que muestre un catálogo de al menos 30 elementos (pueden ser inventados: productos, películas, canciones...) usando `LazyColumn`. Cada elemento debe mostrarse con una fila (`Row`) que combine una imagen o icono, un `Column` con dos líneas de texto, y esté correctamente organizado.

Añade, además, una `LazyRow` en la parte superior con categorías o filtros de ejemplo.

**Entrega:** capturas de pantalla del resultado, y una explicación de por qué se ha elegido `LazyColumn` y no `Column` para el listado principal.

**Criterios de evaluación:** 2a, 2b.

---

## A3.3 · Formulario con controles

**Objetivo:** practicar los componentes comunes de entrada de datos.

Diseña una pantalla de "Nuevo registro" (puede ser de cualquier dominio: un usuario, un producto, una reserva...) que use, como mínimo:

- Dos `TextField` (o `OutlinedTextField`).
- Un `Checkbox` o un `Switch`.
- Un grupo de `RadioButton` con al menos tres opciones mutuamente excluyentes.
- Un `Button` de acción principal y un `TextButton` de cancelar.

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

<NextPageButton to="/tema-3/a-composables-y-invocacion">
Volver al inicio del tema 3
</NextPageButton>
