function crearVideowall() {
    const num = parseInt(document.getElementById("numCams").value);
    const grid = document.getElementById("videowall");
  
    // Limpiar videowall
    grid.innerHTML = "";
  
    // Calcular columnas óptimas para un layout cuadrado
    const cols = Math.ceil(Math.sqrt(num));
    console.log("cols: " + cols);
    grid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  
    for (let i = 1; i <= num; i++) {
      const camDiv = document.createElement("div");
      camDiv.className = "camera";
  
      // Video ejemplo
      const video = document.createElement("video");
      video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
  
      // Etiqueta de cámara
      const label = document.createElement("div");
      label.className = "label";
      label.textContent = "Cam " + i;
  
      camDiv.appendChild(video);
      camDiv.appendChild(label);
      grid.appendChild(camDiv);
    }
  }
  
  // Inicializar videowall al cargar
  crearVideowall();