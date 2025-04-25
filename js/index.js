"use strict"


// Cuando hago MOUSEMOVE en la window
 // Le STYLE tranlase (X , Y) de .Mouse
const header = document.querySelector(`.Header`)
const mouse = document.querySelector(`.Mouse`)
const headerlimodo = document.querySelector(`.Header-li--modo`)
const cambio = document.querySelector(`.Cambio`)
const headernav = document.querySelector(`.Header-nav`)
const headermenutaco = document.querySelector(`.Header-menu-taco`)
const headercerrar = document.querySelector(`.Header-cerrar`)
const wrappersection = document.querySelector(`.Wrapper-section`)
const buttona = document.querySelectorAll(`.Button-a`)
const pa = document.querySelectorAll(`.p-a`)
const websul = document.querySelectorAll(`.Webs-ul`)
const infop = document.querySelectorAll(`.Info-p`)
const footerwebs = document.querySelector(`.Footer-webs`)
const footerinfo = document.querySelector(`.Footer-info`)
const footer = document.querySelector('.Footer')
console.log( {mouse , headerlimodo , cambio , headernav , headermenutaco , headercerrar , header , wrappersection , buttona , pa , websul , infop , footerwebs , footerinfo , footer} )

// Cuando hago MOUSEMOVE en la window
  // Le TRANSLATE ( X , Y ) del mouse
window.addEventListener(`mousemove` , ( e )=>{

    console.log( e.clientY )
    mouse.style.translate = `${e.clientX}px ${e.clientY}px`
})

// Cuando hago MOUSEOVER en .Wrapper-section
 // Le ADD classList `isNose` de .Mouse
wrappersection.addEventListener(`mouseover` , ()=>{
    mouse.classList.add(`isNone`)
})
// Cuando hago MOUSEOUT en .Wrapper-section
 // Le REMOVE classList `isNose` de .Mouse
wrappersection.addEventListener(`mouseout` , ()=>{
    mouse.classList.remove(`isNone`)
})

// Cuando hago MOUSEOVER en .Footer
 // Le ADD classList `isNose` de .Mouse
footer.addEventListener(`mouseover` , ()=>{
    mouse.classList.add(`isNone`)
})
// Cuando hago MOUSEOUT en .Footer
 // Le REMOVE classList `isNose` de .Mouse
footer.addEventListener(`mouseout` , ()=>{
    mouse.classList.remove(`isNone`)
})

// // Cuando hago MOUSEOVER en .Footer-webs
//  // Le ADD classList `isNose` de .Mouse
// footerwebs.addEventListener(`mouseover` , ()=>{
//     mouse.classList.add(`isNone`)
// })
// // Cuando hago MOUSEOVER en .Footer-info
//  // Le ADD classList `isNose` de .Mouse
// footerinfo.addEventListener(`mouseover` , ()=>{
//     mouse.classList.add(`isNone`)
// })
// // Cuando hago MOUSEOUT en .Footer-webs
//  // Le REMOVE classList `isNose` de .Mouse
//  footerwebs.addEventListener(`mouseout` , ()=>{
//     mouse.classList.remove(`isNone`)
// })
// // Cuando hago MOUSEOUT en .Footer-info
//  // Le REMOVE classList `isNose` de .Mouse
//  footerinfo.addEventListener(`mouseout` , ()=>{
//     mouse.classList.remove(`isNone`)
// })



// Cuando hago CLICK en .Header-li--modo
 // Le TOGGLE classList `isActive` de .Header-ul .Header-li--modo
   // Cuando Le TOGGLE claccList `isActive` se activa .body 
headerlimodo.addEventListener(`click` , () =>{
    headerlimodo.classList.toggle(`isActive`)
    cambio.classList.toggle(`isActive`)
    headernav.classList.toggle(`isActive`)
})

// Cuando hago CLICK en .Header-menu-taco 
 // Le ADD classList .isVisible de .Header-nav
headermenutaco.addEventListener(`click` , ()=>{
    headernav.classList.add(`isVisible`)
})

// Cuando hago CLICK en .Header-cerrar
 // Le REMOVE classList .isVisible de .Header-nav
headercerrar.addEventListener(`click` , ()=>{
    headernav.classList.remove(`isVisible`)
}) 

// Cuando hago CLICK en cualquier .Button-a
 // Le REMOVE classList `isActove` de .p-a
   // Y Le ADD classList `isActive` de .p-a con su mismo index
buttona.forEach( (_,i) =>{
    buttona[i].addEventListener(`click` , ()=>{
        
        pa.forEach( (_,j) =>{
            pa[j].classList.remove(`isActive`)
        })

        pa[i].classList.add(`isActive`)
    })
})