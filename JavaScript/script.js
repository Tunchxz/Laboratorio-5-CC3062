const body = document.body;

body.style.margin = "0px";

const frame1 = document.createElement('div');

frame1.style.display = "flex";
frame1.style.flexDirection = "column";
frame1.style.height = "100dvh";
frame1.style.width = "100dvw";
frame1.style.backgroundColor = "red";

const frame2 = document.createElement('div');

frame2.style.display = "flex";
frame2.style.height = "15dvh";
frame2.style.width = "100dvw";
frame2.style.backgroundColor = "orange";

const frame3 = document.createElement('div');

frame3.style.display = "flex";
frame3.style.height = "85dvh";
frame3.style.width = "100dvw";
frame3.style.backgroundColor = "yellow";

const frame4 = document.createElement('div');

frame4.style.display = "flex";
frame4.style.height = "100%";
frame4.style.width = "30dvw";
frame4.style.backgroundColor = "green";

const frame5 = document.createElement('div');

frame5.style.display = "flex";
frame5.style.flexDirection = "column";
frame5.style.height = "100%";
frame5.style.width = "70dvw";
frame5.style.backgroundColor = "blue";

const frame6 = document.createElement('div');

frame6.style.display = "flex";
frame6.style.height = "10dvh";
frame6.style.width = "100%";
frame6.style.backgroundColor = "lime";

const frame7 = document.createElement('div');

frame7.style.display = "flex";
frame7.style.height = "75dvh";
frame7.style.width = "100%";
frame7.style.backgroundColor = "purple";

const frame8 = document.createElement('div');

frame8.style.display = "flex";
frame8.style.height = "15dvh";
frame8.style.width = "100%";
frame8.style.backgroundColor = "magenta";

body.appendChild(frame1);
frame1.appendChild(frame2);
frame1.appendChild(frame3);
frame3.appendChild(frame4);
frame3.appendChild(frame5);
frame5.appendChild(frame6);
frame5.appendChild(frame7);
frame5.appendChild(frame8);

// Función para ocultar frame4 si el ancho de la pantalla es menor a 800px
function handleResize() {
    if (window.innerWidth <= 500) {
        frame4.style.display = "none";
        frame5.style.width = "100%"; // Ajusta el ancho de frame5
    } else {
        frame4.style.display = "flex";
        frame5.style.width = "70dvw";
    }
}

// Detectar cambio de tamaño de pantalla
window.addEventListener('resize', handleResize);

// Ejecutar al cargar la página
handleResize();