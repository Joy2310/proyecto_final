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