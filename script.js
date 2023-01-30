



form = document.getElementById("form");
form.addEventListener('submit', function () { validatePhone() });

function validatePhone() {
    let province = document.getElementById("province").value;
    let phone = document.getElementById("telephone").value;

    if (province === "Ontario" && !phone.startsWith("613")) {
        alert("Numéro de téléphone incorrect pour la province sélectionnée.");
    } else if (province === "Quebec" && !phone.startsWith("819")) {
        alert("Numéro de téléphone incorrect pour la province sélectionnée.");
    } else {
        alert("Numéro de téléphone valide pour la province sélectionnée.");
    }
}
