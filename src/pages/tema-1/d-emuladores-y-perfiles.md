import NextPageButton from '@site/src/components/NextPageButton';

# Emuladores, perfiles y dispositivos

Probar en un solo dispositivo no basta: la aplicación se ejecutará en pantallas, densidades y versiones de Android muy distintas. El emulador permite cubrir esa variedad sin tener veinte teléfonos sobre la mesa.

---

## Qué es un AVD

Un **AVD (Android Virtual Device)** es la definición de un dispositivo virtual. Se compone de tres elementos:

1. **Perfil de hardware** — tamaño de pantalla, densidad, RAM, sensores disponibles, cámara.
2. **Imagen del sistema** — la versión de Android que ejecuta (API 30, 34, 35…) y su arquitectura.
3. **Configuración** — orientación de arranque, memoria asignada, aceleración gráfica, almacenamiento.

Se gestionan desde el **Device Manager** (icono de teléfono en la barra lateral derecha, o **Tools → Device Manager**).

### Crear un AVD

1. **Device Manager → Create Device**.
2. Elegir un perfil de hardware (por ejemplo, *Pixel 7*).
3. Elegir una imagen del sistema y descargarla si hace falta.
4. Revisar la configuración avanzada y darle un nombre descriptivo.
5. **Finish**.

:::tip
Elegir la imagen del sistema
Las imágenes con **Google Play** incluyen los servicios de Google (necesarios para mapas o notificaciones push). Las que solo dicen *Google APIs* no incluyen la tienda. Las imágenes **x86_64** son mucho más rápidas que las ARM en un PC.
:::

---

## Configuraciones y perfiles

El currículo del módulo distingue dos conceptos que conviene tener claros.

### Configuración

Una **configuración** clasifica dispositivos según sus características de hardware: tamaño y densidad de pantalla, memoria disponible, procesador, sensores presentes. Responde a *«¿qué clase de dispositivo es este?»*.

En Android esto se materializa en los **cualificadores de recursos**. El sistema elige automáticamente el recurso adecuado según la configuración del dispositivo en ejecución:

```
res/
├── values/strings.xml          ← por defecto
├── values-gl/strings.xml       ← idioma gallego
├── values-en/strings.xml       ← idioma inglés
├── layout/activity_main.xml    ← por defecto (vertical)
├── layout-land/activity_main.xml   ← horizontal
├── layout-sw600dp/activity_main.xml ← pantallas ≥ 600dp (tablet)
├── drawable-mdpi/icono.png     ← densidad media
├── drawable-hdpi/icono.png     ← densidad alta
└── drawable-xxhdpi/icono.png   ← densidad muy alta
```

No hay que escribir código para esto: basta con colocar el recurso en la carpeta con el cualificador correcto.

### Perfil

Un **perfil** establece la relación entre el dispositivo y la aplicación: qué APIs están disponibles, qué requisitos mínimos exige la app y en qué dispositivos puede por tanto instalarse.

En Android el perfil se define mediante:

- El **nivel de API** (`minSdk`, `targetSdk`).
- Las **características de hardware requeridas**, declaradas en el Manifest:

```xml
<!-- La app no se instala en dispositivos sin cámara -->
<uses-feature
    android:name="android.hardware.camera"
    android:required="true" />

<!-- La app usa NFC si está disponible, pero no lo exige -->
<uses-feature
    android:name="android.hardware.nfc"
    android:required="false" />
```

Google Play filtra automáticamente el catálogo: un dispositivo sin cámara no verá siquiera la aplicación del primer ejemplo.

---

## Densidad de pantalla: `dp` y `sp`

Este es el concepto que más errores de principiante provoca.

Dos móviles pueden tener el mismo tamaño físico y muy distinta resolución. Si se posiciona un botón "a 100 píxeles", en un dispositivo ocupará un tercio de la pantalla y en otro un décimo.

Por eso Android usa unidades independientes de la densidad:

| Unidad | Uso | Definición |
|--------|-----|------------|
| `dp` | Tamaños y márgenes | 1 dp = 1 px en una pantalla de 160 ppp. El sistema escala al resto. |
| `sp` | **Solo** tamaños de texto | Igual que `dp`, pero además respeta el tamaño de fuente configurado por el usuario. |
| `px` | Prácticamente nunca | Píxel físico real. |

```xml
<!-- Correcto -->
<Button
    android:layout_width="wrap_content"
    android:layout_height="48dp"
    android:textSize="16sp" />
```

:::warning
Usar `sp` en el texto no es cosmético: es **accesibilidad**. Una persona con dificultades de visión aumenta el tamaño de fuente del sistema, y si el texto está en `dp` ese ajuste se ignora.
:::

Los grupos de densidad estándar son `mdpi` (×1), `hdpi` (×1,5), `xhdpi` (×2), `xxhdpi` (×3) y `xxxhdpi` (×4).

---

## Trabajar con el emulador

Botones útiles de la barra lateral del emulador:

- **Rotar** — comprueba que el diseño sobrevive al giro (destruye y recrea la Activity: lo veremos en el tema 2).
- **Capturar pantalla**.
- **Extended Controls (⋯)** — el panel más interesante:
  - *Location*: simula coordenadas GPS y hasta rutas.
  - *Cellular*: simula red lenta, 3G o pérdida de cobertura.
  - *Battery*: simula batería baja o desconexión del cargador.
  - *Virtual sensors*: simula acelerómetro y giroscopio.

Estos controles permiten probar en el aula situaciones que en un dispositivo real serían difíciles de reproducir.

---

## Emulador frente a dispositivo real

| | Emulador | Dispositivo real |
|---|----------|------------------|
| Variedad de configuraciones | Alta, gratuita | Limitada al hardware disponible |
| Simulación de sensores y red | Muy cómoda | Difícil de controlar |
| Velocidad | Depende del PC | Real |
| Fidelidad de rendimiento | Engañosa | La única fiable |
| Cámara, Bluetooth, NFC | Limitados o ausentes | Completos |

**Conclusión práctica:** el emulador sirve para desarrollar y para cubrir la variedad de configuraciones; el dispositivo real es imprescindible para validar rendimiento y hardware. Se usan los dos.

---

## Depurar en un dispositivo real

1. **Ajustes → Información del teléfono**, pulsar siete veces sobre *Número de compilación*. Aparece el menú de desarrollador.
2. **Ajustes → Opciones de desarrollador**, activar **Depuración por USB**.
3. Conectar por cable y aceptar en el teléfono el diálogo de autorización del ordenador.
4. Comprobar con `adb devices` que aparece en la lista.
5. El dispositivo ya se puede seleccionar como destino de ejecución en Android Studio.

<NextPageButton to="/tema-1/e-actividades">
Actividades del tema 1
</NextPageButton>
