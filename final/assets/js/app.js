document.addEventListener("DOMContentLoaded", () => {
  const btnIngresar = document.querySelector("#btn_toggle-ingresar");
  const btnRegistrarse = document.querySelector("#btn_toggle-registrarse");
  const toggleSection = document.querySelector(".login-form__toggle");
  const inputWrappers = document.querySelectorAll(".login-form__group-wrapper");
  const extraOptions = document.querySelectorAll(".login-form__extra-wrapper");
  const btnThemeToggle = document.querySelector(".theme-toggle__button");

  //   inicializar tema
  inicializarTema();
  // funcion para activar el modo de ingresar
  function activarIngresar() {
    if (!btnIngresar.classList.contains("login-form__toggle__button-active")) {
      btnIngresar.classList.add("login-form__toggle__button-active");
      btnRegistrarse.classList.remove("login-form__toggle__button-active");
      toggleSection.classList.remove("login-form__toggle--right");
      inputWrappers.forEach((input) => {
        input.classList.remove("show");
      });
      extraOptions.forEach((item) => {
        item.classList.toggle("show");
      });
    }
  }

  //   funcion para activar el modo de registro
  function activarRegistrarse() {
    if (
      !btnRegistrarse.classList.contains("login-form__toggle__button-active")
    ) {
      btnRegistrarse.classList.add("login-form__toggle__button-active");
      btnIngresar.classList.remove("login-form__toggle__button-active");
      toggleSection.classList.add("login-form__toggle--right");
      inputWrappers.forEach((input) => {
        input.classList.add("show");
      });
      extraOptions.forEach((item) => {
        item.classList.toggle("show");
      });
    }
  }

  if (btnIngresar) btnIngresar.addEventListener("click", activarIngresar);
  if (btnRegistrarse)
    btnRegistrarse.addEventListener("click", activarRegistrarse);

  //   cambiar tema

  function cambiarTema() {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    root.setAttribute("data-theme", newTheme);

    localStorage.setItem("theme", newTheme);

    // cambiar el icono
    cambiarIcono(newTheme);
  }

  if (btnThemeToggle) btnThemeToggle.addEventListener("click", cambiarTema);

  //   cargar automaticamente el tema guardado
  function inicializarTema() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
      cambiarIcono(savedTheme);
    }
  }

  function cambiarIcono(tema) {
    const icono = btnThemeToggle.querySelector("i");
    if (icono) {
      icono.className = "";
      switch (tema) {
        case "dark":
          icono.classList.add("ri-sun-line");
          break;
        case "light":
          icono.classList.add("ri-moon-line");
          break;

        default:
          icono.classList.add("ri-moon-line");
          break;
      }
    }
  }
});
