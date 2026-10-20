# Enlaces de interés

Repositorios con ejemplos de código del tema 3. Cada proyecto se puede clonar y abrir en Android Studio para ver cómo se construye lo explicado en los apuntes.

---

## PMDM Primera Pantalla

<div style={{textAlign: 'center'}}>
  <img src="/img/tema_3_enlaces/pmdm_primera_pantalla.png" alt="Pantalla con una imagen de cabecera de montañas y tres tarjetas con título, descripción y botones Borrar y Ver más" style={{maxWidth: '260px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />
</div>

Primera pantalla construida con Jetpack Compose. Combina una **imagen de cabecera** con iconos superpuestos (favorito y compartir) y, debajo, una lista de **tarjetas** que se repiten, cada una con título, descripción y dos botones de acción ("Borrar" y "Ver más"). Es un buen punto de partida para ver cómo se combinan `Box`, `Column`, `Card`, `Image`, los botones y una lista de elementos repetidos.

**Repositorio:** [ProfesorPermuta/PMDM_Primera_Pantalla](https://github.com/ProfesorPermuta/PMDM_Primera_Pantalla)

---

## PMDM Plantilla Componentes

<div style={{textAlign: 'center'}}>
  <img src="/img/tema_3_enlaces/pmdm_plantilla_componentes.png" alt="Lista de componentes Material 3 (Button, OutlinedButton, TextButton, TextField, CheckBox, RadioButton, Switch, Image, Icon, CircularProgress) con una nota de uso junto a cada uno" style={{maxWidth: '260px', border: '1px solid var(--ifm-color-emphasis-300)', borderRadius: '8px'}} />
</div>

Catálogo visual de los componentes comunes de Material 3. Cada componente aparece en una lista junto a una breve nota sobre cuándo usarlo, de modo que se pueda copiar y adaptar su código en otros proyectos. Incluye `Button`, `OutlinedButton`, `TextButton`, `TextField`, `Checkbox`, `RadioButton`, `Switch`, `Image`, `Icon`, `CircularProgressIndicator` y `LinearProgressIndicator`, además del tema con modo claro y oscuro. Para añadir uno nuevo basta con agregar un `ComponentData(...)` a la lista de `ComponentList`.

**Repositorio:** [ProfesorPermuta/PMDM_Plantilla_Componentes](https://github.com/ProfesorPermuta/PMDM_Plantilla_Componentes)
