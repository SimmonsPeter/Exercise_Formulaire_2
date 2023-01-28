//declareVariable(let ou const) nomVariable = document"accede au documenthtml".getElementById(trouve le tag avec le id entre guillemets).value(la valeur a l'interieur du tag avec le id qu'on a donné"




document.getElementById("bouton1").onclick = function() {validatePhone()}
function validatePhone() {
    let province = document.getElementById("province").value;
    let phone = document.getElementById("telephone").value;
    if (province === "Ontario" && !phone.startsWith("613")) {
        alert("Numéro de téléphone incorrect pour la province sélectionnée.");
    } else {
        alert("Numéro de téléphone valide pour la province sélectionnée.");
    }
    if (province === "Quebec" && !phone.startsWith("819")) {
        alert("Numéro de téléphone incorrect pour la province sélectionnée.");
    } else {
        alert("Numéro de téléphone valide pour la province sélectionnée.");
    }
}
