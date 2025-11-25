🌟 Sitio del Barón Von Fluffington III
Pre-entrega N.º 3 – Desarrollo Web (Coderhouse)

Versión avanzada y responsive del sitio oficial del Barón Von Fluffington III.
El proyecto implementa una arquitectura ordenada, estilos escalables con SASS, animaciones visuales y una integración coherente entre Bootstrap, Grid y Flexbox.

📍 Demo publicada
👉 GitHub Pages:
https://lucasraulcenturion.github.io/Desarrollo-Web-Lucas-Centurion/

🧩 Estructura, maquetado y organización
El proyecto está construido siguiendo buenas prácticas de HTML5 semántico y una estructura escalable en SASS:

✔️ HTML semántico
  -  header, nav, main, section, article, footer
  -  Navegación accesible y responsive
  -  Imágenes con alt descriptivos
  -  Títulos jerarquizados (h1 oculto para SEO cuando corresponde)

✔️ Bootstrap 5
Usado estratégicamente:
  -  Navbar responsive (navbar-expand-md)
  -  Cards de audio en Playlist
  -  Grilla responsiva en Pelusoteca Baby's
  -  Sistema de columnas (row, col)
  -  Botón hamburguesa + collapse accesible

✔️ CSS Grid
Aplicado para:
  -  Pelusoteca Notables → grilla flexible de tarjetas 2×N → 1 columna en mobile

Haters & Diamonds → distribución simétrica en dos columnas

Playlist → layout que combina el Himno + otros audios

✔️ Flexbox

Utilizado para:

Alinear imágenes y textos dentro de cada tarjeta

Centrar contenido en La Corte

Distribuir elementos en Créditos

Ordenar video + texto en Playlist

✔️ Diseño responsive completo

Breakpoints personalizados (SASS):

≤ 992 px (lg)

≤ 768 px (md)

≤ 480 px (sm)

Toda la UI se adapta: tipografías, paddings, alturas, ancho de tarjetas, navbar centrado en tablets, hero reacomodado en mobile, etc.

🎨 Estilo y diseño (SASS)

✔️ Migración completa a SASS con partials organizados:

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

style.scss  ← archivo principal que importa todos los módulos

✔️ Variables SASS

Colores (paleta púrpura + dorados)

Breakpoints del sistema responsive

Border-radius y sombras globales

Gradiente dorado del navbar

✔️ Mixins

respond-to() para media queries limpias
→ mayor legibilidad y mantenimiento

✔️ Placeholders

%card-elevated para tarjetas reutilizables
→ aplicado en: La Corte, Haters & Diamonds, Playlist (Himno)

💅 Animaciones implementadas
✔️ 1. Flip 3D en Pelusoteca (tarjetas Notables)

Aplicado sobre .pelusa-card-inner

Efecto:

Rotación rotateY(180deg) al hover

Front/back con backface-visibility: hidden;

Contenedor con perspective: 1200px;

Secciones:
✔ Pelusoteca Notables
✔ Pelusoteca Baby’s (si se reutilizan tarjetas)

✔️ 2. RoyalGlow (animación personalizada)

Efecto "resplandor real" creado con @keyframes royalGlow.

Incluye:

Glow dorado en pulsación

Escala suave

Border dinámico

Sombra animada

Aplicado a:
✔ .cards_corte_article → La Corte de los Corazones

✔️ 3. Flip del logo en la Navbar (Animate.css)

Aplicado con clases:

animate__animated animate__flip


Sección:
✔ Header / Navbar (logo principal)

✔️ 4. Rotación 3D del video DJ en Playlist

En .div_dj_vid:hover:

transform: rotateY(180deg);
transform-style: preserve-3d;
perspective: 1000px;


Sección:
✔ Playlist Imperial → Intro del DJ

✔️ 5. Overlays y gradientes animados del Hero

Se agregaron capas visuales:

::before → gradiente vertical

::after → radial blend con multiplicación

Ajustes especiales para 480px

Sección:
✔ Página de Inicio (Index)

🧭 Secciones del sitio
🟣 Inicio / El Salón del Barón

Hero con imagen completa

Texto encapsulado con blur en mobile

Diseño inspirado en marquesina real

📖 Crónicas del Fluff

Caja central con sombras fuertes

Estética de libro antiguo y relato épico

💗 La Corte de los Corazones

Cards flexibles con imágenes grandes

Efecto RoyalGlow al hover

🧸 Pelusoteca

Baby’s → grilla Bootstrap

Notables → grilla CSS Grid + tarjetas 3D flip

💬 Haters & Diamonds

Grid 2 columnas

Capturas estilo Instagram

🎶 Playlist Imperial

Video redondo animado

Card del Himno

6 audios con sistema anti-reproducción simultánea (JS externo)

🏅 Créditos

Gradiente superior

Sistema de imágenes con efecto hover swap

📄 Autor

Desarrollado por:
👉 Lucas Centurión – Curso Desarrollo Web, Coderhouse 2025
