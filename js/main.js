// // // // // // // // // // // // // // // // // // //navMobil // // // // // // // // // // // // // // // // // // // // // // // // // 
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
// // // // // // // // // // // // // // // // // // //navMobil // // // // // // // // // // // // // // // // // // // // // // // // // 

// // // // // // // // // // // // // // // // // // //mainTitle // // // // // // // // // // // // // // // // // // // // // // // // // 
let mainTitle = document.title;
window.onblur = () => {
	document.title = "Hey, Come Back";
}
window.onfocus = () => {
	document.title = mainTitle;
}
// // // // // // // // // // // // // // // // // // // mainTitle// // // // // // // // // // // // // // // // // // // // // // // // // 

// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
// // // // // // // // // // // // // // // // //  change-color // // // // // // // // // // // // // // // // // // // // // // // // // // //

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
// // // // // // // // // // // // // // // // //  change-color // // // // // // // // // // // // // // // // // // // // // // // // // // //


// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
window.onscroll = () => {
  navScroll()
	backgrounNav()
	Counter();
	toTop();
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //
////////////////////////////////////////  navScroll ////////////////////////////////////////////////////////////////////////
let sections = document.querySelectorAll("section");
let navlinks = document.querySelectorAll("nav ul li a");

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
////////////////////////////////////////  navScroll ////////////////////////////////////////////////////////////////////////



////////////////////////////////////////  backgrounNav ////////////////////////////////////////////////////////////////////////
let nav = document.querySelector("nav");
let about = document.querySelector(".about");

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
////////////////////////////////////////  backgrounNav ////////////////////////////////////////////////////////////////////////


////////////////////////////////////////  Counter ////////////////////////////////////////////////////////////////////////
let nums  = document.querySelectorAll(".details div .num");
let section = document.querySelector(".about-creative");
let started = false;

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
////////////////////////////////////////  Counter ////////////////////////////////////////////////////////////////////////

////////////////////////////////////////  btn-top ////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////  btn-top ////////////////////////////////////////////////////////////////////////

////////////////////////////////////////  dark-mood ////////////////////////////////////////////////////////////////////////

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
  if (body.classList.contains("dark")) {
    dark.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    dark.innerHTML = ' <i class="fa-solid fa-moon"></i>';
}
}
////////////////////////////////////////  dark-mood ////////////////////////////////////////////////////////////////////////



////////////////////////////////////////  search ////////////////////////////////////////////////////////////////////////

let btnSearch = document.querySelector(".btn-search");
let inputSearch = document.querySelector(".input-search");

btnSearch.onclick = (() => {
  inputSearch.classList.toggle("show-search");
})
////////////////////////////////////////  search ////////////////////////////////////////////////////////////////////////



////////////////////////////////////////  animation ////////////////////////////////////////////////////////////////////////
ScrollReveal().reveal(".content", {
  origin: "left",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".about-one", {
  origin: "top",
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
  reset: true,
});
ScrollReveal().reveal(".about-three", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
});
ScrollReveal().reveal(".img-box", {
  origin: "bottom",
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
  delay:150,
});
ScrollReveal().reveal(".details2", {
  origin: "bottom",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
  delay:300,
});
ScrollReveal().reveal(".details3", {
  origin: "bottom",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
  delay:450,
});
ScrollReveal().reveal(".details4", {
  origin: "bottom",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
  delay:600,
});
ScrollReveal().reveal(".card1", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2000,
  ease: "ease-in-out",
  reset: true,
  delay:200,
});
ScrollReveal().reveal(".card2", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2300,
  ease: "ease-in-out",
  reset: true,
  delay:400,
});
ScrollReveal().reveal(".card3", {
  origin: "top",
  distance: "250px",
  opacity: 0,
  duration: 2600,
  ease: "ease-in-out",
  reset: true,
  delay:600,
});
////////////////////////////////////////  animation ////////////////////////////////////////////////////////////////////////




////////////////////////////////////////  Loader ////////////////////////////////////////////////////////////////////////
var loader = document.querySelector('.pre-loader');
document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
      fade = loader;
        var intervalID = setInterval(function () {
              
            if (!fade.style.opacity) {
                fade.style.opacity = 1;
            }
              
              
            if (fade.style.opacity > 0) {
                fade.style.opacity -= 0.1;
            } 
              
            else {
                clearInterval(intervalID);
            }
              
        }, 150);
        loader.style.display = "none";
    }
};
////////////////////////////////////////  Loader ////////////////////////////////////////////////////////////////////////


////////////////////////////////////////  writeText ////////////////////////////////////////////////////////////////////////
let myName = "WE ARE CREATIVE INC.";
let index = 0;

function writeText() {
  document.querySelector(".home .content p").textContent = myName.slice(0,index);
  index++;
  if (index > myName.length) {
    index = 1;
  }
}

setInterval(() => {
  writeText();
}, 300)
////////////////////////////////////////  writeText ////////////////////////////////////////////////////////////////////////