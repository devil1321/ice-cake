const cards = document.querySelectorAll('.feature__card')
const features = document.querySelectorAll('.feature-2__feature')
const btnFeatureIce = document.querySelector('.btn.orange')
const btnFeatureCake = document.querySelector('.feature-2__features > .btn.cake')
const fadeCards = (time) =>{
    cards.forEach(card=>{    
        setTimeout(()=>{
            card.style.top = "0px"
            card.style.opacity = 1
        },time+=300)
    })
}     
const slideInLeft = (time) =>{
    features.forEach(feature=>{    
        setTimeout(()=>{
            feature.style.left = "0px"  
        },time+=300)
    })
    setTimeout(()=>{
        if(btnFeatureIce){
            btnFeatureIce.style.left = "0px"
        }
        if(btnFeatureCake){
            btnFeatureCake.style.left = "0px"
        }
    },2500)
}     
window.addEventListener('scroll',function(){
    // console.log(window.pageYOffset)
   
        // you're in PORTRAIT mode
        // console.log('portrait')    
        if (window.matchMedia("(orientation: portrait)").matches) {
        if(window.pageYOffset > 1484 && window.innerWidth > 1024){
            fadeCards(0)
        }           
        if(window.innerWidth <= 1024 && window.innerWidth >= 768 && window.pageYOffset > 680){
            fadeCards(0)
        }
        if(window.innerWidth <= 768 && window.innerWidth >= 540 && window.pageYOffset > 900){
            fadeCards(0)
        }
        if(window.innerWidth <= 540 && window.innerWidth >= 279 && window.pageYOffset > 700){
            fadeCards(0)
        }
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
        // you're in LANDSCAPE mode
        // console.log('landscape')    
        if(window.innerWidth <= 1366 && window.innerWidth >= 1024 && window.pageYOffset > 1150){
            fadeCards(0)
        }
        if(window.innerWidth <= 1024 && window.innerWidth >= 720 && window.pageYOffset > 1135){
            fadeCards(0)
        }
        if(window.innerWidth <= 720 && window.innerWidth >= 279 && window.pageYOffset > 1235){
            fadeCards(0)
        }
     }
       
     
    
})
window.addEventListener('scroll',function(){
    // console.log(window.pageYOffset)
   
           // you're in PORTRAIT mode
        //    console.log('portrait')    
        // console.log(window.pageYOffset)
        if (window.matchMedia("(orientation: portrait)").matches) {
        if(window.pageYOffset > 2074 && window.innerWidth > 1024 ){
            slideInLeft(0)
        }
        if(window.innerWidth <= 1024 && window.innerWidth > 768 && window.pageYOffset > 1100){
            slideInLeft(0)
        }
        if(window.innerWidth <= 768 && window.innerWidth > 540 && window.pageYOffset > 2371){
            slideInLeft(0)
        }
        if(window.innerWidth <= 540 && window.innerWidth > 279 && window.pageYOffset > 2400){
            slideInLeft(0)
        }
    }
    if (window.matchMedia("(orientation: landscape)").matches) {
        // you're in LANDSCAPE mode
        // console.log('landscape') 
        console.log(window.pageYOffset)   
        if(window.innerWidth <= 1366 && window.innerWidth >= 1024 && window.pageYOffset > 2004){
            slideInLeft(0)
        }
        if(window.innerWidth <= 1024 && window.innerWidth >= 813 && window.pageYOffset > 1742){
            slideInLeft(0)      
         
        }
        if(window.innerWidth <= 812 && window.innerHeight >= 540 && window.pageYOffset > 2831){
            slideInLeft(0)      
            console.log('fired')
        }
        if(window.innerWidth <= 720 && window.innerWidth >= 279 && window.pageYOffset > 3034){
            slideInLeft(0)
        }
     }
})

