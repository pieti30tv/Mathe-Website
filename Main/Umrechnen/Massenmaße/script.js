function convertToGrams(value, unit) {
    const conversions = {
        'mg': 0.001,
        'g': 1,
        'dag': 10,
        'kg': 1000,
        't': 1000000
    };
    return value * conversions[unit];
}

function convertFromGrams(grams, unit) {
    const conversions = {
        'mg': 1000,
        'g': 1,
        'dag': 0.1,
        'kg': 0.001,
        't': 0.000001
    };
    return grams * conversions[unit];
}

document.addEventListener("DOMContentLoaded", function(){

    // Lots of variables xD
    const USPEH = document.getElementById("USPEH");
    const ZielEH = document.getElementById("ZielEH");
    // const MeterSubmitBTN = document.getElementById("MeterSubmitBTN");
    const MeterInputNUM = document.getElementById("MeterInputNUM");
    const MeterOutputNUM = document.getElementById("MeterOutputNUM");

    function performConversion() {
        const inputValue = parseFloat(MeterInputNUM.value);
        const sourceUnit = USPEH.value;
        const targetUnit = ZielEH.value;
        
        if (isNaN(inputValue)) {
            MeterOutputNUM.value = "Bitte geben Sie eine gültige Zahl ein";
            return;
        }
        
        const grams = convertToGrams(inputValue, sourceUnit);
        const result = convertFromGrams(grams, targetUnit);
        
        MeterOutputNUM.value = result;
    }

    // document.getElementById("MeterSubmitBTN").addEventListener("click", performConversion);
    
    MeterInputNUM.addEventListener("input", performConversion);
});
