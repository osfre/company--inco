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



let mainTitle = document.title;
// window.addEventListener("blur", () => {
//     document.title = "Hey, Come Back";
// })
// window.addEventListener("focus", () => {
//     document.title = mainTitle;
// })

window.onblur = () => {
	document.title = "Hey, Come Back";
}
window.onfocus = () => {
	document.title = mainTitle;
}







let nums  = document.querySelectorAll(".details div .num");
let section = document.querySelector(".about-creative");
let started = false;  


window.onscroll = function () {
	if (window.scrollY >= section.offsetTop) {
		if (!started) {
			nums.forEach((num) => startCount(num));
		}
		started = true;
	}
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
