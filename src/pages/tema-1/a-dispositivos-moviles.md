import NextPageButton from '@site/src/components/NextPageButton';

# Dispositivos móviles: evolución, tipos y hardware

Un **dispositivo móvil** es un equipo informático de tamaño reducido, alimentado por batería, con conectividad inalámbrica y pensado para usarse en movimiento. Esa definición parece obvia, pero cada una de esas cuatro características impone una restricción real al software que vamos a escribir durante el curso.

---

## Evolución

| Etapa                  | Aproximadamente | Qué caracterizaba a los dispositivos                                                         |
| ---------------------- | --------------- | -------------------------------------------------------------------------------------------- |
| Telefonía móvil básica | 1990–2000       | Voz y SMS. Sin ejecución de aplicaciones de terceros.                                        |
| Feature phones         | 2000–2007       | Aplicaciones Java ME muy limitadas, pantallas pequeñas, sin multitarea real.                 |
| Smartphones            | 2007–2015       | Pantalla táctil capacitiva, tiendas de aplicaciones, sensores, conexión de datos permanente. |
| Ecosistema actual      | 2015–hoy        | Multinúcleo, aceleración gráfica, IA en el dispositivo, wearables, tablets, plegables.       |

### Telefonía móvil básica

Durante esta década nos encontramos con las siguientes características y progresos. 

<div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
  <div style={{ flex: 2 }}>
    Al comienzo de los dispositivos móviles eran de gran tamaño y poco portatiles. Una de las evoluciones más relevantes fue la redución de estos dispositivos para pasar de elementos que practicamente necesitaban una maleta propia para ser transportados a elementos que se podían transportar comodamente en un bolsillo sin dificultad.
  </div>
  <div style={{ flex: 1, minWidth: '300px' }}>
    ![Comparativa del tamaño de los teléfonos móviles a lo largo del tiempo](/img/phone_size_comparison.png)
    <p style={{ textAlign: 'center', fontSize: '0.9em', marginTop: '0.2rem' }}>
      <a href="/img/phone_size_comparison.png" download>Descargar imagen</a>
    </p>
  </div>
</div>

Las pantallas se mantuvieron mayoritariamente en tono monocromo, muy simples. Estas eran en blanco y negro o en un verde suave.

Finalmente las funciones de estos teléfonos eran muy reducidas, sobre todo si las comparamos con los dispositivos actuales. Tenemos funciones como llamar y mandar un sms y con el paso de la decada se añadieron funcionalidades como la calculadora, las alarmas o algún pequeño juego como el snake.

El terminal más relevante llegaría en el año 2000, el Nokia 3310. Un dispositivo duradero, autónomo que quedaría inmortalizado por ser el telefono indestructible.  

