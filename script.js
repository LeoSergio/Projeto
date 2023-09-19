function toggleMode() {
  /*variavel*/
  const html = document.documentElement

  html.classList.toggle("light")

  //pegar a tag img no html
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode add a imagem light
    img.setAttribute("src", "assets/assets/perfil-light.png")
  } else {
    //se tiver sem o light mode, manter a foto normal
    img.setAttribute("src", "assets/assets/perfil-dark.png")
  }
  /*oque acontceu aí em cima? Mudança de imagem , quando tiver no light mode ser uma foto e quando tiver no dark mode outra foto
setAttribute=Modificar atributo ou personalizar*/

//mudar o text alt de cada imagem
const alt = document.documentElement

  if(html.classList.contains('light')) {
//se contem um alt no modo light detalhar o texto
alt.setAttribute('alt','Prof de oculos com o fundo escuro')
}else {
//se nao contem no modo light manter texto
alt.setAttribute('alt','Prof de oculos com o fundo amarelo')

}
}







