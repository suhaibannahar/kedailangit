const bannerItems = document.querySelector('nav .list .items')

document.querySelector('nav .nav-bar .menu').onclick = () => {
    bannerItems.classList.toggle('active');
}

const menu = document.querySelector('nav .nav-bar .menu');

document.addEventListener('click', (e) => {
    if(!bannerItems.contains(e.target) && !menu.contains(e.target)){
        bannerItems.classList.remove('active');
    }

    if (!navBar.contains(e.target) && !burger.contains(e.target)) {
      navBar.classList.remove("active");
    }

});



const navBar = document.querySelector("nav .list");
const burger = document.querySelector("nav .nav-extra li:nth-child(2)");

burger.addEventListener('click', () => {
    navBar.classList.toggle('active');
    
})

