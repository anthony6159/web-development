const setup = () => {
    let pElement = document.getElementById("txtOutput");
    let button = document.getElementById("btnWijzig");

    button.addEventListener("click", () => {
        pElement.innerHTML = "Welkom!";
    });
};

window.addEventListener("load", setup);
