function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('dark')

    const img = document.querySelector('#profile img')
    if(html.classList.contains('dark')){
        img.setAttribute("src", "./assets/avatar.png")
    }
    else{
        img.setAttribute("src", "./assets/avatar-light.png")
    }

    /*
    Using Conditional for toggle

    if(html.classList.contains('light')){
        html.classList.remove('light')
    }
    else{
        html.classList.add('light')
    } */
}