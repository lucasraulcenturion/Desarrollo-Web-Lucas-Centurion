# 🌟 Sitio del Barón Von Fluffington III  
### Pre-entrega Nº 3 – Desarrollo Web (Coderhouse)

Versión avanzada y totalmente responsive del sitio oficial del **Barón Von Fluffington III**.  
El proyecto utiliza **SASS modular**, animaciones personalizadas y una integración coherente entre **Bootstrap**, **CSS Grid** y **Flexbox**.

---

## 📍 Demo publicada

👉 **GitHub Pages:**  
https://lucasraulcenturion.github.io/Desarrollo-Web-Lucas-Centurion/

---

## 🧩 Estructura, maquetado y organización

Proyecto construido con buenas prácticas de **HTML5 semántico** y una arquitectura escalable en SASS.

### ✔ HTML semántico

- Uso de `header`, `nav`, `main`, `section`, `article`, `footer`.  
- Navegación accesible y responsive.  
- Imágenes con `alt` descriptivos.  
- Títulos jerarquizados, con `h1` oculto para SEO cuando corresponde.  

### ✔ Bootstrap 5

Utilizado estratégicamente para:

- Navbar responsive (`navbar-expand-md`).  
- Cards de audio en **Playlist Imperial**.  
- Grilla responsiva en **Pelusoteca Baby’s**.  
- Sistema de columnas (`.row`, `.col-*`).  
- Botón hamburguesa + `collapse` accesible.

### ✔ CSS Grid

Aplicado para:

- **Pelusoteca Notables** → grilla flexible de tarjetas 2×N (1 columna en mobile).  
- **Haters & Diamonds** → distribución simétrica en dos columnas.  
- **Playlist Imperial** → layout que combina Himno + otros audios.

### ✔ Flexbox

Usado para:

- Alinear imágenes y textos dentro de cada tarjeta.  
- Centrar contenido en **La Corte de los Corazones**.  
- Organizar bloques en **Créditos**.  
- Ordenar video + texto en **Playlist Imperial**.

### ✔ Diseño responsive completo

Breakpoints personalizados (SASS):

- `≤ 992px` (`lg`)  
- `≤ 768px` (`md`)  
- `≤ 480px` (`sm`)  

La UI ajusta tipografías, paddings, alturas, anchos máximos, navbar centrado en tablets y hero reacomodado en mobile.

---

## 🎨 Estilo y diseño (SASS)

### ✔ Arquitectura SASS

El CSS se organiza en **partials** SASS para facilitar el mantenimiento y la escalabilidad:

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

    style.scss    ← archivo principal que importa todos los partials

### ✔ Variables SASS

- Paleta de colores (púrpuras, dorados y neutros).  
- Breakpoints del sistema responsive.  
- Border-radius y sombras globales.  
- Gradiente dorado para el estado activo del navbar.

### ✔ Mixins

- `respond-to()` para generar **media queries limpias**, mejorar la legibilidad y unificar puntos de corte.

### ✔ Placeholders

- `%card-elevated` para tarjetas reutilizables.  
  - Aplicado en: **La Corte**, **Haters & Diamonds** y **Playlist Imperial** (card del Himno).

---

## 💅 Animaciones implementadas

1. **Flip 3D en Pelusoteca**  
   - Aplicado sobre `.pelusa-card-inner`.  
   - Efecto: `rotateY(180deg)` al hover, con `backface-visibility: hidden`.  
   - Contenedor con `perspective: 1200px`.  
   - Tarjetas afectadas: **Pelusoteca Notables** y **Pelusoteca Baby’s**.

2. **RoyalGlow (animación personalizada)**  
   - Definida con `@keyframes royalGlow`.  
   - Incluye glow dorado pulsante, borde dinámico, sombra animada y pequeño “lift” al pasar el cursor.  
   - Aplicada a las tarjetas de **La Corte de los Corazones**.

3. **Flip del logo en la Navbar (Animate.css)**  
   - Uso de las clases `animate__animated` y `animate__flip`.  
   - Aplicado al **logo principal** en el header / navbar.

4. **Rotación 3D del video DJ en Playlist**  
   - En `.div_dj_vid:hover`:  
     - `transform: rotateY(180deg);`  
     - `transform-style: preserve-3d;`  
     - `perspective: 1000px;`  
   - Aplicado al mini video del **Barón DJ** en **Playlist Imperial**.

5. **Overlays y gradientes del Hero (Index)**  
   - Capas visuales en `::before` (gradiente vertical) y `::after` (radial blend con `mix-blend-mode: multiply`).  
   - Ajustes especiales para `≤ 480px` con blur de fondo y recuadro de texto encapsulado.  
   - Aplicado a la **página de Inicio (Index)**.

---

## 🧭 Secciones del sitio

- 🟣 **Inicio / El Salón del Barón**  
  - Hero a pantalla completa.  
  - Texto principal encapsulado con blur en mobile.  
  - Estética de marquesina real.

- 📖 **Crónicas del Fluff**  
  - Caja central con sombras fuertes.  
  - Estilo de libro antiguo y relato épico.

- 💗 **La Corte de los Corazones**  
  - Cards flexibles con imágenes grandes.  
  - Efecto **RoyalGlow** al hover.

- 🧸 **Pelusoteca**  
  - **Baby’s** → grilla con Bootstrap.  
  - **Notables** → grilla con CSS Grid + tarjetas con flip 3D.

- 💬 **Haters & Diamonds**  
  - Layout en 2 columnas.  
  - Capturas estilo Instagram con contexto narrativo.

- 🎶 **Playlist Imperial**  
  - Video circular animado del Barón DJ.  
  - Card destacada del Himno oficial.  
  - 6 audios con sistema JS para evitar reproducciones simultáneas.

- 🏅 **Créditos**  
  - Encabezado con gradiente superior.  
  - Sistema de imágenes con efecto **hover swap** (normal / hover).

---

## 📄 Autor

Desarrollado por: **Lucas Centurión**  
Curso **Desarrollo Web – Coderhouse 2025**
