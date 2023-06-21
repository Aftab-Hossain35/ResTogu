let menu = document.querySelector("#menu-bar");
let nav = document.querySelector(".navbar");
let c = document.getElementById("close");

menu.addEventListener("click",(e) =>{
    nav.classList.toggle('c');
    nav.classList.toggle('active');
})

window.onscroll = () =>{
    nav.classList.remove('active');

    if(window.scrollY > 800)
    {
        document.querySelector("#scroll-top").classList.add('active');
    }
    else
    {
        document.querySelector("#scroll-top").classList.remove('active');
    }
}

function loader() {
    document.querySelector(".loader-container").classList.add('fade-out');
}
    
function fadeout() {
    setInterval(loader, 3000);
}

Window.onload = fadeout();