let nomes = ["Battinelas", "Jonas", "Cascão", "Cebolinha"]
console.log(nomes.length)

for(let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
    }


    for (let i in nomes){
        console.log(nomes[i])
    }


    for (let nome of nomes){
        console.log(nome, nome.length)
    }