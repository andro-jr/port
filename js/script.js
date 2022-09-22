const hamBtn = document.querySelector('.ham_container');
const hamBtnEl = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav');

hamBtn.addEventListener('click',function(){
    hamBtnEl.classList.toggle('ham_effect');
    navMenu.classList.toggle('open');

})