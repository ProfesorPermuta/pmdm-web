import DownloadButton from '@site/src/components/DownloadButton';

# Plantilla: propuesta del Proyecto A

Esta es la plantilla de la actividad [A1.4](/tema-1/e-actividades). Sirve para dos cosas: **guiarte en las decisiones** que hay que tomar al diseñar una aplicación desde cero, y ser el documento que entregas.

Si es la primera vez que diseñas una app, es normal no saber por dónde empezar. Ve por orden: cada apartado se apoya en el anterior. Las cajas **«Cómo decidir esto»** explican qué se espera y cómo llegar a la respuesta; las de **«Ejemplo»** muestran cómo quedaría en una app inventada.

:::tip Antes de empezar
Léete la plantilla entera de un tirón antes de rellenar nada. Muchas decisiones del principio se entienden mejor cuando sabes qué te van a preguntar después.
:::

---

## 0 · Datos

| | |
|---|---|
| **Nombre de la app** | |
| **Autor/a** | |
| **Fecha** | |

El nombre puede cambiar más adelante. No te bloquees aquí.

---

## 1 · La idea en una frase

> **Escribe aquí una sola frase:** qué hace tu app y para quién.

:::note Cómo decidir esto
Si no consigues explicarla en una frase, casi siempre es señal de que la idea todavía está borrosa o de que son en realidad dos aplicaciones distintas.

Una fórmula que ayuda:

> *«Una app que permite a **[quién]** hacer **[qué]** para **[para qué]**.»*

Evita empezar por la tecnología («una app que usa el GPS y una base de datos»). La tecnología viene después: primero el problema.
:::

:::info Ejemplo
«Una app que permite a estudiantes de FP registrar las horas que dedican a cada módulo para detectar en qué asignaturas van justos de tiempo.»
:::

---

## 2 · El problema

> **¿Qué problema resuelve? ¿Cómo se resuelve hoy sin tu app?**

:::note Cómo decidir esto
Toda app que merece la pena sustituye a algo peor: una libreta, una hoja de cálculo, la memoria, un grupo de WhatsApp, o simplemente no hacer nada.

Si la respuesta a «¿cómo se hace ahora?» es «no se hace», pregúntate por qué. A veces es una oportunidad real; otras, señal de que nadie lo necesita.

**No hace falta que la idea sea original.** Una versión propia de algo que ya existe es perfectamente válida para este proyecto.
:::

---

## 3 · Personas usuarias

> **¿Quién la va a usar? Describe a una persona concreta.**

:::note Cómo decidir esto
«Todo el mundo» no es un público. Cuanto más concreto, más fácil resulta decidir después qué funcionalidades entran y cuáles no.

Piensa en **una persona real** y responde:

- ¿Qué edad tiene y qué soltura con la tecnología?
- ¿En qué momento del día abre la app? ¿Dónde está: en casa, en el bus, en el trabajo?
- ¿Cuánto tiempo le dedica cada vez: diez segundos o media hora?
- ¿Qué pasa si la app le falla? ¿Es una molestia o un problema serio?

Recuerda lo visto en [dispositivos móviles](/tema-1/a-dispositivos-moviles): quien usa un móvil suele estar haciendo otra cosa a la vez.
:::

:::info Ejemplo
«Marta, 19 años, estudia 2º de DAM. Usa el móvil constantemente y no le asustan las apps nuevas. Abriría la app al terminar cada sesión de estudio, unos segundos, muchas veces al día. Si falla no es grave, pero si pierde los datos acumulados de un mes, dejaría de usarla.»
:::

---

## 4 · Funcionalidades

> **Lista lo que la app sabrá hacer, en dos grupos.**

### Imprescindibles (sin esto la app no tiene sentido)

| # | Funcionalidad |
|---|---------------|
| F1 | |
| F2 | |
| F3 | |

### Opcionales (si sobra tiempo)

| # | Funcionalidad |
|---|---------------|
| O1 | |
| O2 | |

:::note Cómo decidir esto
Este es el apartado donde más gente se equivoca, y siempre en la misma dirección: **de más**.

Criterio para separar los dos grupos: si quitas una funcionalidad imprescindible, la app deja de resolver el problema del apartado 2. Si la quitas y la app sigue siendo útil, es opcional.

Apunta a **3 o 4 imprescindibles**. Tienes unas 30 horas de clase para toda la app, y el tiempo se va en detalles que ahora no ves: gestión de errores, pantallas vacías, permisos denegados, giro de pantalla.

Formula cada una desde quien la usa, no desde el código:

- Bien: «Registrar una sesión de estudio indicando módulo y duración.»
- Mal: «Método `insertarSesion()` en el DAO.»
:::

:::warning El error clásico
«Registro de usuarios, login, perfil, chat entre usuarios, notificaciones push, modo oscuro, exportar a PDF, panel de estadísticas…»

Eso es el plan de un equipo durante meses. Se evalúa la calidad de lo que entregas, no el tamaño del plan inicial: una app modesta y bien terminada puntúa más que una enorme a medias.
:::

---

## 5 · Pantallas

> **Enumera las pantallas y qué se hace en cada una.**

| Pantalla | Para qué sirve | Se llega desde |
|----------|----------------|----------------|
| | | (arranque) |
| | | |
| | | |

