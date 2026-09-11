import NextPageButton from '@site/src/components/NextPageButton';

# El entorno: Android Studio, SDK y Gradle

Android Studio es el entorno de desarrollo oficial para Android. Está construido sobre IntelliJ IDEA, así que si ya se ha usado IntelliJ el terreno resulta familiar.

---

## Requisitos previos

| Recurso | Mínimo | Recomendado |
|---------|--------|-------------|
| RAM | 8 GB | 16 GB o más |
| Disco | 12 GB libres | 30 GB (SDK, emuladores y proyectos ocupan) |
| Procesador | x86_64 con virtualización | Virtualización **activada en la BIOS** |
| Sistema | Windows 10/11, macOS, Linux | — |

:::warning
Virtualización
El emulador de Android necesita virtualización por hardware. Si está desactivada en la BIOS/UEFI, el emulador no arranca o va inutilizablemente lento. En Windows suele aparecer como *Intel VT-x*, *AMD-V* o *SVM Mode*.
:::

---

## Instalación

1. Descargar Android Studio de [developer.android.com/studio](https://developer.android.com/studio).
2. Ejecutar el instalador y aceptar el asistente de configuración inicial (*Setup Wizard*).
3. Elegir instalación **Standard**: descarga el SDK, las herramientas de compilación y un emulador básico.
4. Aceptar las licencias del SDK. Sin esto, el proyecto no compila.
5. Esperar la descarga (varios GB según conexión).

---

## Las piezas del entorno

Conviene distinguirlas, porque cada una hace algo distinto y los errores tienen origen en una u otra.

### Android Studio

El IDE: editor, depurador, diseñador de interfaces, gestor de emuladores. Es solo la carcasa.

### Android SDK

El conjunto de bibliotecas, herramientas y APIs de la plataforma. Se gestiona desde **Settings → Languages & Frameworks → Android SDK**, con tres pestañas:

- **SDK Platforms** — las versiones de Android para las que se puede compilar (API 34, 35…).
- **SDK Tools** — herramientas auxiliares: *Platform-Tools* (contiene ADB), *Build-Tools*, *Emulator*.
- **SDK Update Sites** — repositorios de descarga.

### Gradle

El sistema de compilación. Descarga dependencias, compila el código, empaqueta el APK. Se configura mediante ficheros de texto en el proyecto — no con menús del IDE.

### ADB (Android Debug Bridge)

La herramienta de línea de comandos que comunica el ordenador con el dispositivo o emulador. Instala aplicaciones, lee logs, abre una shell en el dispositivo.

```bash
adb devices              # Lista dispositivos conectados
adb install app.apk      # Instala una aplicación
adb logcat               # Muestra el log del sistema
adb shell                # Abre una consola en el dispositivo
```

---

## Estructura de un proyecto

Al crear un proyecto nuevo (**New Project → Empty Activity**), la estructura relevante es:

```
MiProyecto/
├── app/
│   ├── build.gradle.kts          ← configuración del módulo
│   └── src/main/
│       ├── AndroidManifest.xml   ← declaración de la aplicación
│       ├── java/com/ejemplo/     ← código Kotlin
│       └── res/                  ← recursos
│           ├── drawable/         ← imágenes
│           ├── layout/           ← diseños de pantalla (XML)
│           ├── values/           ← textos, colores, estilos
│           └── mipmap/           ← iconos de la aplicación
├── build.gradle.kts              ← configuración del proyecto
├── settings.gradle.kts           ← módulos incluidos
└── gradle/libs.versions.toml     ← catálogo de versiones
```

Dos ideas importantes desde el principio:

- **El código y los recursos están separados.** Textos, colores e imágenes no se escriben dentro del código: van en `res/`. Esto permite traducir y adaptar la aplicación sin tocar la lógica.
- **El Manifest es la tarjeta de identidad de la aplicación.** Declara qué pantallas tiene, qué permisos necesita y por dónde se arranca. Lo veremos a fondo en el tema 2.

---

## El fichero `build.gradle.kts` del módulo

Es donde se configuran las versiones de Android que soporta la aplicación:

```kotlin
android {
    namespace = "com.ejemplo.miapp"
    compileSdk = 35            // API con la que se compila

    defaultConfig {
        applicationId = "com.ejemplo.miapp"
        minSdk = 24            // versión mínima soportada
        targetSdk = 35         // versión para la que está probada
        versionCode = 1
        versionName = "1.0"
    }
}

dependencies {
    // Bibliotecas externas que usa el proyecto
}
```

### `minSdk`, `targetSdk` y `compileSdk`

Los tres se confunden a menudo y significan cosas distintas:

| Propiedad | Qué significa |
|-----------|---------------|
| `compileSdk` | Versión de las APIs disponibles al escribir código. Siempre la más reciente estable. |
| `minSdk` | Versión mínima de Android en la que se puede instalar. Bajarla amplía el público pero obliga a comprobar compatibilidad. |
| `targetSdk` | Versión para la que la app declara estar preparada. Determina qué comportamientos nuevos del sistema se le aplican. |

:::tip
Elegir `minSdk`
Android Studio muestra, al crear el proyecto, el porcentaje de dispositivos cubierto por cada nivel de API. Un `minSdk` de 24 (Android 7.0) cubre prácticamente todo el parque actual sin arrastrar código de compatibilidad antiguo.
:::

---

## Fragmentación y compatibilidad

**Fragmentación** es la coexistencia de muchas versiones de Android y muchísimos modelos de dispositivo en el mercado a la vez. A diferencia de iOS, donde la mayoría de usuarios actualiza pronto, en Android conviven versiones separadas por años.

Esto significa que una API que existe en Android 13 puede no existir en Android 8. Cuando hay que usar algo reciente manteniendo un `minSdk` bajo, se comprueba en tiempo de ejecución:

```kotlin
if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
    // Código solo para Android 13 o superior
} else {
    // Alternativa para versiones anteriores
}
```

Las **bibliotecas AndroidX** (Jetpack) existen en buena medida para esto: ofrecen una API única que internamente resuelve las diferencias entre versiones.

<NextPageButton to="/tema-1/d-emuladores-y-perfiles">
Emuladores, perfiles y dispositivos
</NextPageButton>
