import leia from "readline-sync"
var nomes =[]
var pontosTotal = []



var i = 0;
while(i < 5){
    nomes[i] = leia.question('DIGITE O NOME '+ (i + 1) +': ');
    var quantosGols = leia.questionInt("DIGITE quantos gols ");
    var passeCerto = leia.questionInt("DIGITE quantos passes errados ");
    var passeErrado = leia.questionInt("DIGITE quantos passes certos ");
    
     

    for(var j = 1; j < 1  ; j++){
        var somaGols = quantosGols * 50
        var pontosPc = passeCerto * 10
        var pontosPe = passeErrado * -5
        
        pontosTotal[0]=somaGols;
        pontosTotal[1]=pontosPc;
        pontosTotal[2]=pontosPe;

    }console.log(pontosTotal)
   


    i++;
}