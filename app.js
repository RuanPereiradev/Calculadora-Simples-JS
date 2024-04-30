const teclasNum = [...document.querySelectorAll(".num")]
const teclasOp = [...document.querySelectorAll(".op")]
const display = document.getElementById("display")
const botaoLimpar = document.getElementById("tlimpar")
const botaoCopiar = document.getElementById("tcpy")
const botaoResultado = document.getElementById("tigual")

let decimal = false
let sinal= false

teclasNum.forEach((el)=>{
    el.addEventListener("click", (evt)=>{
        sinal = false
        if(evt.target.innerHTML== ","){
            if(!decimal){
                decimal = true
                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                }else{
                    display.innerHTML += evt.target.innerHTML
                }
               
            }
        }else{
            if(display.innerHTML == "0"){
                display.innerHTML = " "
            }
            display.innerHTML += evt.target.innerHTML

        }

    })
    
})

teclasOp.forEach((el)=>{
    el.addEventListener("click",(evt)=>{
        decimal =false
        if(!sinal){
            sinal = true
            if(evt.target.innerHTML == 'x'){
                if(display.innerHTML == "0"){
                    display.innerHTML = " "

                }else{
                    display.innerHTML += evt.target.innerHTML
                }
            }else{
                display.innerHTML += evt.target.innerHTML

            }
        }
    })
})


botaoLimpar.addEventListener("click", (evt)=>{
    display.innerHTML = "0"
})

botaoResultado.addEventListener("click",(evt)=>{
    decimal = false
    sinal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
})
botaoCopiar.addEventListener("click",(evt)=>{
    navigator.clipboard.writeText(display.innerHTML)
})
