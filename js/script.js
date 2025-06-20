const form = document.getElementById("contact_form");
const status = document.getElementById("form-status");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
    method: "POST",
    body: data,
    })
    .then(response => response.text())
    .then(response => {
    if (response.trim() === "success") {
        status.innerHTML = "<div class='alert alert-success'>Tu mensaje ha sido enviado con éxito.</div>";
        form.reset();
    } else {
        status.innerHTML = "<div class='alert alert-danger'>Lo sentimos, hubo un error al enviar tu formulario.</div>";
    }
    })
    .catch(error => {
    status.innerHTML = "<div class='alert alert-danger'>Error de red. Intenta más tarde.</div>";
    });
});

const menuBtn = document.getElementById('de-menu-reveal');
const sideMenu = document.getElementById('side-menu');
const overlay = document.getElementById('menu-overlay');
menuBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Cierra el menú al hacer clic en un enlace
document.querySelectorAll('.side-menu a').forEach(link => {
    link.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
    });
});

const closeBtn = document.getElementById('close-menu');
closeBtn.addEventListener('click', () => {
    sideMenu.classList.remove('active');
    overlay.classList.remove('active');
});

window.addEventListener("scroll", function () {
    const header = document.querySelector("header.header-v2");
    if (window.scrollY > 50) {
    header.classList.add("scrolled");
    } else {
    header.classList.remove("scrolled");
    }
    
    // Mostrar el botón cuando el usuario hace scroll hacia abajo
    const btn = document.getElementById('btn-ir-arriba');
    if (window.scrollY > 200) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

// Scroll suave hacia arriba
document.getElementById('btn-ir-arriba').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
 // Inicializar tooltips en toda la página
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
tooltipTriggerList.forEach(el => new bootstrap.Tooltip(el));