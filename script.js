function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle("light");

  const img = document.querySelector("#avatar-img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "assets/assets/perfil-light.png");
    img.setAttribute("alt", "Foto de perfil - modo claro");
  } else {
    img.setAttribute("src", "assets/assets/perfil-dark.png");
    img.setAttribute("alt", "Foto de perfil - modo escuro");
  }
}
