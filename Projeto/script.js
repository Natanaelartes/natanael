function togglemode() {
    const html = document.documentElement

    html.classList.toggle('light')

    //pegar a tag img
    const img = document.querySelector("#profile img")

    //subistituir a imagem
    if (html.classList.contains('light')){
    //se tiver no light mode, adicionar imagem light       
     img.setAttribute('src', './assets/avatar-light.png')
    } else {
       //se tiver sem light mode, manter a imagem normal
    img.setAttribute('src', './assets/avatar.png')
    }
    
   


   

   

   

   
}