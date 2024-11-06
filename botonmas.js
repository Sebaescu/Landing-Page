function toggleToys() {
    var extraToys = document.getElementById("extraToys");
    var toggleBtn = document.getElementById("toggleBtn");

    if (extraToys.style.display === "none") {
        extraToys.style.display = "flex";
        toggleBtn.innerHTML = "Mostrar Menos";
    } else {
        extraToys.style.display = "none";
        toggleBtn.innerHTML = "Mostrar Más";
    }
}