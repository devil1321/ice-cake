// nav
const navBtn = document.querySelector('.nav__btn')
const navList = document.querySelector('.nav__list')
const navItemsOdd = document.querySelectorAll('.nav__item:nth-of-type(2n+1)')
const navItemsEven =document.querySelectorAll('.nav__item:nth-of-type(2n)')
const overlay = document.querySelector('.overlay')
const toggleMenu = () =>{
    if(!navBtn.classList.contains('open')){
        navBtn.classList.add('open')
        navList.style.height = '270px'
        navList.style.width = '270px'
        navList.style.padding = '10px'
        overlay.style.visibility = 'visible'
        overlay.style.opacity = 1
        setTimeout(()=>{
            navItemsOdd.forEach(odd=>{
                odd.style.left = '0px'
            })
            navItemsEven.forEach(even=>{
                even.style.left = '0px'
            })
        },100)
    }           
    else{
        navBtn.classList.remove('open')
        navList.style.height = '0px'
        navList.style.width = '0px'
        overlay.style.visibility = 'hidden'
        overlay.style.opacity = 0
        setTimeout(()=>{
            navList.style.padding = '0px'
        },500)
        setTimeout(()=>{
            navItemsOdd.forEach(odd=>{
                odd.style.left = '-500px'
            })
            navItemsEven.forEach(even=>{
                even.style.left = '500px'
            })
        },100)
    }
}
navBtn.addEventListener('click',toggleMenu)
const mediaQuery = () =>{
    if(window.innerWidth >= 1366){
        navList.style.height = '100%'
        navList.style.padding = '0px'
        overlay.style.visibility = 'hidden'
        overlay.style.opacity = 0
    }else{
        if(navBtn.classList.contains('open')){
            navList.style.height = '270px'
            navList.style.width = '270px'
            navList.style.padding = '10px'
            overlay.style.visibility = 'visible'
            overlay.style.opacity = 1
        } else{
            navList.style.height = '0px'
            navList.style.width = '0px'
            navList.style.padding = '0px'
            overlay.style.display = 'none'
            overlay.style.opacity = 0
        }
    }
}
window.addEventListener('resize',mediaQuery)
// nav end