[Nokia 3310](https://www.youtube.com/shorts/ijemi59UCIo)


### Feature phones (2000-2007)

En esta época se sufrió una gran revolución en lo que era un móvil. Dejo de verse el móvil como una simple herramienta de comunicación y se comenzo a ver como una herramienta multimedia con capacidades para llamar y mandar sms.

Aún nos encontramos lejos de lo que son los teléfonos hoy en día, pero este cambio de perspectiva fue acompañado de cambios que marcarían donde estamos a día de hoy. 

Las pantallas pasaron de ser monocromas a ser a color. Este cambio, junto con la introdución de una cámara permitio que los usuarios de los terminales de esta generación pudiesen sacar fotos y grabar videos. 

Tambien se empezaron a añadir aplicaciones para la reprodución de archivos mp3 (audios y musica).

La memoria de los terminales tambien se vio forzada a avanzar, pues pasamos de tener memoria para un centenar de contactos (Números de teléfono) a vídeos, imágenes y música, archivos mucho más pesados. Esto llevo a la aparicion de las tarjetas de memoria externas y favoreció al progreso de la memoria ssd.

Como últimos terminales de esta generación yo pondría a las blackberry, las cuales tenian su propio teclado completo y gran pantalla, además de ofrecer un servicio de mensajería en red entre usuarios de blackberry (Pensad en un whats app primitivo) y el nokia 5200, un móvil muy vendido cuyo gancho de mercado era un reproductor mp3 de buena calidad, una pantalla estilo flip deslizate y de gran tamaño. 

<div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>

    <div style={{ flex: 1 }}>
        ![blackberry](/img/blackberry.png)
    </div>
    <div style={{ flex: 1, minWidth: '300px' }}>
        ![Nokia 5200](/img/nokia_5200.png)

    </div>

</div>

### Smartphones (2007-actualidad)

En 2007 el mundo de los terminales sufrío uno de los mayores cambios hasta el momento. Steve Jobs anunciaba al mundo un producto que revolucionaría nuestra sociedad y cambiaría para siempre el como los humanos interaccionariamos entre nosotros y con nuestro entorno. 

El IPhone suponía una revolución enorme contra los terminales que existían en el mercado de la época. Su pantalla ocupaba cerca del 100% de la superficie disponible. Esto lo podía hacer gracias a tener un teclado virtual y una pantalla táctil capacitiva. 

Además introdujo elementos como las tiendas de aplicaciones, sensores como gps, acelerómetros digitales etc. 

Este es el salto más relevante para nuestro modulo: la aparición de tiendas de aplicaciones convierte al dispositivo móvil en una **plataforma abierta a desarrolladores externos**. Antes, programar para un móvil era una excepción; después, un sector completo.

Además de los Iphone, que eran un sistema más cerrado, apareció android como una alternativa libre y escogida por las empresas que querían entrar en el mercado de los smart phone.

Aunque inicialmente existían una diferencia sustancial en rendimiento y funcionalidades entre IOS y Android las nuevas versiones se encuentran parejas. El carácter cerrado de IOS y la gran demanda de desarrolladores Android que solicita el mercado hace que este curso se centre en Android nativo empleando las últimas recomendaciones de Google.

---

## Tipos de dispositivos

No todo lo que programamos es un teléfono. La misma base de conocimiento cubre:

- **Smartphones** — el caso mayoritario y el que usaremos en el proyecto.
- **Tablets** — misma plataforma, pantalla mucho mayor; obliga a pensar diseños adaptables.
- **Wearables** (relojes, pulseras) — pantalla mínima, interacción de segundos, dependencia de un teléfono cercano.
- **Dispositivos plegables** — la pantalla cambia de tamaño *durante* la ejecución de la aplicación.
- **Sistemas embarcados** (televisores, automoción) — sin pantalla táctil, control por mando o voz.

:::note
Por qué importa
Los dispositivos son muy distintos entre ellos, lo que obliga a crear aplicaciones responsive. Además el acceso a otras funcionalidades esta marcado por la versión de APK. Este tema se tratará más adelante.
:::

---

## Hardware y sus limitaciones

Esta es la parte central de la unidad. Programar para móvil no es programar para escritorio con una pantalla más pequeña: es programar bajo restricciones que en un PC no existen.

### Pantalla

- Tamaño reducido y muy variable entre modelos.
- **Densidad de píxeles** distinta en cada dispositivo: el mismo diseño ocupa distinto espacio físico. La densidad de píxeles en una pantalla significa que dada una resolución, por ejemplo 1920 x 1080, en realidad el tamaño es el equivalente a una pantalla de 960x540 donde cada pixel en realidad son 2.
- Interacción táctil: el dedo es un puntero impreciso (~9 mm), no un ratón. Las propias funciones del apk ya tienen en cuenta gestos, medios click etc, pero es importante notar este elemento pues modificará el tamaño de botones, elementos interactuables, etc.
- Se usa al aire libre, con reflejos y brillo variable.

**Consecuencia de diseño:** nunca se posicionan elementos en píxeles absolutos, y los objetivos táctiles necesitan un tamaño mínimo (48 dp en Android).

### Procesador

- Arquitectura ARM, optimizada para consumo, no para potencia bruta.
- **Throttling térmico:** si el dispositivo se calienta, el sistema reduce la frecuencia del procesador. Un cálculo intensivo sostenido acaba siendo más lento, no más rápido.

**Consecuencia:** el trabajo pesado va fuera del hilo principal y, cuando es posible, se delega al servidor.

### Memoria

- RAM limitada y **compartida entre todas las aplicaciones abiertas**.
- El sistema operativo puede **matar tu aplicación en segundo plano** para liberar memoria, sin avisar.

**Consecuencia:** esta es la razón de ser del ciclo de vida que veremos en el tema 2. Una app móvil debe poder morir y resucitar sin que el usuario pierda datos.

### Batería

- Es el recurso más escaso. Todo consume: pantalla, CPU, GPS, wifi, bluetooth.
- El sistema penaliza a las aplicaciones que consumen en segundo plano (Doze, restricciones de background).

**Consecuencia:** no se hacen sondeos periódicos al servidor "por si acaso"; se usan notificaciones push y trabajo diferido.

### Almacenamiento

- Espacio limitado y compartido con fotos, vídeos y otras aplicaciones.
- El usuario puede quedarse sin espacio en cualquier momento.

### Conectividad

- Intermitente por definición: túneles, ascensores, cambio de Wi-Fi a datos móviles.
- Ancho de banda y latencia variables.
- Los datos móviles pueden tener coste para el usuario.

**Consecuencia:** la red **no** es fiable. Toda operación de red necesita gestión de error y, preferiblemente, caché local. Hablaremos sobre elementos de cache en la unidad 4.

### Sensores

A diferencia de un PC, un móvil sabe dónde está, cómo está orientado y qué le rodea: acelerómetro, giroscopio, magnetómetro, GPS, luz ambiental, proximidad, cámara, micrófono, NFC, huella dactilar.

Hablaremos de estos sensores en la unidad 6.
---

## Resumen: escritorio frente a móvil

| Aspecto         | Escritorio                      | Móvil                                |
| --------------- | ------------------------------- | ------------------------------------ |
| Energía         | Ilimitada (enchufe)             | Batería, recurso crítico             |
| Memoria         | Abundante                       | Limitada; el SO puede matar la app   |
| Conectividad    | Estable                         | Intermitente y con coste             |
| Pantalla        | Grande, fija                    | Pequeña, muy variable                |
| Entrada         | Teclado y ratón (precisos)      | Dedo (impreciso)                     |
| Ciclo de vida   | La app vive hasta que se cierra | El sistema la suspende y la destruye |
| Contexto de uso | Sentado, atención sostenida     | En movimiento, atención fragmentada  |

<NextPageButton to="/tema-1/b-tecnologias-desarrollo">
Tecnologías de desarrollo móvil
</NextPageButton>

