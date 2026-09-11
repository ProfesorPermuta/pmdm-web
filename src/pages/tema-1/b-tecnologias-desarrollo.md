import NextPageButton from '@site/src/components/NextPageButton';

# Tecnologías de desarrollo móvil

Aquí llegamos a una de las decisiones más importantes que harás como desarrollador: **cómo construir tu aplicación móvil**. No es una elección técnica sin consecuencias. El camino que escojas afecta a los lenguajes que usarás, las herramientas que dominará tu equipo, el rendimiento que tu usuario verá, y cuánto dinero costará mantener la aplicación en cinco años. Por eso conviene saber justificar la decisión.

Aunque es una decision temprana, debe ser considerada de forma concienzuda. Cambiar de tecnología a medio camino puede parecer algo rápido, pero nada más lejos de la realidad. Es un proceso costoso y complejo que puede durar meses o años de trabajo e incurrir en un alto coste.

Si bien es cierto que algunas de las complejidades a día de hoy se han reducido gracias a la IA (No es tan loco pedirle a una IA migra esta aplicación al framework X), esto trae consigo una batería de nuevos problemas:
- El código no ha sido escrito por el equipo, por lo que mantenerlo o aumentarlo en un futuro será más complejo
- Si la aplicacion es mediana o grande necesitariamos mucho tiempo para probar todas las funcionalidades y pueden, fácilmente, excaparsenos bugs. Si la app gestiona procesos críticos los tiempos de testing aumentan mucho y en caso de fallo en producción nuestro tiempo de respuesta se verá gravemente afectado.
- La facilidad de migrar puede llevar a equipos a sobreestimar su confianza en un lenguaje que inicialmente no controlan mucho, recallendo en los problemas de los puntos anteriores

Por ello, aunque la IA sea una buena herramienta si no nos queda más remedio que migrar, debemos fijarnos en que tipo de aplicación queremos y entender los motivos, ya sea para crear algo nuevo o para migrar algo pre-existente.

---

## Las tres familias

### 1. Desarrollo nativo: el control total

Programar de forma **nativa** significa usar las herramientas oficiales de cada plataforma, en el lenguaje que esa plataforma eligió para ti.

- **Android:** Kotlin (la recomendación oficial de Google desde 2019) o Java, dentro de Android Studio.
- **iOS:** Swift (o Objective-C, que no deberías tocar), dentro de Xcode—que solo corre en macOS.

Con el desarrollo nativo ganamos **Acceso sin intermediarios.** Tu código habla directamente con el sistema operativo. Eso significa:

- Máximo rendimiento, porque no hay capas ni traducciones que ralenticen.
- Acceso a **todas** las APIs y sensores el día que salen. Si Apple o Google añaden algo nuevo hoy, tú lo tienes hoy.

Como toda decisión tambien tiene inconvenietes el **Tiempo, dinero y cabeza.** Si necesitas Android e iOS, tienes dos proyectos completamente distintos. Eso es: dos lenguajes, dos equipos (o una persona haciendo dos trabajos), dos juegos de bugs que mantener. Documentación diferente, herramientas diferentes, patrones de diseño diferentes. Un mismo botón se ve distinto en iOS y en Android, y la forma de programarlo también.

### 2. Desarrollo multiplataforma: el compromiso

La idea es seductora: **escribir una sola vez, ejecutar en muchos sitios.** La realidad es que cada framework lo intenta de una forma distinta, y cada enfoque tiene sus propias grietas.

| Tecnología | Lenguaje | La estrategia |
|-----------|----------|---------------|
| **Flutter** | Dart | Dibuja todo desde cero con el motor Skia; la app lleva su propio motor gráfico |
| **React Native** | JavaScript / TypeScript | Traduce tus componentes a controles nativos reales (un Button es un Button de Android auténtico) |
| **.NET MAUI** | C# | Abstracción: escribes una vez y MAUI traduce a cada plataforma |
| **Kotlin Multiplatform** | Kotlin | Compartes la lógica; cada plataforma mantiene su propia interfaz |

La ventaja de todo esto es que resulta la opción más **Economica.** Un código que funciona en Android e iOS es un 50-70% más barato de desarrollar y mantener. Un equipo web que sabe React puede ser productivo con React Native sin aprender dos SDKs nativos de cero. Eso es irresistible cuando los presupuestos son ajustados.

¿Cuál es el precio que pagas? Varios, en realidad:

- **Una capa intermedia.** Cuando llega una novedad del sistema operativo, el framework primero debe reconocerla, luego decidir cómo exponerla, luego implementarla. Mientras tanto, tú esperas. Esa brecha de tiempo puede ser de semanas o meses.
- **Hay grietas en la abstracción.** Casos donde la capa no cubre exactamente lo que necesitas, y tienes que escribir código nativo de todas formas (modules en React Native, paquetes nativos en Flutter).
- **El tamaño es mayor.** Una app "Hello world" en Flutter pesa el doble que en nativo, porque llevas el motor gráfico dentro del APK. Eso importa si tu usuario está en una zona con datos caros.
- **El rendimiento nunca es máximo.** Es bueno, muchas veces excelente, pero hay siempre una diferencia respecto a nativo, pequeña pero detectable en operaciones gráficas complejas.

A pesar de estos costes, multiplataforma es la opción correcta para muchos proyectos. Si cubrir dos plataformas es requisito y tu presupuesto es limitado, multiplataforma es la realidad del mercado hoy.

### 3. Aplicaciones web y híbridas: la puerta fácil

Aquí estamos casi llegando a tierra conocida: **programar en web y empaquetar para móvil**, ahorrándote aprender sobre sensores, ciclos de vida, permisos, y todas esas complejidades que hemos visto en el tema anterior.

