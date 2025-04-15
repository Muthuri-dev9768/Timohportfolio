const ham = document.querySelector(".header .nav-bar .nav-list .ham");
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const menu_item = document.querySelectorAll(".header .nav-bar .nav-list ul li a");


ham.addEventListener("click", () =>{
   
    ham.classList.toggle('active');
    mobile_menu.classList.toggle('active'); 
});

window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
   
    if(this.window.scrollY > 250) {
        header.style.backgroundColor = '#29323c';
    }
    else{
      header.style.backgroundColor = 'transparent';
    }
});

menu_item.forEach((item) =>{
  item.addEventListener('click', () =>{
    ham.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});


