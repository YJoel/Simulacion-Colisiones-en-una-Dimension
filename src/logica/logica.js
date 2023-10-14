let items = document.querySelectorAll(".item")

document.getElementById("datos").addEventListener("submit", (e)=>{
    e.preventDefault()

    let form = new FormData(document.getElementById("datos"))
    
    let choque = false
    items[0].style.marginLeft = `0%`
    items[1].style.marginRight = `0%`
    setTimeout(()=>{
        
        let mIni1 = parseFloat(form.get("C1M"))
        let vIni1 = parseFloat(form.get("C1V"))
        let mIni2 = parseFloat(form.get("C2M"))
        let vIni2 = parseFloat(form.get("C2V"))

        let dFin1 = (vIni1/(vIni1-vIni2))*94
        let dFin2 = ((-vIni2)/(vIni1-vIni2))*94
        console.log(dFin1, dFin2)

        let vf2 = (((2 * mIni1 * vIni1) - (vIni2 * mIni1) + (mIni2 * vIni2))/(mIni1 + mIni2))
        console.log("Velocidad Final 2: ",vf2)
        let vf1 = -vIni1 + vIni2 + vf2
        console.log("Velocidad Final 1: ",vf1)

        
        for(let i = 0; i < 2; i++){
            if(!choque){
                
                items[0].style.transition = `1s linear`
                items[0].style.marginLeft = `${dFin1}%`
                items[1].style.transition = `1s linear`
                items[1].style.marginRight = `${dFin2}%`
                console.log(dFin1, dFin2)
                choque = true
            }else{
                let aux1 = 0
                let aux2 = 0

                if(vf1 < 0){
                    aux1 = dFin1/((vf1/(vf1-vf2))*94)
                    aux2 = dFin2/(((-vf2)/(vf1-vf2))*94)
                    
                    dFin1 = 0
                    dFin2 = 0
                }
                else if(vf1 == 0){
                    aux1 = dFin1/((vf1/(vf1-vf2))*94)
                    aux2 = dFin2/(((-vf2)/(vf1-vf2))*94)
                    dFin2 = 0
                }
                else if(vf1 > 0){
                    aux1 = Math.abs((dFin1/((vf1/(vf1-vf2))*94)))
                    aux2 = dFin2/(((-vf2)/(vf1-vf2))*94)
                    
                    dFin1 = 94
                    dFin2 = 0
                }

                console.log(aux1, aux2)

                setTimeout(()=>{
                    items[0].style.transition = `${aux1}s linear`
                    items[0].style.marginLeft = `${dFin1}%`
                    items[1].style.transition = `${aux2}s linear`
                    items[1].style.marginRight = `${dFin2}%`
                    console.log(dFin1, dFin2)
                }, 1000)
                items[0].style.height = "3%"
                items[1].style.height = "3%"
            }
        }
    }, 1500)
})