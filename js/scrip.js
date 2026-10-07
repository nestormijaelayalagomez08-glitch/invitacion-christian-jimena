/* ==========================================
   ELEMENTOS
========================================== */

const btnAbrir =
    document.getElementById("btnAbrir");

const sobre =
    document.getElementById("sobre");

const intro =
    document.getElementById("intro");

const invitacion =
    document.getElementById("invitacion");

const botonMusica =
    document.getElementById("botonMusica");

const musica =
    document.getElementById("musica");


/* ==========================================
   APERTURA PREMIUM
========================================== */

btnAbrir.addEventListener("click", () => {

    // Evitar múltiples clics
    btnAbrir.disabled = true;


    // 1. Abrir el sobre
    sobre.classList.add("abierto");


    // 2. Esperar a que la solapa se abra
    setTimeout(() => {

        intro.classList.add("ocultar");

    }, 900);


    // 3. Mostrar la invitación
    setTimeout(() => {

        invitacion.classList.add("mostrar");

        botonMusica.classList.add("visible");
        
        navPremium.classList.add("visible");

        window.scrollTo({

            top: 0,

            behavior: "instant"

        });


        iniciarMusica();

    }, 1100);

});


/* ==========================================
   MÚSICA
========================================== */

function iniciarMusica() {

    musica.play()
        .then(() => {

            botonMusica.textContent = "❚❚";

        })
        .catch(() => {

            botonMusica.textContent = "♫";

        });

}


botonMusica.addEventListener("click", () => {


    if (musica.paused) {

        musica.play();

        botonMusica.textContent = "❚❚";

    }

    else {

        musica.pause();

        botonMusica.textContent = "♫";

    }

});


/* ==========================================
   CUENTA REGRESIVA
========================================== */

/*
   Fecha:
   07 de noviembre de 2026
   Hora provisional: 17:00
*/

const fechaBoda =
    new Date("2026-11-07T17:00:00").getTime();


function actualizarContador() {


    const ahora =
        new Date().getTime();


    const diferencia =
        fechaBoda - ahora;


    if (diferencia <= 0) {

        document.getElementById("dias").textContent = "00";

        document.getElementById("horas").textContent = "00";

        document.getElementById("minutos").textContent = "00";

        document.getElementById("segundos").textContent = "00";

        return;

    }


    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (diferencia /
            (1000 * 60 * 60)) % 24
        );


    const minutos =
        Math.floor(
            (diferencia /
            (1000 * 60)) % 60
        );


    const segundos =
        Math.floor(
            (diferencia / 1000) % 60
        );


    document.getElementById("dias")
        .textContent =
        String(dias).padStart(2, "0");


    document.getElementById("horas")
        .textContent =
        String(horas).padStart(2, "0");


    document.getElementById("minutos")
        .textContent =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos")
        .textContent =
        String(segundos).padStart(2, "0");

}


actualizarContador();


setInterval(
    actualizarContador,
    1000
);

/* ==========================================
   ANIMACIONES AL HACER SCROLL
========================================== */

const elementosReveal =
    document.querySelectorAll(
        ".historia-premium, .galeria, .evento, .dress-code"
    );


elementosReveal.forEach((elemento) => {

    elemento.classList.add("reveal");

});


const observer =
    new IntersectionObserver(

        (entradas) => {

            entradas.forEach((entrada) => {

                if (entrada.isIntersecting) {

                    entrada.target.classList.add("visible");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


elementosReveal.forEach((elemento) => {

    observer.observe(elemento);

});

/* ==========================================
   MENÚ PREMIUM
========================================== */

const navPremium =
    document.getElementById("navPremium");

const menuToggle =
    document.getElementById("menuToggle");

const menuOverlay =
    document.getElementById("menuOverlay");

const menuLinks =
    document.querySelectorAll(".menu-link");


/* Abrir / cerrar menú */

menuToggle.addEventListener("click", () => {

    menuToggle.classList.toggle("activo");

    menuOverlay.classList.toggle("abierto");

});


/* Cerrar al seleccionar una sección */

menuLinks.forEach((link) => {

    link.addEventListener("click", () => {

        menuToggle.classList.remove("activo");

        menuOverlay.classList.remove("abierto");

    });

});

/* ==========================================
   CAMBIO DE NAVEGACIÓN AL HACER SCROLL
========================================== */

window.addEventListener("scroll", () => {

    const posicion =
        window.scrollY;

    if (posicion > window.innerHeight * 0.7) {

        navPremium.classList.add("nav-clara");

    } else {

        navPremium.classList.remove("nav-clara");

    }

});