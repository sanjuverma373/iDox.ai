let redact = document.querySelector(".redact")
let extract = document.querySelector(".extract")
let detect = document.querySelector(".detect")
let compare = document.querySelector(".compare")

function openNav() {
    document.getElementById("navBar").classList.toggle("start-0");
    document.body.classList.toggle("overflow-hidden");
    document.querySelector(".menu").classList.toggle("cross")
    document.querySelector(".nav-bg").classList.toggle("backflt")
}

redact.addEventListener("click", function () {
    document.getElementById("navBar").classList.remove("start-0");
    document.body.classList.remove("overflow-hidden");
    document.querySelector(".menu").classList.remove("cross")
})
extract.addEventListener("click", function () {
    document.getElementById("navBar").classList.remove("start-0");
    document.body.classList.remove("overflow-hidden");
    document.querySelector(".menu").classList.remove("cross")
})
detect.addEventListener("click", function () {
    document.getElementById("navBar").classList.remove("start-0");
    document.body.classList.remove("overflow-hidden");
    document.querySelector(".menu").classList.remove("cross")


})
compare.addEventListener("click", function () {
    document.getElementById("navBar").classList.remove("start-0");
    document.body.classList.remove("overflow-hidden");
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
    document.body.classList.remove("overflow-hidden")

}, 2000);



let box = document.querySelectorAll(".box");
box.forEach((row) => {
  row.addEventListener("click", () => {
    const x = document.querySelector(".active");
    row.classList.toggle("active");
    x && x.classList.remove("active");

    if (!isOpen) {
      // Smoothly open the clicked item
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      // Close the clicked item
      content.style.maxHeight = null;
    }
  });
});



