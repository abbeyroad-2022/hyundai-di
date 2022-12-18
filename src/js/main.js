
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
window.addEventListener('scroll', function () {
	reveal();
});



// let wjs = document.querySelectorAll(".wjs");

// function changeWidth() {
// 	console.log("res")
// }
// changeWidth()



// const getLeft = () => {

// 	let list = document.querySelector(".main-list")
// 	let listUl = document.querySelector(".main-list ul")
// 	let item = document.querySelectorAll(".main-list .sh")
// 	let itemLong = document.querySelector(".main-list .long")
// 	let w = 460;
// 	let listWidth = list.getBoundingClientRect().right - list.getBoundingClientRect().left;
// 	let listCount = Math.floor(listWidth / w);
// 	let left = (listWidth - (w * Math.floor(listWidth / w))) / (listCount - 1);

// 	listUl.style.marginLeft = `-${left}px`;
// 	itemLong.style.width = `${listWidth}px`
// 	item.forEach((i) => {
// 		i.style.marginLeft = `${left}px`;
// 	})

// 	if (listCount > 3) {
// 		itemLong.style.width = `${w}px`
// 	}
// }
// getLeft()
// window.addEventListener("resize", () => {
// 	getLeft()
// });


let wjs = document.querySelectorAll(".wjs");

const changeWidth = () => {

	let list = document.querySelector(".main-list")
	let listUl = document.querySelector(".main-list ul")
	let item = document.querySelectorAll(".main-list .sh")
	let itemLong = document.querySelector(".main-list .long")
	let w = 492;
	let listWidth = listUl.getBoundingClientRect().right - listUl.getBoundingClientRect().left;
	let listCount = Math.floor(listWidth / w);
	let left = (listWidth - (w * Math.floor(listWidth / w))) / (listCount - 1);
	console.log(listCount);
	wjs.forEach((i) => {
		i.style.width = `${(w) * listCount - 32}px`
	})

	if (listCount == 2) {
		itemLong.style.width = `${460 * 2 + 32}px`
	} else if (listCount == 3) {
		itemLong.style.width = `${460 * 3 + 32}px`
	} else if (listCount > 3) {
		itemLong.style.width = `${w - 32}px`
	}
}

changeWidth()

window.addEventListener("resize", () => {
	changeWidth()
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
	if (hbt) {
		e.target.classList.add("on")
		headerWrap.style.width = "0";
		header.style.width = "0";
		if (subInner == undefined) {
			mainInfo.style.paddingLeft = "660px";
			mainSlide.style.left = "0";
		} else {
			subInner.style.paddingLeft = "0";
		}
		changeWidth()
	} else {
		e.target.classList.remove("on")
		headerWrap.style.width = "241px";
		header.style.width = "241px";

		if (subInner == undefined) {
			mainInfo.style.paddingLeft = "880px";
			mainSlide.style.left = "241px";
		} else {
			subInner.style.paddingLeft = "241px";
		}
		changeWidth()
	}


})


slideBtn.addEventListener("click", function (e) {
	console.log(header.offsetWidth)
	//header off
	if (header.offsetWidth == "1") {
		mainSlide.style.opacity = "0";
		mainSlide.style.display = "none";
		mainInfo.style.paddingLeft = "10px";
		// wjs.forEach((i) => {
		// 	i.classList.add("mg-auto")
		// })
		setTimeout(() => {
			changeWidth()
		}, 500)
	} else { //header on
		mainSlide.style.opacity = "0";
		mainSlide.style.display = "none";
		mainInfo.style.paddingLeft = "300px";
		setTimeout(() => {
			changeWidth()
		}, 500)
	}

})
