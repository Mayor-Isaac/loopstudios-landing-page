'use strict'
const showMenu = document.querySelector('.toggle')
const closeMenu =document.querySelector('.close--menu')
const navBar = document.querySelector('.top-container nav')
showMenu.addEventListener('click', function(){
    navBar.style.display = 'block'
    document.querySelector('.top-container nav ul').style.display = 'block'
    showMenu.style.display = 'none' 
    document.querySelector('.close--menu').classList.remove('d-none')
    document.querySelector('.top-container header').classList.add('overlay')
    document.querySelector('.raise').classList.add('push')
    closeMenu.classList.add('push')
})
closeMenu.addEventListener('click', function(){
    navBar.style.display = 'none'
    document.querySelector('.top-container nav ul').style.display = 'none'
    showMenu.style.display = 'block' 
    closeMenu.classList.add('d-none')
    document.querySelector('.top-container header').classList.remove('overlay')
    document.querySelector('.raise').classList.remove('push')
    closeMenu.classList.remove('push')
})