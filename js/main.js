const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector("#menu-items");
const navLinks = document.querySelectorAll(".nav-link")

menuIcon.addEventListener('click', function(e) {
    menuIcon.classList.toggle("show");
    navList.classList.toggle("active");

    navLinks.forEach((link, index) =>{
    	if(link.style.animation) {
    		link.style.animation = '';
    	}
    	else{
    		link.style.animation = `navAnimation 0.5s ease forwards ${ index/7 +0.5}s`;
    	}
    }) 
})