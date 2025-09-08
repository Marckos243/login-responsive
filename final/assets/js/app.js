document.addEventListener("DOMContentLoaded", () => {
  const btnIngresar = document.querySelector("#btn_toggle-ingresar");
  const btnRegistrarse = document.querySelector("#btn_toggle-registrarse");
  const toggleSection = document.querySelector(".login-form__toggle");
  const inputWrappers = document.querySelectorAll(".login-form__group-wrapper");
  const extraOptions = document.querySelectorAll(".login-form__extra-wrapper");
  const btnThemeToggle = document.querySelector(".theme-toggle__button");

  // ---------- Toggle login / registro ----------
  const toggleModo = (esRegistro) => {
    btnIngresar?.classList.toggle(
      "login-form__toggle__button-active",
      !esRegistro
    );
    btnRegistrarse?.classList.toggle(
      "login-form__toggle__button-active",
      esRegistro
    );

    toggleSection?.classList.toggle("login-form__toggle--right", esRegistro);

    inputWrappers.forEach((input) =>
      input.classList.toggle("show", esRegistro)
    );
    extraOptions.forEach((item) => item.classList.toggle("show"));
  };

  btnIngresar?.addEventListener("click", () => toggleModo(false));
  btnRegistrarse?.addEventListener("click", () => toggleModo(true));

  // ---------- Cambio de tema ----------
  const cambiarTema = () => {
    const root = document.documentElement;
    const newTheme =
      root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    cambiarIcono(newTheme);
  };

  const cambiarIcono = (tema) => {
    const icono = btnThemeToggle?.querySelector("i");
    if (!icono) return;
    const icons = { dark: "ri-sun-line", light: "ri-moon-line" };
    icono.className = icons[tema] || icons.light;
  };

  const inicializarTema = () => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
    cambiarIcono(savedTheme);
  };

  btnThemeToggle?.addEventListener("click", cambiarTema);

  // Inicializar tema al cargar
  inicializarTema();
});
