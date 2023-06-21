function toggleMode() {
  /*variavel*/
  const html = document.documentElement

  /* if(html.classList.contains('light')){  
    html contem na lista de classes o light?
   if= Condição verdadeira ou falsa/ contem ou não contém.

   Se conter eu vou na lista de class dele e vou remove.
    html.classList.remove('light')

    Se não contém ele vai vim na classList e vai add light
  }else{
    html.classList.add('light')
  }
  Oque aconteceu aí em cima foi o class light foi removida por isso o modo dark e depois add a class para mudar para o modo light tudo isso ao aperta o botão com o elemento onclick toggle do html śo que existe maneira mais facil de fazer isso.
*/
  html.classList.toggle("light")

  //pegar a tag img no html
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode add a imagem light
    img.setAttribute("src", "assets/assets/avatar-light.png")
  } else {
    //se tiver sem o light mode, manter a foto normal
    img.setAttribute("src", "assets/assets/avatar.png")
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







