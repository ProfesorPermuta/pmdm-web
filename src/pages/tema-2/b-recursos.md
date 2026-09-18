import NextPageButton from '@site/src/components/NextPageButton';

# Recursos: layouts, drawables, strings y cualificadores

En el tema 1 ya adelantamos una idea clave: **el código y los recursos están separados**. Esta página profundiza en qué tipos de recursos existen, dónde viven y cómo el sistema elige automáticamente el más adecuado según el dispositivo.

---

## La carpeta `res/`

Todo lo que no es lógica en Kotlin vive dentro de `res/`, organizado por tipo:

```
res/
├── layout/          ← diseños de pantalla (XML)
├── drawable/         ← imágenes, formas, iconos vectoriales
├── mipmap/           ← iconos de la aplicación (distintas densidades)
├── values/
│   ├── strings.xml   ← textos
│   ├── colors.xml    ← colores
│   ├── dimens.xml    ← medidas
│   └── styles.xml    ← estilos y temas
├── menu/             ← definiciones de menús
├── anim/             ← animaciones
└── raw/              ← ficheros sin procesar (audio, JSON...)
```

Cada recurso recibe un identificador generado automáticamente en la clase `R`. Un layout llamado `activity_main.xml` se referencia desde el código como `R.layout.activity_main`, y un texto declarado en `strings.xml` como `R.string.app_name`.

---

## Layouts: diseño de pantalla en XML

Un **layout** describe la disposición visual de una pantalla mediante XML declarativo. No se calculan posiciones a mano: se describe la estructura y el sistema la resuelve.

```xml
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp">

    <TextView
        android:id="@+id/tituloTextView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/titulo_pantalla"
        android:textSize="20sp" />

    <Button
        android:id="@+id/aceptarButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="@string/aceptar" />

</LinearLayout>
```

Puntos a fijar desde el principio:

- **`@+id/...`** crea un identificador nuevo; **`@id/...`** referencia uno ya existente. **`@string/...`**, **`@color/...`**, etc. referencian recursos de otros ficheros — nunca se escribe un texto literal directamente en el layout.
- **`match_parent`** ocupa todo el espacio disponible del contenedor padre; **`wrap_content`** ocupa solo lo necesario para su contenido.
- Un layout se infla en la `Activity` con `setContentView(R.layout.activity_main)`, y desde ahí se accede a sus vistas por id.

```kotlin
val boton = findViewById<Button>(R.id.aceptarButton)
boton.setOnClickListener {
    // Reacción al toque
}
```

:::note
View Binding
En proyectos modernos se suele evitar `findViewById` mediante *View Binding*, que genera automáticamente una clase con referencias tipadas a cada vista del layout. Se retomará al trabajar la interfaz de usuario en profundidad.
:::

---

## Drawables

Cualquier recurso que se pueda "dibujar": imágenes (`.png`, `.jpg`, `.webp`), iconos vectoriales (`.xml` con formato *Vector Drawable*) o formas definidas por XML (bordes redondeados, degradados, selectores de estado).

```xml
<!-- res/drawable/fondo_boton.xml -->
<shape xmlns:android="http://schemas.android.com/apk/res/android"
    android:shape="rectangle">
    <solid android:color="@color/primario" />
    <corners android:radius="8dp" />
</shape>
```

Los vectoriales (`VectorDrawable`) son preferibles a las imágenes de mapa de bits cuando es posible: un mismo fichero escala sin perder calidad a cualquier densidad, en lugar de necesitar una copia distinta por cada densidad de pantalla.

---

## `strings.xml`: textos centralizados

```xml
<resources>
    <string name="app_name">Mi Aplicación</string>
    <string name="titulo_pantalla">Bienvenido</string>
    <string name="aceptar">Aceptar</string>
</resources>
```

Todo texto visible por el usuario debe estar aquí, nunca escrito directamente en el layout o en el código. Las razones no son solo de estilo:

- **Internacionalización.** Traducir la aplicación es crear `values-en/strings.xml`, `values-gl/strings.xml`, etc., con las mismas claves. El sistema elige el fichero correcto según el idioma del dispositivo, sin tocar ni layouts ni código.
- **Mantenimiento.** Cambiar un texto que aparece en varias pantallas se hace en un único sitio.

---

## Cualificadores de configuración

Ya se introdujeron en el tema 1 al hablar de emuladores y perfiles: el nombre de una carpeta de `res/` puede llevar un **cualificador** que indica en qué configuración se usa ese recurso.

```
res/
├── values/strings.xml              ← por defecto
├── values-en/strings.xml           ← idioma inglés
├── layout/activity_main.xml        ← por defecto (vertical)
├── layout-land/activity_main.xml   ← orientación horizontal
├── layout-sw600dp/activity_main.xml ← pantallas ≥ 600dp (tablet)
├── drawable-night/fondo.xml        ← modo oscuro
└── drawable-xxhdpi/icono.png       ← densidad muy alta
```

El sistema resuelve automáticamente, en tiempo de ejecución, qué versión de cada recurso corresponde a la configuración actual del dispositivo (idioma, orientación, tamaño de pantalla, densidad, modo claro/oscuro...). **No se escribe ningún `if` para esto**: es responsabilidad del sistema de recursos, no del código de la aplicación.

| Cualificador | Ejemplo de carpeta | Selecciona según... |
|---------------|---------------------|----------------------|
| Idioma | `values-en/` | Idioma del sistema |
| Orientación | `layout-land/` | Orientación actual del dispositivo |
| Ancho mínimo | `layout-sw600dp/` | Tamaño de pantalla (tablets frente a teléfonos) |
| Densidad | `drawable-xxhdpi/` | Densidad de píxeles de la pantalla |
| Tema | `values-night/` | Modo claro u oscuro |

:::tip
Combinar cualificadores
Se pueden encadenar varios cualificadores en el mismo nombre de carpeta, respetando un orden fijo: por ejemplo `layout-land-sw600dp/` para una tablet en horizontal. Android Studio avisa si el orden no es válido.
:::

<NextPageButton to="/tema-2/c-ciclo-vida-activity">
Ciclo de vida de la Activity
</NextPageButton>
