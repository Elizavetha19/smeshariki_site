function changeBackground(color) {
    document.body.style.backgroundColor = color;
}

window.setInterval(function () {
    window.scrollBy({
      top: 300,
      behavior: "smooth"
    });
}, 5000);

function showDate() {
    const today = new Date();

    alert( today.toLocaleDateString("ru-RU"));
}
