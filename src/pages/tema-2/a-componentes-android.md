import NextPageButton from '@site/src/components/NextPageButton';

# Componentes de una aplicación Android y el Manifest

En el tema 1 dejamos pendiente una pregunta: ¿de qué está hecha realmente una aplicación Android por dentro? No es un programa con un único punto de entrada como los que se escriben en el módulo de Programación. Una app Android es un **conjunto de piezas independientes** que el sistema operativo puede crear, destruir y combinar según lo necesite, no un `main()` que se ejecuta de arriba a abajo.

Entender esto desde el principio evita mucha confusión más adelante: en Android **no eres tú quien decide cuándo se ejecuta tu código**. Es el sistema quien llama a tus componentes cuando hace falta.

---

## Los cuatro componentes

Android define cuatro tipos de componentes. Cualquier aplicación está construida combinando algunos (no necesariamente todos) de estos cuatro bloques.

### Activity

Representa **una pantalla** con la que el usuario interactúa. Es, con diferencia, el componente que más se usa y con el que trabajaremos primero.

- Cada pantalla de la aplicación (login, listado, detalle, ajustes...) suele ser una `Activity`, aunque también es habitual que varias pantallas convivan dentro de una misma `Activity` mediante fragmentos o navegación.
- Tiene un **ciclo de vida** propio, gestionado por el sistema: se crea, se pausa, se reanuda, se destruye. Lo veremos en detalle en la siguiente página.

```kotlin
class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
    }
}
```

### Service

Ejecuta trabajo **en segundo plano**, sin interfaz de usuario propia. Sirve para operaciones que deben continuar aunque el usuario cambie de pantalla o incluso salga de la aplicación: reproducir música, sincronizar datos, descargar un fichero grande.

- Un `Service` **no** crea automáticamente un hilo nuevo: por defecto se ejecuta en el hilo principal, igual que una `Activity`. Si hace trabajo pesado, hay que moverlo explícitamente a otro hilo.
- Profundizaremos en tareas en segundo plano y servicios en una unidad posterior; de momento basta con saber que existen y para qué sirven.

### Broadcast Receiver

Escucha **anuncios del sistema o de otras aplicaciones** y reacciona a ellos: batería baja, cambio de conectividad, llegada de un SMS, que el dispositivo termine de arrancar.

```kotlin
class BateriaBajaReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        // Reaccionar al evento del sistema
    }
}
```

No tiene interfaz y normalmente hace un trabajo muy breve: recibe el aviso y delega (por ejemplo, arrancando un `Service` o mostrando una notificación).

### Content Provider

Gestiona el **acceso a datos compartidos** entre aplicaciones, a través de una interfaz uniforme parecida a una base de datos. Es el mecanismo que usa, por ejemplo, la aplicación de Contactos para dejar que otras apps consulten (con permiso) los contactos del usuario.

Es el componente menos usado de los cuatro en aplicaciones típicas; se retoma cuando se trabaja con almacenamiento compartido entre aplicaciones.

:::note
Por qué importa distinguirlos
Cada componente tiene un ciclo de vida y unas reglas distintas. Confundir un `Service` con una `Activity` lleva a errores típicos de principiante, como intentar actualizar una vista desde un componente que no tiene pantalla.
:::

---

## El `AndroidManifest.xml`: la tarjeta de identidad

Todo componente que una aplicación quiera usar debe **declararse** en el `AndroidManifest.xml`, en la raíz de `src/main/`. Si un componente no está en el Manifest, el sistema no sabe que existe y la aplicación falla al intentar usarlo.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/Theme.MiApp">

        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>

        <activity android:name=".DetalleActivity" />

        <service android:name=".SincronizacionService" />

        <receiver android:name=".BateriaBajaReceiver" />

    </application>

</manifest>
```

El Manifest responde a varias preguntas que el sistema necesita antes de instalar o ejecutar la aplicación:

| Pregunta | Dónde se responde |
|----------|--------------------|
| ¿Qué componentes tiene la app? | `<activity>`, `<service>`, `<receiver>`, `<provider>` |
| ¿Por dónde se arranca? | El `<intent-filter>` con `MAIN` y `LAUNCHER` en la actividad de entrada |
| ¿Qué permisos necesita? | `<uses-permission>` |
| ¿Qué versiones de Android soporta? | `minSdk`, `targetSdk` (normalmente en `build.gradle.kts`, referenciados aquí) |
| ¿Qué icono y nombre muestra? | `android:icon`, `android:label` |

### El `intent-filter` de arranque

```xml
<intent-filter>
    <action android:name="android.intent.action.MAIN" />
    <category android:name="android.intent.category.LAUNCHER" />
</intent-filter>
```

Esta combinación exacta es la que le dice al sistema: *"esta es la Activity que se abre cuando el usuario toca el icono de la app"*. Sin ella, la aplicación se instala pero no aparece en el launcher del dispositivo.

### `android:exported`

Indica si el componente puede ser invocado por **otras aplicaciones**. Desde Android 12, declararlo explícitamente es obligatorio para cualquier componente con un `intent-filter`. Por defecto conviene dejarlo en `false` salvo que exista una razón concreta para exponer el componente.

---

## Intents: cómo se comunican los componentes

Si los componentes son piezas independientes, hace falta un mecanismo para pasar de una a otra o para pedirle algo al sistema. Ese mecanismo es el **Intent**: un objeto que describe una intención de acción.

### Intent explícito

Indica **exactamente** qué componente se quiere lanzar. Es el caso típico de navegar de una pantalla a otra dentro de la misma aplicación.

```kotlin
val intent = Intent(this, DetalleActivity::class.java)
intent.putExtra("id_elemento", 42)
startActivity(intent)
```

### Intent implícito

Describe **una acción a realizar**, sin decir qué componente debe hacerla. Es el sistema quien busca, entre todas las aplicaciones instaladas, cuál puede resolverla.

```kotlin
val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://www.google.com"))
startActivity(intent)
```

Con un intent implícito como este, el sistema puede ofrecer varios navegadores instalados y dejar que el usuario elija, o abrir directamente el único disponible.

:::tip
Extras
Los datos que viajan con un Intent (`putExtra`) se llaman *extras*. Solo pueden ser tipos serializables: primitivos, `String`, `Parcelable`... No se puede pasar directamente, por ejemplo, un objeto arbitrario sin prepararlo antes.
:::

<NextPageButton to="/tema-2/b-recursos">
Recursos: layouts, drawables y strings
</NextPageButton>
