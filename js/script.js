function convert(){
    let from = document.getElementById("convert-from").value
    let raw = parseFloat(document.getElementById("value").value)
    let sol = document.getElementById("textarea-solution")
    let ans = document.getElementById("textarea-answer")
    if (from === "Celcius (°C)") {
        result = (raw * 9/5) + 32
        ans.innerHTML = `${result.toFixed(2)}°F`
        sol.innerHTML = `${result.toFixed(2)}°F = (${raw.toFixed(2)}°C * 9/5) + 32 `
    } else if (from === "Fahrenheit (°F)")  {
        result = (raw - 32) * 5/9
        ans.innerHTML = `${result.toFixed(2)}°C`
        sol.innerHTML = `${result.toFixed(2)}°C = (${raw.toFixed(2)}°F - 32) * 5/9 `
    }
}
function clearFields(){
    let raw = document.getElementById("value")
    let sol = document.getElementById("textarea-solution")
    let ans = document.getElementById("textarea-answer")
    ans.innerHTML = ``
    sol.innerHTML = ``
    raw.value = ``
}
function reverse() {
    let from = document.getElementById("convert-from");
    let to = document.getElementById("convert-to");
    if (from.value === "Celcius (°C)") {
        from.value = "Fahrenheit (°F)";
        to.value = "Celcius (°C)";
    } else {
        from.value = "Celcius (°C)";
        to.value = "Fahrenheit (°F)";
    }
}
