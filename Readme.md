# 🌟 Sitio del Barón Von Fluffington III  
### Entrega Final – Desarrollo Web (Coderhouse)

Versión avanzada y totalmente responsive del sitio oficial del **Barón Von Fluffington III**.  
El proyecto utiliza **SASS modular**, animaciones personalizadas y una integración coherente entre **Bootstrap**, **CSS Grid** y **Flexbox**.

---

## 📍 Demo publicada

👉 **GitHub Pages:**  
https://lucasraulcenturion.github.io/Desarrollo-Web-Lucas-Centurion/

👉 **Hosting Externo**  
https://www.baronvonfluffington.infinityfreeapp.com

---

## 🧩 Estructura, maquetado y organización

El proyecto está construido siguiendo buenas prácticas de **HTML5 semántico** y una estructura escalable en **SASS**.

### ✔️ HTML semántico

- Uso de etiquetas: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Navegación accesible y responsive.
- Imágenes con atributos `alt` descriptivos.
- Títulos jerarquizados, con `h1` oculto para SEO cuando corresponde.

### ✔️ Bootstrap 5 (uso estratégico)

- Navbar responsive (`.navbar-expand-md`) con botón hamburguesa + `collapse`.
- Cards de audio en **Playlist Imperial**.
- Grilla responsiva en **Pelusoteca Baby’s**.
- Sistema de columnas (`.container`, `.row`, `.col-*`).

### ✔️ CSS Grid

Aplicado para:

- **Pelusoteca Notables** → grilla flexible de tarjetas `2 × N` que pasa a **1 columna** en mobile.
- **Haters & Diamonds** → distribución simétrica en **dos columnas**.
- **Playlist Imperial** → layout que combina el **Himno** del Barón con otros audios.

### ✔️ Flexbox

Utilizado para:

- Alinear imágenes y textos dentro de cada tarjeta.
- Centrar contenido en **La Corte de los Corazones**.
- Distribuir elementos en la sección **Créditos**.
- Ordenar video + texto en **Playlist Imperial**.

### ✔️ Diseño responsive completo

Breakpoints personalizados definidos en SASS:

- `≤ 992px` (`lg`)
- `≤ 768px` (`md`)
- `≤ 480px` (`sm`)

Toda la interfaz se adapta: tipografías, paddings, alturas, ancho de tarjetas, navbar centrado en tablets, hero reacomodado en mobile, etc.

---

## 🎨 Estilo y diseño (SASS)

### ✔️ Estructura de SASS con partials

El CSS se organiza con **SASS** en archivos parciales para facilitar el mantenimiento y la escalabilidad:

    /base
      reset.scss
      fonts.scss
      base.scss

    /layout
      header.scss
      footer.scss

    /pages
      index.scss
      pelusoteca.scss
      lacorte.scss
      haters.scss
      cronicas.scss
      creditos.scss
      playlist.scss

    /utils
      variables.scss
      mixins.scss
      placeholders.scss

    style.scss   ← archivo principal que importa todos los partials

### 📌 Revisión de nesting
Por indicaciones recibidas en la corrección de la Preentrega 3, se revisó y optimizó el nesting en SASS para mejorar la legibilidad y el mantenimiento del código.

### ✔️ Variables SASS

- Colores (paleta púrpura + dorados).
- Breakpoints del sistema responsive.
- Border-radius y sombras globales.
- Gradiente dorado para estados activos del navbar.

### ✔️ Mixins

- `respond-to()` para media queries limpias, mejor legibilidad y mantenimiento.

### ✔️ Placeholders

- `%card-elevated` para tarjetas reutilizables.  
  Aplicado en:
  - **La Corte de los Corazones**
  - **Haters & Diamonds**
  - **Playlist Imperial** (card del Himno)

---

## 🚀 Optimización de imágenes y SEO

Para mejorar rendimiento y visibilidad en buscadores, el proyecto incorpora optimizaciones específicas en **assets** y en el **HTML**.

### 🖼️ Optimización de imágenes

- Conversión de imágenes principales a **WebP** para reducir peso y mejorar tiempos de carga.
- Organización por carpetas según sección para un mantenimiento más claro:
  - `assets/img/index/`
  - `assets/img/pelusoteca/`
  - `assets/img/corte/`
  - `assets/img/haters/`
  - `assets/img/cronicas/`
  - `assets/img/creditos/`
  - `assets/img/playlist/`
