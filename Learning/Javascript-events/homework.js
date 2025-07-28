const box = document.querySelector(".box");

box.onmouseover = function () {
    this.style.width = "90vw";
    this.style.height = "90vh";
} 

box.onmouseleave = function () {
    this.style.width = "200px";
    this.style.height = "100px";
} 