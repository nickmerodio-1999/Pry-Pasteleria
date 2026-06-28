const navMenuToggle = document.querySelector(".nav-menu-toogle");
const navMenu = document.querySelector(".nav-menu");

//Detecta cuando se hace click en el boton hamburguesa
navMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
}
);