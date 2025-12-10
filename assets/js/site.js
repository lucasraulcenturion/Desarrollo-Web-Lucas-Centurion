document.addEventListener("DOMContentLoaded", () => {

  /* ======================
       PLAYLIST IMPERIAL
       - Solo un audio sonando a la vez
       - Icono gira mientras reproduce
    ====================== */

  const audios = document.querySelectorAll("audio");

  const stopIconForAudio = (audio) => {
    const line = audio.closest(".audio-line");
    const icon = line ? line.querySelector(".audio-icon") : null;
    if (icon) icon.classList.remove("is-spinning");
  };

  const startIconForAudio = (audio) => {
    const line = audio.closest(".audio-line");
    const icon = line ? line.querySelector(".audio-icon") : null;
    if (icon) icon.classList.add("is-spinning");
  };

  audios.forEach((audio) => {

    audio.addEventListener("play", () => {
      // Pausar y resetear los otros audios
      audios.forEach((other) => {
        if (other !== audio) {
          other.pause();
          other.currentTime = 0;
          stopIconForAudio(other);
        }
      });

      // Activar giro del icono del audio actual
      startIconForAudio(audio);
    });

    // Frenar giro al pausar/terminar
    audio.addEventListener("pause", () => stopIconForAudio(audio));
    audio.addEventListener("ended", () => stopIconForAudio(audio));
  });


  /* ======================
       FILMSTRIP / ROLLO FOTOGRÁFICO
    ====================== */

  const track = document.querySelector(".filmstrip-track");

  if (!track) {
    // Esta página no tiene filmstrip y está perfecto
    // (no cortamos el resto del script)
    // console.log("Filmstrip: no se encontró .filmstrip-track en esta página.");
  } else {

    // Evitar duplicar dos veces si el script se ejecuta más de una vez
    if (track.dataset.cloned !== "true") {
      const items = Array.from(track.children);

      if (items.length === 0) {
        // console.log("Filmstrip: no hay elementos dentro de .filmstrip-track.");
      } else {
        // Duplicamos los ítems para crear bucle infinito
        items.forEach((item) => {
          const clone = item.cloneNode(true);
          clone.setAttribute("aria-hidden", "true");
          track.appendChild(clone);
        });

        track.dataset.cloned = "true";
      }
    }

    let position = 0;
    const speed = 1; // velocidad del desplazamiento

    function animate() {
      position -= speed;

      const width = track.scrollWidth / 2; // ancho del “bloque original”

      if (Math.abs(position) >= width) {
        position = 0;
      }

      track.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    }

    // console.log("Filmstrip inicializado ✅");
    animate();
  }

});
