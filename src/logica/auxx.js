let results = document.querySelectorAll(".results")

let colision = document.getElementById("colision")

function elastica(mInis, vInis, vFins) {

    // Resultado de velocidad
    results[1].children[1].innerHTML = ""
    results[1].children[2].innerHTML = ""

    let resultValues = [
        document.createElement("div"),
        document.createElement("div")
    ]
    resultValues[0].classList.add("result-value")
    resultValues[1].classList.add("result-value")

    let resultItems = [
        document.createElement("div"),
        document.createElement("div")
    ]
    resultItems[0].classList.add("result-item")
    resultItems[1].classList.add("result-item")

    resultItems[0].style.backgroundColor = items[0].style.backgroundColor
    resultItems[1].style.backgroundColor = items[1].style.backgroundColor

    resultValues[0].innerHTML = `${vFins[0]} m/s`
    resultValues[1].innerHTML = `${vFins[1]} m/s`

    results[1].children[1].append(resultItems[0], resultValues[0])
    results[1].children[2].append(resultItems[1], resultValues[1])

    // ENERGIA CINETICA
    results[0].children[1].innerHTML = `EC Inicial: ${energiaCinetica(mInis, vInis)}`
    results[2].children[1].innerHTML = `EC Final: ${energiaCinetica(mInis, vFins)}`

    // MOVIMIENTO
    results[0].children[2].innerHTML = `Cantidad Movimiento Inicial: ${movimiento(mInis, vInis)}`
    results[2].children[2].innerHTML = `Cantidad Movimiento Final: ${movimiento(mInis, vFins)}`
}

function inelastica(mInis, vInis, vf) {
    results[1].children[1].innerHTML = ""
    results[1].children[2].innerHTML = ""

    let resultValues = document.createElement("div")
    resultValues.classList.add("result-value")

    let resultItems = document.createElement("div")
    resultItems.classList.add("result-item")

    resultItems.style.backgroundColor = "red"

    resultValues.innerHTML = `${vf} m/s`
    results[1].children[1].append(resultItems, resultValues)

    // ENERGIA CINETICA
    results[0].children[1].innerHTML = `EC Inicial: ${energiaCinetica(mInis, vInis)}`
    results[2].children[1].innerHTML = `EC Final: ${energiaCinetica(mInis, [vf, vf])}`

    // MOVIMIENTO
    results[0].children[2].innerHTML = `Cantidad Movimiento: ${movimiento(mInis, vInis)}`
    results[2].children[2].innerHTML = `Cantidad Movimiento: ${movimiento(mInis, [vf, vf])}`
}

function energiaCinetica(m, v) {
    let res = ((m[0] * Math.pow(v[0], 2)) / 2) + ((m[1] * Math.pow(v[1], 2)) / 2)
    return `<br>${Math.abs(res.toFixed(1))}<b>J</b>`
}

function movimiento(m, v) {
    let res = ((m[0] * v[0]) + (m[1] * v[1]))
    return `<br>${Math.abs(res.toFixed(1))}<b>(Kg*m)/s</b>`
}