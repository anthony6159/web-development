window.addEventListener("load", setup);

function setup() {
    let pElement = document.getElementById("txtOutput");
    let button = document.getElementById("btnWijzig");

    button.addEventListener("click", function () {
        pElement.innerHTML = "Welkom!";
    });
}