:::note Cómo decidir esto
Repasa tus funcionalidades imprescindibles: cada una necesita al menos una pantalla donde ocurra.

Un patrón que sirve para la mayoría de las apps de este curso:

1. **Lista** — muestra los elementos guardados. Suele ser la pantalla de inicio.
2. **Detalle** — un elemento concreto, al tocarlo en la lista.
3. **Formulario** — crear o editar un elemento.
4. **Ajustes** — preferencias de la persona usuaria.

Con 3–5 pantallas hay de sobra. La columna «se llega desde» importa: si una pantalla no es alcanzable desde ninguna otra, algo falta.
:::

---

## 6 · Bocetos

> **Dibuja las pantallas principales.**

:::note Cómo decidir esto
**A mano y fotografiado es perfectamente válido**, y de hecho es lo recomendable: dibujar rápido y feo invita a cambiar las cosas; una maqueta bonita da pena tirarla.

En cada boceto marca dónde va el título, los datos, los botones y qué ocurre al pulsarlos. Con dibujar la lista, el detalle y el formulario es suficiente.

Y ten presente lo de la [densidad de pantalla](/tema-1/d-emuladores-y-perfiles): no dibujes nada que dependa de un tamaño exacto de pantalla.
:::

---

## 7 · Qué datos guarda la app

> **¿Qué información maneja y cómo se relaciona entre sí?**

| Tipo de dato | Campos | Ejemplo |
|--------------|--------|---------|
| | | |
| | | |

:::note Cómo decidir esto
Aquí no hace falta saber nada de bases de datos todavía: eso llega en el tema 4. Ahora solo hay que identificar **de qué cosas guarda información** la app.

Un truco: subraya los sustantivos de tu descripción del apartado 1. Suelen ser los tipos de dato.

Para cada uno, apunta qué necesitas saber de él. Y pregúntate si unos se relacionan con otros («cada sesión pertenece a un módulo»).
:::

:::info Ejemplo
| Tipo de dato | Campos | Ejemplo |
|---|---|---|
| Módulo | nombre, color | «Programación», azul |
| Sesión | módulo, fecha, duración, nota | Programación, 12/09, 90 min, «bucles» |
:::

---

## 8 · Encaje con los requisitos del módulo

> **Este apartado es obligatorio.** La app debe dar pie a usar todo esto a lo largo del curso.

| Requisito | Dónde encaja en tu app | Tema |
|-----------|------------------------|------|
| **Persistencia de datos** — la información sobrevive al cerrar la app | | 4 |
| **Servicio web** — la app consulta datos por internet | | 5 |
| **Sensor o localización** | | 6 |
| **Contenido multimedia** — foto, audio, vídeo o animación | | 7 |

:::warning Este apartado decide si tu idea es viable
Si alguna casilla queda vacía, la idea **todavía no sirve** para el proyecto y habrá que ajustarla. Vale más descubrirlo ahora que en febrero.

Si una no te encaja, hay dos salidas:

1. **Estirar la idea** hasta que encaje de forma natural. Ojo: tiene que tener sentido para quien usa la app. Un sensor metido con calzador se nota.
2. **Cambiar de idea.** No pasa nada, estamos en la semana dos.

Ideas para desatascar las casillas difíciles:

- **Servicio web:** una API pública gratuita relacionada con tu tema (tiempo, mapas, libros, cine, deportes, datos abiertos). También sirve importar o compartir datos.
- **Sensor:** GPS para registrar dónde ocurrió algo; acelerómetro para detectar movimiento o agitar el móvil; cámara como lector de códigos QR.
- **Multimedia:** una foto asociada a cada elemento suele ser lo más fácil de justificar. Una animación al completar una acción también cuenta.
:::

---

## 9 · Riesgos

> **¿Qué parte te da más miedo? ¿Qué harás si se complica?**

| Lo que me preocupa | Plan B |
|--------------------|--------|
| | |

:::note Cómo decidir esto
Anticipar problemas no es pesimismo: es lo que permite reaccionar sin perder el curso.

Piensa en qué parte no tienes ni idea de cómo se hace, qué depende de algo externo (una API que puede caerse o pasar a ser de pago) y qué funcionalidad, si se complica, podrías recortar sin cargarte la app.

Un plan B razonable: «Si la API de X no funciona, uso datos de ejemplo guardados en la propia app.»
:::

---

## Antes de entregar

- [ ] La idea cabe en una frase.
- [ ] El público es una persona concreta, no «todo el mundo».
- [ ] Hay **3 o 4** funcionalidades imprescindibles, no diez.
- [ ] Cada funcionalidad imprescindible tiene su pantalla.
- [ ] Hay bocetos de las pantallas principales.
- [ ] **Las cuatro casillas del apartado 8 están rellenas.**
- [ ] Está identificado al menos un riesgo con su plan B.

:::tip
Entrega esto aunque no estés del todo convencido. La propuesta se comenta en clase y se ajusta: es un punto de partida, no un contrato cerrado. Lo que **no** puede pasar es empezar a programar sin haberla validado.
:::

---

## Descarga la plantilla

Descárgate la plantilla en Markdown, ábrela con cualquier editor de texto y rellena los apartados. Es el archivo que tienes que entregar.

<DownloadButton file="plantillas/plantilla-proyecto-a.md" filename="plantilla-proyecto-a.md">
  Descargar plantilla (.md)
</DownloadButton>
