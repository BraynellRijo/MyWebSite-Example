const textElement = document.getElementById("header");
const containerElement = document.getElementById("container");

containerElement.addEventListener("mousemove", (event) => {
  const containerColor = getComputedStyle(containerElement).backgroundColor;
  const textColor = getComputedStyle(textElement).color;

  const containerBrightness = getBrightness(containerColor);
  const textBrightness = getBrightness(textColor);

  if (containerBrightness < textBrightness) {
    textElement.style.color = "white"; // Cambiar a color claro si el fondo es más oscuro
  } else {
    textElement.style.color = "black"; // Cambiar a color oscuro si el fondo es más claro
  }
});

// Función para obtener el brillo de un color
function getBrightness(color) {
  // Convierte el color a RGB
  const rgb = color.match(/\d+/g);

  // Fórmula para calcular el brillo: (0.299 * R + 0.587 * G + 0.114 * B)
  return 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
}