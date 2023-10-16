let containerResults = document.querySelectorAll(".container-results")

let colision = document.getElementById("colision")

function elastica(vf1, vf2){
    containerResults[0].innerHTML = ""
    containerResults[1].innerHTML = ""

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

    resultValues[0].innerHTML = vf1
    resultValues[1].innerHTML = vf2
    containerResults[0].append(resultItems[0], resultValues[0])
    containerResults[1].append(resultItems[1], resultValues[1])
}

function inelastica(vf){
    containerResults[0].innerHTML = ""
    containerResults[1].innerHTML = ""

    let resultValues = document.createElement("div")
    resultValues.classList.add("result-value")
    
    let resultItems = document.createElement("div")
    resultItems.classList.add("result-item")
    
    resultItems.style.backgroundColor = "red"

    resultValues.innerHTML = vf
    containerResults[0].append(resultItems, resultValues)
}