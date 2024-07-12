import leia from "readline-sync"



var temperatura= leia.keyInSelect(["Celsius para Fahrenheit ","Fahrenheit para Celsius","Celsius para Kelvin", "Kelvin para Celsius","Fahrenheit para Kelvin","Kelvin para Fahrenheit"])

if(temperatura === 0){
    var Celsius= leia.questionFloat("QUANTOS CELSIUS ESTA: ")
    var f = (Celsius * 1.8) + 32 
    
    console.log("voce esta a "+f+" Fahrenheit")
}

if(temperatura === 1){
    var Fahrenheit= leia.questionFloat("QUANTOS FAHRENHEIT ESTA: ")
    var  c = (Fahrenheit - 32) * (5/9)
    
    console.log("voce esta a "+c+" Celcius")
}
if(temperatura === 2){
    var Celsius= leia.questionFloat("QUANTOS CELSIUS ESTA: ")
    var  k = Celsius + 273.15 
    
    console.log("voce esta a "+k+" Kelvin")
}
if(temperatura === 3){
    var Kelvin = leia.questionFloat("QUANTOS KELVIN ESTA: ")
    var   c = Kelvin - 273.15
    console.log("voce esta a "+c+" Celsius")
}
if(temperatura === 4){
    var Fahrenheit = leia.questionFloat("QUANTOS FAHRENHEIT ESTA: ")
    var k = (Fahrenheit - 32) * (5/9) + 273.15 
    console.log("voce esta a "+ k + " kelvin")
}
if(temperatura === 5){
    var Kelvin = leia.questionFloat("QUANTOS KELVin ESTA: ")
    var f = (Kelvin - 273.15) * 1.8 + 32
    console.log("voce esta a "+ f + " farinheit")
}

