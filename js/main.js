const linkIce = document.querySelector('.main__link.link-ice')
const linkCake = document.querySelector('.main__link.link-cake')
const imageIce = document.querySelector('.main__image.ice')
const imageCake = document.querySelector('.main__image.cake')
const overlayIce = document.querySelector('.main__overlay.ice')
const overlayCake = document.querySelector('.main__overlay.cake')
linkIce.addEventListener('mouseover',function(){
    imageIce.style.filter = 'blur(0px)'
    overlayIce.style.opacity = 0.7;
})

linkIce.addEventListener('mouseleave',function(){
    imageIce.style.filter = 'blur(5px)'
    overlayIce.style.opacity = 1;
    
})
linkCake.addEventListener('mouseover',function(){
    imageCake.style.filter = 'blur(0px)'
    overlayCake.style.opacity = 0.7;
})

linkCake.addEventListener('mouseleave',function(){
    imageCake.style.filter = 'blur(5px)'
    overlayCake.style.opacity = 1;
    
})