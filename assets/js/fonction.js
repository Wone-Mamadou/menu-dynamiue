
// var nav = document.querySelector('nav.header-left')
// var iconNav = document.querySelector('.header-top-left .header-icon')

// var listeFonctions= {
//     gestionNav: (event)=>{
//         nav.style.display = "block"
//     }
// }

// var setupListeners = () =>{
//     iconNav.onmouseover = listeFonctions.gestionNav
// }

var nav  = document.querySelector('nav.header-left')
var iconNav = document.querySelector('.header-top-left .header-icon')
var listes = document.querySelectorAll('.header-left ul li')

/******objet contenant les gestionnaires d' événement */
var listeFonctions = {
    ouvrirNav: (event)=>{
        nav.style.display = "block"
    },
    fermerNav: ()=>{
        nav.style.display = "none"
    }
}
/************** Fonction qui réalise les abonnements */
var setupListeners = () =>{
    iconNav.onmouseover = listeFonctions.ouvrirNav
    nav.addEventListener('mouseleave',listeFonctions.fermerNav)
    for (let index = 0; index < listes.length; index++) {
        const li = listes[index];
        li.onclick = listeFonctions.fermerNav
    }


}