- **PWA (Progressive Web App):** es simplemente una web bonita que el navegador permite instalar como app. Sin tienda, sin proceso de revisión, sin intermediarios. Tu app se actualiza cada vez que el usuario la abre, porque está conectada a tu servidor.
- **Híbridas (Cordova, Ionic, Capacitor):** tomas una web (React, Vue, Angular), la metes dentro de un contenedor nativo que expone algunas APIs del dispositivo (cámara, geolocalización, sensores, notificaciones), y la distribuyes por la tienda.

Esta parece una gran opción al permitirnos una **Reutilización inmediata.** e ioncluso compartir la version web con la movil. Si ya sabes React o Vue, simplemente usas React en el móvil. No tienes que aprender Kotlin ni Swift ni el ciclo de vida de Android. El despliegue es trivial: subes la web al servidor y todos tus usuarios la tienen actualizada mañana, sin esperar revisión de App Store.

¿Por qué no es magia? **Porque le faltan cosas fundamentales.** El rendimiento no se acerca a nativo, especialmente en operaciones gráficas complejas (juegos, edición de vídeo, aplicaciones que hagan cálculos intensivos). La "sensación" de la app no es la misma—se notan las pausas, la carga lenta de vistas, eso que hace que sientas que la app "no está construida para el móvil". Y el acceso al hardware es el más limitado: hay APIs del dispositivo que simplemente no puedes tocar desde la web, por razones de seguridad y arquitectura del navegador.

---

## Comparativa: qué elegir según qué necesitas

No es una pregunta de "¿cuál es mejor?", sino de "¿qué me importa más en este proyecto?".

| Criterio | Nativo | Multiplataforma | Web / Híbrido |
|----------|--------|-----------------|---------------|
| **Rendimiento** | Máximo | Alto | Medio-bajo |
| **Acceso al hardware** | Total (cualquier API) | Alto (a veces requiere plugin) | Limitado (API segura del navegador) |
| **Coste multiplataforma** | Alto (duplica trabajo) | Bajo (compartir código) | Muy bajo (reutilizar web) |
| **Novedades del SO** | Inmediatas | Con retraso (el framework debe adaptarse) | Con mucho retraso (o nunca) |
| **"Sensación" de sistema** | Perfecta (es nativa) | Buena (casi indistinguible) | Aproximada (se nota que es web) |
| **Curva de aprendizaje** | Empinada pero clara | Una sola curva | Reutilizas lo que sabes de web |

---

## Cómo se elige: preguntas que importan

No hay una opción "mejor": hay una opción **adecuada a unos requisitos específicos**. Estas preguntas son las que te deben guiar:

1. **¿Cuántas plataformas hay que cubrir?** Si solo Android, el argumento económico más fuerte a favor de multiplataforma desaparece. Entonces importan más el rendimiento y el acceso al hardware.

2. **¿Qué exigencia de rendimiento tiene?** Un juego 3D, una app de edición de vídeo, o un editor de fotos empujan claramente hacia nativo. Una app de gestión de tareas o de noticias no lo necesita.

3. **¿Cuánto hardware específico usa?** Sensores poco comunes, Bluetooth de bajo nivel, control de cámara avanzado, o acceso a APIs experimentales de Android favorecen lo nativo. Una app que solo necesita GPS y cámara básica puede funcionar en multiplataforma.

4. **¿Qué sabe hacer el equipo?** Un equipo web productivo con React puede ser más rápido con React Native que enviándolo a aprender Kotlin y el SDK de Android de cero. Tiempo de aprendizaje es tiempo que no estás entregando valor.

5. **¿Qué ciclo de vida tiene el producto?** Un prototipo a validar rápido en 4 semanas no tiene las mismas necesidades que una aplicación que mantendrás diez años. Para validación rápida, multiplataforma o web puede tener más sentido. Para un producto de largo plazo, quizá la decisión es distinta.

6. **¿Cuál es el presupuesto real?** Si tienes dinero para dos equipos, nativo en cada plataforma es la mejor experiencia de usuario. Si tienes un equipo, multiplataforma es la única opción razonable.

---

## Qué usaremos en el módulo y por qué

En este curso trabajaremos con **Android nativo y Kotlin**. La decisión no es porque sea siempre la respuesta correcta, sino porque es la **más educativa** para lo que queremos que aprendas:

- Permite cubrir **todos** los criterios de evaluación del módulo sin capas intermedias que oculten el funcionamiento real. Cuando trabajas con sensores, permisos, ciclo de vida y servicios, necesitas ver exactamente cómo funciona, no a través de un framework que te abstrae los detalles.

- Kotlin es el lenguaje recomendado oficialmente por Google desde 2019 para Android, y su sintaxis resulta cercana a Java, que ya conoces del módulo de Programación. Aprendes un lenguaje moderno en un contexto relevante.

- Las herramientas (Android Studio, Kotlin) son gratuitas y funcionan en Windows, macOS y Linux. A diferencia de iOS y Xcode, que exigen macOS.

- Entender bien una plataforma nativa hace mucho más fácil aprender después cualquier framework multiplataforma. Sabrás qué abstrae, qué oculta, y dónde está el límite real. Al revés no funciona: empezar en multiplataforma y luego intentar aprender nativo es confuso.

:::note
Importante: no es una recomendación universal
Elegir Android nativo para el curso no significa que sea la respuesta correcta a todo proyecto. Algunos proyectos reales exigen React Native. Otros tienen sentido como PWA. Otros necesitan máximo rendimiento nativo. **Saber argumentar tu elección** forma parte del criterio de evaluación 1b.
:::

<NextPageButton to="/tema-1/c-entorno-android-studio">
El entorno: Android Studio, SDK y Gradle
</NextPageButton>
