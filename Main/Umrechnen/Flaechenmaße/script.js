function convertToMeters(value, unit) {
    const conversions = {
        'mm': 0.000001,
        'cm': 0.0001,
        'dm': 0.01,
        'm': 1,
        'a': 100,
        'ha': 10000,
        'km': 100000
    };
    return value * conversions[unit];
}

function convertFromMeters(meters, unit) {
    const conversions = {
        'mm': 1000000,
        'cm': 10000,
        'dm': 100,
        'm': 1,
        'a': 0.01,
        'ha': 0.0001,
        'km': 0.000001
    };
    return meters * conversions[unit];
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
        
        const meters = convertToMeters(inputValue, sourceUnit);
        const result = convertFromMeters(meters, targetUnit);
        
        MeterOutputNUM.value = result;
    }

    // document.getElementById("MeterSubmitBTN").addEventListener("click", performConversion);
    
    MeterInputNUM.addEventListener("input", performConversion);
});
