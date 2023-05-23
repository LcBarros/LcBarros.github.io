var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    navlist.classList.toggle("open")
})

setTimeout(() => { 
    const p1 = document.getElementById('p1');
    p1.style.visibility = 'visible';
}, 9000); // 👈️ delay in milliseconds

setTimeout(() => {
    const p2 = document.getElementById('p2');
    p2.style.visibility = 'visible';
}, 11000); // 👈️ delay in milliseconds

setTimeout(() => {
    const p3 = document.getElementById('p3');
    p3.style.visibility = 'visible';
}, 13000); // 👈️ delay in milliseconds

//ZOOM IMAGE
window.onload = () => {
    // (A) GET ALL IMAGES
    let all = document.getElementsByClassName("zoomE");

    // (B) CLICK TO GO FULLSCREEN
    if (all.length>0) { for (let i of all) {
    i.onclick = () => {
        // (B1) EXIT FULLSCREEN
        if (document.fullscreenElement != null || document.webkitFullscreenElement != null) {
        if (document.exitFullscreen) { document.exitFullscreen(); }
        else { document.webkitCancelFullScreen(); }
        }

        // (B2) ENTER FULLSCREEN
        else {
        if (i.requestFullscreen) { i.requestFullscreen(); }
        else { i.webkitRequestFullScreen(); }
        }
    };
    }}
};

