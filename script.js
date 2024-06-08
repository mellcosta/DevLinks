function toggleMode(){
    const html = document.documentElement
    html.classList.toggle('dark')

    /*
    Using Conditional for toggle

    if(html.classList.contains('light')){
        html.classList.remove('light')
    }
    else{
        html.classList.add('light')
    } */
}