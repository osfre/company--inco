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
window.addEventListener("blur", () => {
    document.title = "Hey, Come Back";
})
window.addEventListener("focus", () => {
    document.title = mainTitle;
})
