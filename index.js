
let heroi = "Thor"
let nivelDoHeroi = 10000
let nivel = 7500

    if (nivel <=1000){
        nivel = "ferro";
    }

    else if (nivel >=1001 && nivel <=2000) {
        nivel = "bronze"
    }
    
    else if (nivel >=2001 && nivel <=5000) {
        nivel = "prata"
    }

    else if (nivel >=5001 && nivel <=7000){
        nivel = "ouro"
    }

    else if (nivel >=7001 & nivel <=8000){
        nivel = "platina"
    }

    else if (nivel >=8001 && nivel <=9000){
        nivel = "ascendente"
    }

    else if (nivel >=9001 && nivel <=10000){
        nivel = "imortal"
    }

    else if (nivel >= 10001){
        nivel = "radiante"
    }

    console.log ("o heroi de nome " + heroi )
    console.log (nivel)