- Imágenes de previsualización social en:
  - `assets/img/og/`
- Ajustes de tamaño específicos para variantes responsive (ej. assets del index y recursos clave del layout).

### 🧠 Optimización del HTML para SEO

- Títulos únicos por página (`<title>`).
- `meta description` ajustadas a cada sección.
- `keywords` incluidas por requisito académico.
- Implementación de **Open Graph** para compartir en redes.
- `link rel="canonical"` por página.
- `meta robots` para indexación correcta.
- Uso de estructura semántica consistente y jerarquía de headings.
- Atributos `alt` descriptivos para imágenes relevantes del contenido.

---

## 💅 Animaciones implementadas

1. **Flip 3D en tarjetas de la Pelusoteca**
   - Aplicado sobre `.pelusa-card-inner`.
   - Efecto:
     - Rotación `rotateY(180deg)` al **hover**.
     - Caras front/back con `backface-visibility: hidden`.
     - Contenedor con `perspective: 1200px`.
   - Aplicado a tarjetas:
     - ✅ Pelusoteca **Notables**
     - ✅ Pelusoteca **Baby’s**

2. **RoyalGlow (animación personalizada)**
   - Efecto de “resplandor real” creado con `@keyframes royalGlow`.
   - Incluye:
     - Glow dorado pulsante.
     - Borde dinámico.
     - Sombra animada.
     - Pequeño “lift” al pasar el cursor.
   - Aplicado a tarjetas:
     - ✅ **La Corte de los Corazones**

3. **Flip del logo en la Navbar (Animate.css)**
   - Implementado con Animate.css usando las clases:
     - `animate__animated`
     - `animate__flip`
   - Aplicado al logo principal:
     - ✅ Header / Navbar.

4. **Rotación 3D del video DJ en Playlist**
   - En `.div_dj_vid:hover`:
     - `transform: rotateY(180deg);`
     - `transform-style: preserve-3d;`
     - `perspective: 1000px;`
   - Aplicado a:
     - ✅ **Playlist Imperial** → Mini video del Barón DJ.

5. **Overlays y gradientes del Hero (Inicio)**
   - Se agregan capas visuales en `.hero`:
     - `::before` → gradiente vertical.
     - `::after` → radial blend con `mix-blend-mode: multiply`.
   - Ajustes específicos para `≤ 480px` para mejorar legibilidad del texto sobre la imagen.
   - Aplicado a:
     - ✅ Página de **Inicio (Index)**.

6. **Monogramas animados en Playlist Imperial**
   - Animaciones decorativas del monograma para reforzar identidad visual de la sección.
   - Aplicado a:
     - ✅ **Playlist Imperial**.

---

## 🧭 Secciones del sitio

### 🟣 Inicio / El Salón del Barón

- Hero con imagen a pantalla completa.
- Texto encapsulado con fondo translúcido y blur en mobile.
- Estética inspirada en una marquesina real de show imperial.

### 📖 Crónicas del Fluff

- Caja central de lectura con bordes redondeados y sombras fuertes.
- Estilo de “libro antiguo” para acompañar las crónicas del Barón.

### 💗 La Corte de los Corazones

- Cards flexibles con imágenes protagonistas.
- Efecto **RoyalGlow** al hover para resaltar a los miembros de la Corte.

### 🧸 Pelusoteca

- **Baby’s** → grilla basada en Bootstrap (`.row` + `.col-*`), pensada para fichas delicadas.
- **Notables** → grilla con **CSS Grid** + tarjetas **3D flip** (front/back con animación).

### 💬 Haters & Diamonds

- Layout en **Grid 2 columnas**.
- Capturas estilo Instagram con contenedores elevados.
- Sección pensada para contrastar hate vs. brillo imperial.

### 🎶 Playlist Imperial

- Video circular animado del Barón DJ.
- Card destacada del **Himno "Stellar"**.
- 6 audios adicionales con sistema JS para evitar reproducciones simultáneas.
- Monogramas animados como detalles de identidad visual imperial.

### 🏅 Créditos

- Franja superior con gradiente.
- Sistema de imágenes con **hover swap** (imagen normal ↔ imagen alternativa de rol).
- Reconocimiento a herramientas y colaboradores del universo Fluffington.

---

## 📄 Autor

Desarrollado por:  
**Lucas Centurión** – Curso **Desarrollo Web** - Profesor **César Astorga**, Coderhouse 2025.
