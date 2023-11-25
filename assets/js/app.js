let redact = document.querySelector(".redact")
let extract = document.querySelector(".extract")
let detect = document.querySelector(".detect")
let compare = document.querySelector(".compare")

function openNav() {
    document.getElementById("navBar").classList.toggle("start-0");
    document.body.classList.toggle("overflow-hidden");
    document.querySelector(".menu").classList.toggle("cross")
}

redact.addEventListener("click",function(){
    document.getElementById("navbar").classList.remove("start-0");
    document.body.classList.remove("overflow_hidden");
    document.querySelector(".menu").classList.remove("cross")
})
extract.addEventListener("click",function(){
    document.getElementById("navbar").classList.remove("start-0");
    document.body.classList.remove("overflow_hidden");
    document.querySelector(".menu").classList.remove("cross")
})
detect.addEventListener("click",function(){
    document.getElementById("navbar").classList.remove("start-0");
    document.body.classList.remove("overflow_hidden");
    document.querySelector(".menu").classList.remove("cross")
})
compare.addEventListener("click",function(){
    document.getElementById("navbar").classList.remove("start-0");
    document.body.classList.remove("overflow_hidden");
    document.querySelector(".menu").classList.remove("cross")
})

let backToTop = document.getElementById('backtotop')
backToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

const preloader = document.getElementById("preloader");
setTimeout(() => {
    document.getElementById("preloader").classList.add("d_none")
    document.body.classList.remove("flow-hidden")

}, 2000);








