document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Submit").addEventListener("click", function() {
        document.getElementById("NaN-Error_OUT").innerHTML = "";
        document.getElementById("PrW_OUT").value = "";
        document.getElementById("Ges_OUT").value = "";
        document.getElementById("PP_OUT").value = "";

        const Betrag = parseFloat(document.getElementById("B_IN").value);
        const Prozent = parseFloat(document.getElementById("Pr_IN").value);
        const Personen = parseFloat(document.getElementById("Pe_IN").value); 
        const rundungsOption = document.getElementById("R_IN").value;

        if (isNaN(Betrag) || isNaN(Prozent) || isNaN(Personen)) {
            document.getElementById("NaN-Error_OUT").innerHTML = "Achtung: Bitte gib nur gültige Zahlen ein!";
            return;
        }

        if (Personen <= 0) {
            document.getElementById("NaN-Error_OUT").innerHTML = "Fehler: Die Anzahl der Personen muss größer als Null sein!";
            return;
        }

        let PrW = (Betrag * (Prozent / 100));
        let Gesamt = Betrag * (1 + (Prozent / 100));
        let ProPerson = Gesamt / Personen;

        const applyRounding = (value, option) => {
            switch (option) {
                case "1": 
                    return Math.ceil(value);
                case "2": 
                    return Math.floor(value);
                case "3": 
                    return Math.round(value);
                case "0": 
                default:
                    return value;
            }
        };

        PrW = applyRounding(PrW, rundungsOption);
        Gesamt = applyRounding(Gesamt, rundungsOption);
        ProPerson = applyRounding(ProPerson, rundungsOption);

        document.getElementById("PrW_OUT").value = PrW.toFixed(2);
        document.getElementById("Ges_OUT").value = Gesamt.toFixed(2);
        document.getElementById("PP_OUT").value = ProPerson.toFixed(2);
    });
});

/*
Code generated with Google Gemini.

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Submit").addEventListener("click", function() {
        document.getElementById("NaN-Error_OUT").innerHTML = "";
        document.getElementById("PrW_OUT").value = "";
        document.getElementById("Ges_OUT").value = "";
        document.getElementById("PP_OUT").value = "";

        const Betrag = parseFloat(document.getElementById("B_IN").value);
        const Prozent = parseFloat(document.getElementById("Pr_IN").value);
        const Personen = parseFloat(document.getElementById("Pe_IN").value); 

        if (isNaN(Betrag) || isNaN(Prozent) || isNaN(Personen)) {
            document.getElementById("NaN-Error_OUT").innerHTML = "Achtung: Bitte gib nur gültige Zahlen ein!";
            return;
        }

        if (Personen <= 0) {
            document.getElementById("NaN-Error_OUT").innerHTML = "Fehler: Die Anzahl der Personen muss größer als Null sein!";
            return;
        }

        const PrW = (Betrag * (Prozent / 100));
        const Gesamt = Betrag * (1 + (Prozent / 100));
        const ProPerson = Gesamt / Personen;

        document.getElementById("PrW_OUT").value = PrW.toFixed(2);
        document.getElementById("Ges_OUT").value = Gesamt.toFixed(2);
        document.getElementById("PP_OUT").value = ProPerson.toFixed(2);
    });
});



------------------------------------------------------------------------------------------------------------------------------------------------------


!!! This code is not used anymore, but kept for reference. It does not work as intended, so it has been replaced by the above code. !!!


document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("Submit").addEventListener("click", function() {

        const Betrag = parseFloat(document.getElementById("B_IN").value);
        const Prozent = parseFloat(document.getElementById("Pr_IN").value);
        const Personen = parseFloat(document.getElementById("Pe_IN").value);

        

        const PrW = (Betrag * (Prozent / 100));
        const Gesamt = Betrag * (1 + (Prozent / 100));
        const ProPerson = Gesamt / Personen;
        
        if (isNaN(Betrag) || isNaN(Prozent) || isNaN(Personen)) {
            document.getElementById("NaN-Error_OUT").innerHTML = "Achtung: Nur Zahlen eingeben!";
            return;
        }
        else {
            document.getElementById("NaN-Error_OUT").innerHTML = ""; 
        }

        if (Personen <= 0) {
            document.getElementById("NaN-Error_OUT").innerHTML = "Fehler: Die Anzahl der Personen muss größer als Null sein!";
            return;
        }
        else {
            document.getElementById("NaN-Error_OUT").innerHTML = "";
            
            document.getElementById("PrW_OUT").value = PrW;
            document.getElementById("Ges_OUT").value = Gesamt;
        }
        

        
        
        
            
    });

}); 

*/

console.log("Script_load sucess in script.js");






 