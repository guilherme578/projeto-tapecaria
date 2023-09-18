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

function resTam() {
    if (window.innerWidth >= 768) {
        menu.style.display='block'
    }
    else {
        menu.style.display='none'
    }
}

icone_menu.addEventListener('click', intMenu)
window.addEventListener('resize', resTam)