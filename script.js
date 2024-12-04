// Fungsi utama untuk konversi suhu
function convertTemperature() {
    // Input
    let tempCelsius = parseFloat(document.getElementById('tempInput').value);
    
    // Validasi input
    if (isNaN(tempCelsius)) {
        displayOutput("Harap masukkan angka yang valid.");
        return;
    }
    
    // Perhitungan konversi
    let tempFahrenheit = toFahrenheit(tempCelsius);
    let tempKelvin = toKelvin(tempCelsius);
    
    // Perulangan untuk format hasil
    let results = [
        { scale: "Fahrenheit", value: tempFahrenheit.toFixed(2) },
        { scale: "Kelvin", value: tempKelvin.toFixed(2) }
    ];
    
    let output = `Suhu dalam Celcius: ${tempCelsius}°C<br>`;
    results.forEach(result => {
        output += `Suhu dalam ${result.scale}: ${result.value}°<br>`;
    });
    
    // Output hasil
    displayOutput(output);
}

// Fungsi konversi Celcius ke Fahrenheit
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Fungsi konversi Celcius ke Kelvin
function toKelvin(celsius) {
    return celsius + 273.15;
}

// Fungsi untuk menampilkan output
function displayOutput(message) {
    document.getElementById('output').innerHTML = message;
}
