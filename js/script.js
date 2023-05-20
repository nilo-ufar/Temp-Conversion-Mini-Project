let $ = document
const firstValue= $.querySelector(".C")
const secondValue= $.querySelector(".F")
const converter = $.querySelector("#converter")
const result = $.querySelector(".result")
const convertButton = $.querySelector(".convertButton")
const resetButton = $.querySelector(".resetButton")
const changeButton = $.querySelector(".changeButton")

function convert () {
if (converter.value === "" || isNaN(converter.value)) {
    result.innerHTML = "Insert Correct Value"
    result.style.color = "red"

} else {
    if (firstValue.innerHTML === "°C") {
        let resultValue = (converter.value * 1.8) / 32
        result.innerHTML = converter.value + "°C To " + resultValue.toFixed(2) + "°F"
        result.style.color = "rgb(255, 255, 102)"

    } else {
        let resultValue = (converter.value - 32 ) * 5 / 9
        result.innerHTML = converter.value + "°F To " + resultValue.toFixed(2) + "°C"
        result.style.color = "rgb(255, 255, 102)"
    }
}
}

function reset () {
    result.innerHTML = ""
    converter.value = ""
}

function swap () {
if (firstValue.innerHTML === "°C" ) {
    firstValue.innerHTML = "°F"
    secondValue.innerHTML = "°C"
    converter.setAttribute("placeholder", "°F")
    document.title = "Temp Conversion Mini Project °F To °C"

} else  {
    firstValue.innerHTML = "°C"
    secondValue.innerHTML = "°F"
    converter.setAttribute("placeholder", "°C")
    document.title = "Temp Conversion Mini Project °C To °F"
}
}

convertButton.addEventListener("click", convert)
resetButton.addEventListener("click", reset)
changeButton.addEventListener("click", swap)
