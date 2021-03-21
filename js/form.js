let inputFirst = document.querySelectorAll('.first')
let inputSecond = document.querySelectorAll('.second')

let time = 200
inputFirst.forEach(item => {
    setTimeout(()=>{
        item.style.left = '0px'
    },time+=200)
})      
inputSecond.forEach(item => {
    setTimeout(()=>{
        item.style.right = '0px'
    },time+=200)
})
