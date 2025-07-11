document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("D-Input").addEventListener("input", function(event) {
        // Prevent non-numeric input
        /*
        if (!/[0-9]/.test(event.key) && event.key !== "Backspace" && event.key !== "Enter") {
            // Log key press for debugging
            console.log("Invalid key pressed in D-Input", event);
            event.preventDefault();
        }
        */
        let Durchmesser = document.getElementById("D-Input").value
        let Fläche = calcSurface(Durchmesser);
        
        updateOutput(Fläche);
    });


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
        let Fläche = calcSurface(Durchmesser);

        updateOutput(Fläche);

    });

});

function calcSurface(Durchmesser) {
    try {
        if (isNaN(Durchmesser) || Durchmesser <= 0) {
            throw new Error("Bitte geben Sie eine gültige Zahl über 0 ein!");
        }
    } catch (e) {
        console.error("Error: " + e.message);
        return -1;
    }

    let Radius = Durchmesser / 2;
    let Rad2 = Radius * Radius;
    let Fläche = Math.PI * Rad2;

    return Fläche;
}

function updateOutput(Fläche) {
    if (Fläche == -1) {
        document.getElementById("Error-OUT").innerHTML = "Bitte geben Sie eine gültige Zahl über 0 ein!";
        document.getElementById("D-Output").value = "";
        return;
    }
    document.getElementById("D-Output").value = Fläche;
    document.getElementById("Error-OUT").innerHTML = "";
}






 