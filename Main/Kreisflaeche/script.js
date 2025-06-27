let Durchmesser;
let Radius;
let Fläche;
const Pi = 3.14159265358979323846;

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("D-Submit").addEventListener("click", function() {
        try {
            Durchmesser = parseFloat(document.getElementById("D-Input").value);
            if (isNaN(Durchmesser) || Durchmesser <= 0) {
                throw new Error("Bitte geben Sie eine gültige Zahl für den Durchmesser ein.");
            }
            Radius = Durchmesser / 2;
            Fläche = Pi * (Radius * Radius);
            document.getElementById("D-Output").value = Fläche;
        } catch (error) {
            document.getElementById("Error_Output").innerHTML = "Fehler: " + error.message;
        }
    });
});



