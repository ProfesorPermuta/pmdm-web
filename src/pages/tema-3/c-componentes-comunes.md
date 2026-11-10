import NextPageButton from '@site/src/components/NextPageButton';

# Componentes comunes: los controles ya hechos

Compose incluye, en la librería **Material 3**, un catálogo amplio de componentes de interfaz ya construidos y con el aspecto visual de Material Design listo para usar: botones, campos de texto, casillas, interruptores, etc. Son el equivalente a `Button`, `EditText`, `CheckBox`... del sistema de Views clásico, pero como funciones `@Composable`.

Todos comparten una idea de fondo importante que se retomará en profundidad más adelante en el curso (estado y *recomposición*): **muchos de estos componentes no guardan su propio valor**. Hay que decirles qué mostrar y qué hacer cuando el usuario interactúa, mediante parámetros. De momento basta con manejar la forma de estos componentes; el porqué de esta forma se entenderá del todo cuando se trabaje el estado.

---

## `Text`: mostrar texto

El más simple de todos. Muestra una cadena de texto, con opciones de estilo:

```kotlin
Text(
    text = "Bienvenido",
    fontSize = 20.sp,
    fontWeight = FontWeight.Bold,
    color = Color.DarkGray
)
```

---

## `Button` y sus variantes

Ya se ha visto `Button` en la página anterior. Material 3 ofrece varias variantes con distinto peso visual, útiles para distinguir la acción principal de una pantalla de las acciones secundarias:

```kotlin
Button(onClick = { /* acción principal */ }) {
    Text("Confirmar")
}

OutlinedButton(onClick = { /* acción secundaria */ }) {
    Text("Cancelar")
}

TextButton(onClick = { /* acción terciaria */ }) {
    Text("Más información")
}
```

<div style={{textAlign: 'center'}}>
  <img src="/img/tema_3_diagramas/botones.svg" alt="Button relleno, OutlinedButton con contorno y TextButton solo texto" style={{maxWidth: '540px', width: '100%'}} />
</div>

| Variante | Peso visual | Uso típico |
|---|---|---|
| `Button` | Alto (relleno de color) | Acción principal de la pantalla |
| `OutlinedButton` | Medio (solo contorno) | Acción secundaria |
| `TextButton` | Bajo (solo texto) | Acción terciaria, poco intrusiva |

---

## `TextField`: entrada de texto

Es el equivalente a `EditText`. A diferencia de `EditText`, que guarda su propio texto internamente, `TextField` necesita que **se le pase el valor actual y qué hacer cuando cambia**:

```kotlin
var texto by remember { mutableStateOf("") }

TextField(
    value = texto,
    onValueChange = { nuevoValor -> texto = nuevoValor },
    label = { Text("Nombre") }
)
```

:::note
`remember` y `mutableStateOf` no se explican todavía
Esta línea aparece aquí porque un `TextField` no funciona sin algo que recuerde lo que el usuario ha escrito. `remember { mutableStateOf(...) }` es la forma de crear ese "valor que Compose recuerda entre redibujados". El mecanismo completo de estado y recomposición se explica en [MVVM y remember](/tema-3/h-mvvm-y-remember); de momento basta con copiar este patrón cuando haga falta un campo de texto editable.
:::

También existe `OutlinedTextField`, con el mismo comportamiento pero con el estilo de contorno en vez de relleno, igual que ocurre entre `Button` y `OutlinedButton`.

---

## Controles de selección

### `Checkbox`

Una casilla de marcar, para opciones independientes entre sí (se puede marcar más de una a la vez):

```kotlin
var marcado by remember { mutableStateOf(false) }

Checkbox(
    checked = marcado,
    onCheckedChange = { marcado = it }
)
```

### `RadioButton`

Para opciones **mutuamente excluyentes** (solo una puede estar seleccionada). A diferencia de Java/Views, Compose no agrupa los `RadioButton` automáticamente: la exclusión se programa a mano, comparando cuál está seleccionado:

```kotlin
var opcionSeleccionada by remember { mutableStateOf("A") }

Row {
    RadioButton(
        selected = opcionSeleccionada == "A",
        onClick = { opcionSeleccionada = "A" }
    )
    Text("Opción A")

    RadioButton(
        selected = opcionSeleccionada == "B",
        onClick = { opcionSeleccionada = "B" }
    )
    Text("Opción B")
}
```

### `Switch`

Un interruptor de encendido/apagado, típico de pantallas de ajustes:

```kotlin
var activado by remember { mutableStateOf(false) }

Switch(
    checked = activado,
    onCheckedChange = { activado = it }
)
```

```
Checkbox        RadioButton       Switch
  ☑ Opción        ⦿ Opción A        ⬤——○  (apagado)
                  ○ Opción B        ○——⬤  (encendido)
```

---

## `Image` e `Icon`

`Image` muestra un gráfico (un recurso *drawable*, un bitmap...). `Icon` es una versión pensada específicamente para iconos: además de la imagen, admite un `tint` (color) que se aplica automáticamente y exige una `contentDescription` para accesibilidad (lectores de pantalla).

```kotlin
Image(
    painter = painterResource(id = R.drawable.foto_perfil),
    contentDescription = "Foto de perfil"
)

Icon(
    imageVector = Icons.Default.Favorite,
    contentDescription = "Favorito",
    tint = Color.Red
)
```

:::warning
`contentDescription` no es opcional por capricho
Describe el elemento gráfico para usuarios con lectores de pantalla (TalkBack). Si la imagen es puramente decorativa y no aporta información, se pasa explícitamente `null`; si aporta información (un icono de "favorito marcado", una foto de perfil), debe llevar una descripción real. Compose obliga a decidirlo de forma consciente: no hay un valor por defecto que lo omita silenciosamente.
:::

---

## `CircularProgressIndicator` y `LinearProgressIndicator`

Indicadores de carga, muy usados mientras se espera una respuesta de red (se retomará en la unidad de conectividad):

```kotlin
CircularProgressIndicator()

LinearProgressIndicator(progress = { 0.6f })
```

---

## Tabla resumen

| Componente | Equivalente clásico | Para qué sirve |
|---|---|---|
| `Text` | `TextView` | Mostrar texto |
| `Button` / `OutlinedButton` / `TextButton` | `Button` | Acciones, con distinto peso visual |
| `TextField` / `OutlinedTextField` | `EditText` | Entrada de texto |
| `Checkbox` | `CheckBox` | Selección múltiple independiente |
| `RadioButton` | `RadioButton` | Selección única entre varias |
| `Switch` | `Switch` | Encendido / apagado |
| `Image` / `Icon` | `ImageView` | Gráficos e iconografía |
| `CircularProgressIndicator` | `ProgressBar` | Indicar carga en curso |

<NextPageButton to="/tema-3/g-material3-theming">
Material 3: el sistema de color detrás de los componentes
</NextPageButton>
