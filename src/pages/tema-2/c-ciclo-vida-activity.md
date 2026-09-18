import NextPageButton from '@site/src/components/NextPageButton';

# Ciclo de vida de la Activity

En el tema 1 ya se apuntó la razón de fondo: la memoria de un dispositivo móvil es limitada y compartida entre todas las aplicaciones abiertas, y el sistema puede matar una aplicación en segundo plano sin avisar. El **ciclo de vida** es la respuesta de Android a ese problema: un conjunto de estados y de llamadas (*callbacks*) que permiten a la aplicación enterarse de lo que le está pasando y reaccionar a tiempo.

Esta es probablemente la idea más importante de todo el tema. Una `Activity` mal preparada para su ciclo de vida pierde datos del usuario en cuanto este gira la pantalla o cambia de aplicación un momento.

---

## Los tres estados

El currículo del módulo distingue tres grandes estados de una aplicación:

| Estado | Qué significa |
|--------|----------------|
| **Activo** (*resumed*) | La `Activity` está en primer plano y el usuario interactúa con ella. |
| **Pausado** (*paused* / *stopped*) | La `Activity` sigue viva pero no tiene el foco: puede estar parcialmente visible (un diálogo encima) o completamente oculta (el usuario cambió de app). |
| **Destruido** | La `Activity` ha dejado de existir. El sistema ha liberado sus recursos, ya sea porque el usuario cerró la pantalla o porque el sistema necesitaba memoria. |

Estos tres estados se traducen, en la práctica, en una secuencia más fina de **callbacks** que Android invoca sobre la `Activity`.

---

## Los callbacks del ciclo de vida

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        // Se ejecuta UNA vez: inicializar vistas, recuperar estado guardado
    }

    override fun onStart() {
        super.onStart()
        // La Activity se hace visible
    }

    override fun onResume() {
        super.onResume()
        // La Activity gana el foco: aquí empieza la interacción real
    }

    override fun onPause() {
        super.onPause()
        // Pierde el foco (puede seguir parcialmente visible). Guardar cambios ligeros aquí.
    }

    override fun onStop() {
        super.onStop()
        // Ya no es visible en absoluto
    }

    override fun onDestroy() {
        super.onDestroy()
        // Se libera definitivamente. Liberar recursos pesados aquí.
    }
}
```

### El flujo normal de arranque y cierre

```
onCreate() → onStart() → onResume()  →  [la app está en uso]  →  onPause() → onStop() → onDestroy()
```

### Qué pasa al cambiar de aplicación un momento

Si el usuario pulsa el botón de inicio y vuelve enseguida, **no** se pasa por `onCreate` ni `onDestroy`:

```
onPause() → onStop()  →  [usuario vuelve]  →  onStart() → onResume()
```

La `Activity` sigue viva en memoria, simplemente detenida. Por eso `onStop` y `onRestart`/`onStart` existen por separado de `onCreate`/`onDestroy`: son cosas distintas.

:::note
Por qué importa la diferencia
Inicializar algo costoso (una conexión, una carga de datos) en `onCreate` y liberarlo en `onDestroy` es correcto. Hacerlo en `onResume`/`onPause`, en cambio, significa repetir ese coste cada vez que el usuario vuelve a la app un instante, aunque la Activity nunca haya llegado a destruirse.
:::

---

## El caso que rompe apps de principiante: rotar la pantalla

Cuando el dispositivo cambia de orientación, Android considera que ha cambiado la **configuración** del dispositivo (recordemos los cualificadores `layout-land/` del tema anterior). Por defecto, ante un cambio de configuración, el sistema:

1. **Destruye** la `Activity` actual (`onPause → onStop → onDestroy`).
2. **La vuelve a crear** desde cero (`onCreate → onStart → onResume`), esta vez cargando el layout adecuado a la nueva orientación.

Esto significa que **cualquier variable en memoria se pierde** si no se ha hecho nada para evitarlo. Un formulario a medio rellenar, una lista con un elemento seleccionado... todo desaparece con un simple giro, si no se gestiona.

### Guardar y recuperar estado: `onSaveInstanceState`

```kotlin
override fun onSaveInstanceState(outState: Bundle) {
    super.onSaveInstanceState(outState)
    outState.putString("texto_usuario", campoTexto.text.toString())
    outState.putInt("posicion_seleccionada", posicionActual)
}

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    setContentView(R.layout.activity_main)

    if (savedInstanceState != null) {
        val texto = savedInstanceState.getString("texto_usuario")
        val posicion = savedInstanceState.getInt("posicion_seleccionada")
        // Restaurar el estado de la interfaz
    }
}
```

`onSaveInstanceState` se invoca **antes** de que la `Activity` se destruya por un cambio de configuración (o porque el sistema la mata por falta de memoria), y el `Bundle` que rellena ahí se recibe de vuelta como parámetro de `onCreate`. Es la herramienta pensada exactamente para este problema.

:::warning
Esto no es persistencia
`onSaveInstanceState` guarda estado **de interfaz**, de forma temporal y en memoria, para sobrevivir a un cambio de configuración o a que el sistema mate el proceso en segundo plano. No sustituye a guardar datos de verdad en una base de datos o en preferencias: eso se verá en la unidad de persistencia.
:::

---

## Diagrama de transición de estados

```
        ┌──────────┐
        │ onCreate │  (la Activity nace)
        └────┬─────┘
             ▼
        ┌──────────┐
   ┌───▶│ onStart  │◀────────────┐
   │    └────┬─────┘             │
   │         ▼                   │
   │    ┌──────────┐             │
   │    │ onResume │             │  onRestart
   │    └────┬─────┘             │
   │         ▼ (usuario en la app)
   │    ┌──────────┐             │
   │    │ onPause  │             │
   │    └────┬─────┘             │
   │         ▼                   │
   │    ┌──────────┐             │
   └────│ onStop   │─────────────┘
        └────┬─────┘
             ▼
        ┌───────────┐
        │ onDestroy │  (la Activity muere)
        └───────────┘
```

---

## Instrumentar el ciclo de vida para observarlo

Una forma sencilla de ver este flujo en la práctica es añadir trazas de log en cada callback:

```kotlin
private val TAG = "CicloVida"

override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    Log.d(TAG, "onCreate")
    setContentView(R.layout.activity_main)
}

override fun onStart() {
    super.onStart()
    Log.d(TAG, "onStart")
}

// ... el resto de callbacks, cada uno con su Log.d
```

Con **Logcat** abierto (filtrando por la etiqueta `CicloVida`), se puede observar en directo el orden exacto de llamadas al girar la pantalla, pulsar el botón de inicio, volver a la app o cerrarla. Es la mejor forma de convertir esta teoría en algo tangible.

<NextPageButton to="/tema-2/d-ciclo-vida-app-git">
Ciclo de vida de la app y control de versiones
</NextPageButton>
