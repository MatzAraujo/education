const menu = document.querySelector(".menu");
const menuToggle = document.querySelectorAll(".toggle");


for(const element of menuToggle){
    element.addEventListener('click', () =>{
        menu.classList.toggle('show')
    })
};
