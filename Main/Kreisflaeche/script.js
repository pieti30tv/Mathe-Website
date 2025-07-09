

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Submit").addEventListener("click", function() {

        // document.getElementById("D-Input").value = document.getElementById("D-Input").value = "";
        // document.getElementById("D-Input").value = document.getElementById("D-Output").value = "";

        try {
            let Durchmesser;
            let Radius;
            let Flaeche;

            const PI = 3.14159265358979323846;

            Durchmesser = document.getElementById("D-Input").value;
            console.log(Durchmesser);

            Radius = Durchmesser / 2;
            console.log(Radius);

            Flaeche = Radius * Radius * PI;
            console.log(Flaeche);

            document.getElementById("D-Output").value = Flaeche;

            console.log("Hello");
        } 
        catch (exceptionVar) {
            console.error("An error occurred: ", exceptionVar);
        }
    });
});



