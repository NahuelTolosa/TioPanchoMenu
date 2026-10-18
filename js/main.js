document.getElementById('main').innerHTML = `
    <div id="main-container" class="main-container">
        <div id="main-container-image" class="main-container-image">
            <div>
                <div id="main-header" class="main-header">
                    <div id="red-wave" class="red-wave">
                        <img src="img/logo.png" alt="Logo Tío Pancho" class="logo">
                        <h1 id="header-title"></h1>
                        <p id="header-subtitle"></p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#c1121f" fill-opacity="1" d="M0,224L120,202.7C240,181,480,139,720,122.7C960,107,1200,117,1320,122.7L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg>
            </div>
            <div id="main-waves" class="main-waves">
                <div id="yellow-wave" class="yellow-wave">
                    <svg viewBox="0 0 1440 320" class="wave-svg">
                        <path fill="#FFB703" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,186.7C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
                <div id="blue-wave" class="blue-wave">
                    <svg viewBox="0 0 1440 320" class="wave-svg">
                        <path fill="#1D3557" d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,186.7C960,192,1056,160,1152,149.3C1248,139,1344,149,1392,154.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div id="blue-wave-gap" class="blue-wave-gap">
            <span id="main-menu" class="main-menu">Menu</span>
            <span id="main-menu-arrow" class="main-menu-arrow">>></span>
        </div>
    </div>
`

// Seleccionás el botón, la flecha o el contenedor que el usuario va a cliquear
const menuTrigger = document.querySelector('.main-menu-arrow'); // O 'btn-ver-menu' / 'main-header'

if (menuTrigger) {
    menuTrigger.addEventListener('click', () => {
        window.scrollTo({
            top: window.innerHeight, // Desplaza exactamente 100vh (el alto de la pantalla)
            behavior: 'smooth'       // Desplazamiento suave y animado
        });
    });
}

// let estadoPortada = 'INICIO';
// let isAnimating = false;
// let ultimoScrollY = window.scrollY;

// function manejarScrollPortada() {
//     // Si la animación ya está en curso, ignoramos los eventos
//     if (isAnimating) return;

//     const scrollActual = window.scrollY;
//     const altoPortada = window.innerHeight;

//     // 1. BAJAR DE LA PORTADA AL MENÚ
//     if (estadoPortada === 'INICIO' && scrollActual > 15) {
//         isAnimating = true;
//         estadoPortada = 'MENU';

//         window.scrollTo({
//             top: altoPortada,
//             behavior: 'smooth'
//         });

//         // Liberamos el bloqueo después de 600ms (duración aproximada del scroll)
//         setTimeout(() => {
//             isAnimating = false;
//             ultimoScrollY = window.scrollY;
//         }, 600);
//         return;
//     }

//     // 2. SUBIR DEL MENÚ A LA PORTADA
//     if (estadoPortada === 'MENU' && scrollActual < altoPortada && scrollActual < ultimoScrollY) {
//         isAnimating = true;
//         estadoPortada = 'INICIO';

//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });

//         setTimeout(() => {
//             isAnimating = false;
//             ultimoScrollY = 0;
//         }, 600);
//         return;
//     }

//     ultimoScrollY = scrollActual;
// }

// // Usamos passive: true para no ralentizar el rendimiento del celular
// window.addEventListener('scroll', manejarScrollPortada, { passive: true });