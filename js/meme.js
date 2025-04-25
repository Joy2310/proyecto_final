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

const galeria = document.querySelector(`.Galeria`)
const imgs = document.querySelectorAll(`.Img`)
const lightbox = document.querySelector(`.Lightbox`)
const lightboxbtn = document.querySelector(`.Lightbox-btn`)
const imgg = document.querySelector(`.Img-g`)
const peques = document.querySelectorAll(`.Peque`)
const lightboxs = document.querySelector(`.Lightboxs`)
const lightboxbtns = document.querySelector(`.Lightbox-btns`)
const grande = document.querySelector(`.Grande`)
const imges = document.querySelectorAll(`.Imge`)
const lightboxx = document.querySelector(`.Lightboxx`)
const lightboxxbtns = document.querySelector(`.Lightboxx-btn`)
const imggrand = document.querySelector(`.Img-grand`)
console.log( {mouse , headerlimodo , cambio , headernav , headermenutaco , headercerrar , header , wrappersection , buttona , pa , websul , infop , footerwebs , footerinfo , footer} )
console.log( {galeria , imgs , lightbox , lightboxbtn , imgg , peques , lightboxs , lightboxbtns , grande , imges , lightboxx , lightboxxbtns , imggrand})





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



// Cuando hago CLICK en cualquien .Img
 // Le ADD classList `isActive` de .Lightbox
   // A la .Img-g se le añade el src de .Img
imgs.forEach((_,i) =>{
    imgs[i].addEventListener(`click` , ()=>{

        lightbox.classList.add(`isActive`)
        imgg.src = imgs[i].src
    })
}) 

// Cuando hago CLICK en .Lightbox-btn
 // Le REMOVE claccList `isActive` de .Lightbox
lightboxbtn.addEventListener(`click` , ()=>{
    lightbox.classList.remove(`isActive`)
}) 



// Cuando hago CLICK en cualquien .Peque
 // Le ADD classList `isActive` de .Lightboxs
   // A la .Grande se le añade el src de .Peque
peques.forEach( (_,i) =>{
    peques[i].addEventListener(`click` , ()=>{

        lightboxs.classList.add(`isActive`)
        grande.src = peques[i].src
    })
})

// Cuando hago CLICK en .Lightbox-btns
 // Le REMOVE claccList `isActive` de .Lightboxs
 lightboxbtns.addEventListener(`click` , ()=>{
    lightboxs.classList.remove(`isActive`)
}) 



// Cuando hago CLICK en cualquien .Imges
 // Le ADD classList `isActive` de .Lightboxx
   // A la .Img-grand se le añade el src de .Img
   imges.forEach((_,i) =>{
    imges[i].addEventListener(`click` , ()=>{

        lightboxx.classList.add(`isActive`)
        imggrand.src = imges[i].src
    })
})    

// Cuando hago CLICK en .Lightboxx-btns
 // Le REMOVE claccList `isActive` de .Lightboxs
 lightboxxbtns.addEventListener(`click` , ()=>{
    lightboxx.classList.remove(`isActive`)
}) 