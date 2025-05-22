// funciones para el scroll suave
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

// Animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(element => {
    observer.observe(element);
});

// Initialize all animations on load
window.addEventListener('load', function () {
    setTimeout(function () {
        document.querySelectorAll('.header-content *').forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }, 500);
});

// crea el menu desplegable
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});

// Validación del formulario
document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault(); // Previene el envío automático
  const nombreInput = document.getElementById("name");
  const correoInput = document.getElementById("email");
 const phoneInput = document.getElementById("phone");

  const nombre = nombreInput.value.trim();
  const correo = correoInput.value.trim();
  const phone = phoneInput.value.trim();

  const modal = document.getElementById("modalMensaje");
  const textoModal = document.getElementById("textoModal");
  const cerrarModal = document.getElementById("cerrarModal");

  let errores = [];

  // Validación de nombre
  if (nombre === "") {
    errores.push("El nombre es obligatorio.");
  }

  // Validación de correo electrónico con expresión regular
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
  if (!regexCorreo.test(correo)) {
    errores.push("El correo debe contener '@', un dominio y un punto seguido de letras.");
  }

  if (errores.length > 0) {
    textoModal.innerHTML = errores.join("<br>");
  } else {
    textoModal.textContent = "Formulario enviado correctamente.";
    // Aquí puedes hacer el envío real con fetch/AJAX si quieres
    // this.submit();
  }

  modal.style.display = "flex";

  // Función para cerrar modal y limpiar campos
  function cerrarYLimpia() {
    modal.style.display = "none";
    // Limpiar campos
    nombreInput.value = "";
    correoInput.value = "";
    phoneInput.value = "";
  }

  cerrarModal.onclick = cerrarYLimpia;

  window.onclick = function (event) {
    if (event.target == modal) {
      cerrarYLimpia();
    }
  };
});

