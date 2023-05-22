const burgerMenu = document.querySelector('.fa-bars')
const sideBar = document.querySelector('.side-bar-show')
burgerMenu.addEventListener('click', function(){
    sideBar.classList.toggle('hide')
    
})