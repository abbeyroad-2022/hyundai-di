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

let wjs = document.querySelectorAll(".wjs");

const changeWidth = (num) => {
  let list = document.querySelector(".main-list");
  let listUl = document.querySelector(".main-list ul");
  let item = document.querySelectorAll(".main-list .sh");
  let itemLong = document.querySelector(".main-list .long");
  let mainInfo = document.querySelector(".main-info");
  let w = 492;
  //let listWidth =
  listUl.getBoundingClientRect().right - listUl.getBoundingClientRect().left;
  //let listCount = Math.floor(listWidth / w);
  //let left = (listWidth - w * Math.floor(listWidth / w)) / (listCount - 1);
  //console.log(listCount);

  let wid = getWidth(mainInfo) + num;
  let ct = Math.floor(wid / 492);

  console.log(wid);
  console.log(ct);

  list.style.width = `${ct * 492}px`;

  wjs.forEach((i) => {
    i.style.width = `${ct * 492 - 32}px`;
  });

  if (ct == 2) {
    itemLong.style.width = `${460 * 2 + 32}px`;
  } else if (ct == 3) {
    itemLong.style.width = `${460 * 3 + 32}px`;
  } else if (ct > 3) {
    itemLong.style.width = `${w - 32}px`;
  }
};

function getWidth(element) {
  var computedStyle = getComputedStyle(element);

  elementWidth = element.clientWidth;

  elementWidth -=
    parseFloat(computedStyle.paddingLeft) +
    parseFloat(computedStyle.paddingRight);

  return elementWidth;
}

changeWidth(0);

window.addEventListener("resize", () => {
  changeWidth(0);
});

//header
let headerBtn = document.querySelector(".header-btn");
let header = document.querySelector(".header");
let headerWrap = document.querySelector(".header-wrap");
let mainSlide = document.querySelector(".main-slide");
let mainInfo = document.querySelector(".main-info");
let subInner = document.querySelector(".sub-inner");
let slideBtn = document.querySelector(".slide-btn");

let hbt = false;

headerBtn.addEventListener("click", function (e) {
  hbt = !hbt;
  //header ?????? ???
  if (hbt) {
    e.target.classList.add("on");
    headerWrap.style.width = "100px";
    header.style.width = "100px";
    header.classList.add("act");

    if (mainSlide == undefined) {
      mainInfo.style.paddingLeft = "100px";
    } else {
      //?????? ???????????? ?????? ??????
      if (mainSlide.style.display === "none") {
        mainInfo.style.paddingLeft = "100px";
      } else {
        mainInfo.style.paddingLeft = "710px";
        mainSlide.style.left = "100px";
      }
    }
    changeWidth(0);
  } else {
    //header ??? ???
    //headerWrap.style.overflow = "hidden";
    e.target.classList.remove("on");
    headerWrap.style.width = "241px";
    header.style.width = "241px";
    header.classList.remove("act");
    //headerWrap.style.overflow = "auto";

    if (mainSlide == undefined) {
      mainInfo.style.paddingLeft = "300px";
    } else {
      if (mainSlide.style.display === "none") {
        mainInfo.style.paddingLeft = "100px";
      } else {
        mainInfo.style.paddingLeft = "880px";
        mainSlide.style.left = "241px";
      }
    }
    changeWidth(-200);
  }
});

slideBtn.addEventListener("click", function (e) {
  console.log(header.offsetWidth);
  //header off
  if (header.offsetWidth == "1") {
    mainSlide.style.opacity = "0";
    mainSlide.style.display = "none";
    mainInfo.style.paddingLeft = "10px";
  } else {
    //header on
    mainSlide.style.opacity = "0";
    mainSlide.style.display = "none";
    mainInfo.style.paddingLeft = "300px";
  }
  changeWidth(0);
});
