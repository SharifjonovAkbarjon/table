import { STUDENTS } from "./db/server.js"

const btnOpen = document.querySelector(".btn__open")
const register = document.querySelector(".register")
const overlay = document.querySelector(".overlay")
// const modelClose = document.querySelector(".model__close")



btnOpen.addEventListener("click", ()=>{
    register.style.display = 'flex'
})


overlay.addEventListener("click", ()=>{
    register.style.display = 'none'
})
// modelClose.addEventListener("click", ()=>{
//     register.style.display = 'none'
// })