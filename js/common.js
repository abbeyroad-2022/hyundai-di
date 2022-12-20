//scroll effect
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop <= windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

reveal();

//window.addEventListener("mousemove", mouseEffect)
window.addEventListener("scroll", function () {
  reveal();
});

//header
let headerBtn = document.querySelector(".header-btn");
let header = document.querySelector(".header");
let headerWrap = document.querySelector(".header-wrap");
let subInner = document.querySelector(".sub-inner");
let subHeader = document.querySelector(".sub-header");
let compareInner = document.querySelector(".compare-inner");

let hbt = false;

headerBtn.addEventListener("click", function (e) {
  hbt = !hbt;
  if (hbt) {
    e.target.classList.add("on");
    headerWrap.style.width = "100px";
    header.style.width = "100px";
    header.classList.add("act");
    subInner.style.paddingLeft = "100px";
    subHeader.style.left = "100px";
    if (compareInner != undefined) {
      compareInner.style.paddingLeft = "100px";
    }
    checkSub();
  } else {
    e.target.classList.remove("on");
    headerWrap.style.width = "241px";
    header.style.width = "241px";
    header.classList.remove("act");
    subInner.style.paddingLeft = "241px";
    subHeader.style.left = "241px";
    if (compareInner != undefined) {
      compareInner.style.paddingLeft = "241px";
    }
    checkSub();
  }
});

function checkSub() {
  if (header.offsetWidth < 110) {
    console.log("header 닫힘")
    //html.style.minWidth = "1250px";
    //body.style.minWidth = "1250px";
  } else {
    console.log("header 열림")
    //html.style.minWidth = "1550px";
    //body.style.minWidth = "1550px";
  }
}
checkSub();

window.addEventListener("resize", function () {
  checkSub();
});
