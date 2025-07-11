document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("Submit").addEventListener("click", function() {

        let Durchmesser = document.getElementById("D-Input").value;
        
        try {

            if (isNaN(Durchmesser) || Durchmesser <= 0) {
                document.getElementById("Error-OUT").innerHTML = "Bitte geben Sie eine gültige Zahl über 0 ein!";
                return;
            }

        }
        catch(e) {
            console.error("Error: " + e.message);
            document.getElementById("Error-OUT").innerHTML = "Bitte geben Sie eine gültige Zahl über 0 ein!";
        }

        console.log(Durchmesser);

        Radius = Durchmesser / 2;
        console.log(Radius);

        Rad2 = Radius * Radius;
        console.log(Rad2);

        console.log("Berechnete Fläche: ");
        let Fläche = Math.PI * Rad2
        console.log(Fläche);

        document.getElementById("D-Output").value = Fläche;

        document.getElementById("Error-OUT").innerHTML = "";

    });

});






 