

function nivelRanking(vitoria, derrota){
   let nivelTotal = vitoria - derrota

let nivel;

if ( nivelTotal < 10){
    nivel ="Ferro"
    } else if( nivelTotal >= 11 && nivelTotal <= 20){
        nivel ="Bronze"
    }
     else if(nivelTotal >= 21 && nivelTotal <= 50){
    nivel ="Prata"
    }
     else if ( nivelTotal >= 51 && nivelTotal <= 80){
        nivel ="Ouro"
    }
     else if( nivelTotal >= 81 && nivelTotal <= 90){
        nivel ="Diamante"
    }
     else if( nivelTotal >= 91 && nivelTotal <= 100){
        nivel ="Lendário"
    }
     else {
    nivel = "Imortal"
}

return ` O heroi tem um  saldo de ${nivelTotal} e está no nivel ${nivel}`
}

let vitoria = 160
let derrota = 30
const resultado = nivelRanking(vitoria, derrota)
console.log(resultado)