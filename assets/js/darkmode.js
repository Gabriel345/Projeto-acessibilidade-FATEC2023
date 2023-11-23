let getButton = document.querySelector('#button-mode')
let getStyle = document.getElementById('style')

getButton.addEventListener('click', function() {
    if(getButton.value == "Auto contraste") {
        getButton.value = "Normal"
        getStyle.setAttribute('href', 'styles/dark_style.css')
    }else {
        getStyle.setAttribute('href', 'styles/light_style.css')
        getButton.value = "Auto contraste"
    }
})