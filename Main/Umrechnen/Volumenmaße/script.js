function convertToMeters(value, unit) {
    const conversions = {
        'mm': 0.000000001,
        'cm': 0.000001,
        'dm': 0.001,
        'm': 1,
        'km': 1000000000000000000
    };
    return value * conversions[unit];
}

function convertFromMeters(meters, unit) {
    const conversions = {
        'mm': 1000000000,
        'cm': 1000000,
        'dm': 1000,
        'm': 1,
        'km': 0.000000000000000001
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
