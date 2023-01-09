let btn = document.querySelector("div");
let spans = document.querySelectorAll("span");
let ulElement = document.querySelector("ul")


btn.onclick = function () {
    spans.forEach(span => {
        span.classList.toggle("show");
    });
    ulElement.classList.toggle("show");
}
