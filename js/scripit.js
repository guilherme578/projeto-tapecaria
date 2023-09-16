//Iteratividade

var icone_menu = document.getElementById('intmenu')
var menu = document.getElementById('menu')

function intMenu() {
    if (menu.style.display == 'block') {
        menu.style.setProperty('display', 'none')
    }
    else {
        menu.style.setProperty('display', 'block')
    }
}

icone_menu.addEventListener('click', intMenu)
