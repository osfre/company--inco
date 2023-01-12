let btn = document.querySelector("div");
let spans = document.querySelectorAll("span");
let ulElement = document.querySelector("ul")
let links = document.querySelectorAll("ul a")


btn.onclick = function () {
    spans.forEach(span => {
        span.classList.toggle("show");
    });
    ulElement.classList.toggle("show");
}
links.forEach(link => {
    link.onclick = function () {
        ulElement.classList.remove('show');
        spans.forEach(span => {
        span.classList.remove("show");
    });
    }
    
});
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 
let mainTitle = document.title;
window.onblur = () => {
	document.title = "Hey, Come Back";
}
window.onfocus = () => {
	document.title = mainTitle;
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

let changColor = document.querySelector(".change-color");
let btnChangeColor = document.querySelector(".change-color i");
let spansColor = document.querySelectorAll(".change-color span");
let root = document.querySelector(":root");
let rest = document.querySelector(".rest");



btnChangeColor.onclick = () => {
	changColor.classList.toggle("changColor")
}


spansColor.forEach(el => {
	el.onclick = () => {
		root.style.setProperty("--main-color", el.dataset.color);
		localStorage.setItem("--main-color" , el.dataset.color)
	}
});

if (localStorage.getItem("--main-color") == "#65b6ff") {
	root.style.setProperty("--main-color", "#65b6ff");
}
else if (localStorage.getItem("--main-color") == "#3285d0") {
	root.style.setProperty("--main-color", "#3285d0");
}
else if (localStorage.getItem("--main-color") == "#009aff") {
	root.style.setProperty("--main-color", "#009aff");
}
rest.onclick = () => {
	localStorage.clear("--main-color")
	root.style.setProperty("--main-color", null);
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav ul li a");
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
let nav = document.querySelector("nav");
let about = document.querySelector(".about");
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
let nums  = document.querySelectorAll(".details div .num");
let section = document.querySelector(".about-creative");
let started = false;
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //


window.onscroll = () => {
	navScroll()
	backgrounNav()
	Counter();
	toTop();
}


// ////////////////////////////////////////////////////////////////////////
function navScroll() {
	sections.forEach((section) => {
    if (scrollY >= section.offsetTop - 300) {
		navlinks.forEach((a) => {
    	a.classList.remove("active");
    if (a.getAttribute('href') == "#" + section.getAttribute("id")) {
		a.classList.add("active");
    }
	});
    }
});
}
// ////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////
function backgrounNav() { 
	
	if (window.scrollY >= about.offsetTop) {
		if (body.classList.contains("dark")){
			nav.style.background = "#021929";
		} else if (body.classList.contains("dark")) {
			nav.style.background = null ;
		}
		else {
			nav.style.background = "#cacdd6" ;
		}
	}
}
// ////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////
function Counter() {
	if (window.scrollY >= section.offsetTop) {
		if (!started) {
			nums.forEach((num) => startCount(num));
		}
		started = true;
	}
	function startCount(el) {
		let goal = el.dataset.goal;
		let counter = setInterval(() => {
			el.textContent++;
			if (el.textContent == goal) {
				clearInterval(counter)
			}
		}, 2000 / goal);
	}
}
// ////////////////////////////////////////////////////////////////////////

// ////////////////////////////////////////////////////////////////////////
let btnTop = document.querySelector("a .btn-top")
function toTop() {
	if (window.scrollY >= 400) {
        btnTop.style.display = "block";
    }
    else {
		btnTop.style.display = "none";
		nav.style.background = null ;
		
    }
}
btnTop.onclick = () => {
    window.scrollTo({
        top: 0,
        left : 0,
		behavior: 'smooth',
    })
}
// ////////////////////////////////////////////////////////////////////////

let dark = document.getElementById("dark");
let body = document.querySelector("body");
let img_company = document.querySelectorAll(".img-company div svg");


dark.onclick = () => {
	if (body.classList.toggle("dark")) {
		document.querySelector("svg").style.fill = "#fff"
		img_company.forEach(img => {
				img.style.fill = "#fff"
	});
		} else
		{
		document.querySelector("svg").style.fill = "black"
		img_company.forEach(img => {
				img.style.fill = "black"
	});
		}
}







let sarech = document.querySelector("form");
let btnSarech = document.querySelector(".serBtn");
let close2 = document.querySelector("i.fa.fa-solid.fa-magnifying-glass");



btnSarech.onclick = function() {
	sarech.classList.toggle("active1");
}
close2.onclick = function() {
	sarech.classList.remove("active1");
}







ScrollReveal().reveal(".content", {
  origin: "left",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".about-one", {
  origin: "left",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".about-two", {
  origin: "bottom",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: false,
});
ScrollReveal().reveal(".about-three", {
  origin: "right",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".content-two", {
  origin: "right",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".img-box", {
  origin: "left",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".details1", {
  origin: "bottom",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".details2", {
  origin: "bottom",
  distance: "250px",
  opacity: 0,
  duration: 2300,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".details3", {
  origin: "bottom",
  distance: "250px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".details4", {
  origin: "bottom",
  distance: "250px",
  opacity: 0,
  duration: 3000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".projects-details", {
  origin: "right",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".card1", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".card2", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2300,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".card3", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
});