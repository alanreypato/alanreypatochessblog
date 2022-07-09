const navToggle = document.querySelector(".boton_menu");
const navMenu = document.querySelector(".menu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("menu_visible");
    console.log("Que miras HDPT")
  
    if (navMenu.classList.contains("menu_visible")) {
      navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
      navToggle.setAttribute("aria-label", "Abrir menú");
    }
  });

  