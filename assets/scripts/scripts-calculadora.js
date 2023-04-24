function verificar() {

    document.getElementById("resultado").classList.add('resultado');
      
    resultado.style.display = 'inherit'

    var preco = Number(in_kg.value)
    var estado = sel_estado.value
    var mensagem = ''

    if (estado == "sp") {

        var preço = preco * 2.71
        mensagem = `O valor das quilogramas de soja inseridas em função do estado de ${estado.toUpperCase()}, se encontra em aproximadamente R$${preço}. <br><br> <br>
Em ${estado.toUpperCase()}, a estimativa de perda é de 14% por quilograma, reduzindo seu poder de venda no mercado físico para R$${(preço * 0.86).toFixed(02)}.<br><br>
Com o nosso serviço você economizará aproximadamente R$${(preço * 0.14).toFixed(2)}. `

    } else if (estado == "ms") {

        var preço = preco * 2.75
        mensagem = `O valor das quilogramas de soja inseridas em função do estado de ${estado.toUpperCase()}, se encontra em aproximadamente R$${preço}. <br> <br> <br>
Em ${estado.toUpperCase()}, a estimativa de perda é de 16% por quilograma, reduzindo seu poder de venda no mercado físico para R$${(preço * 0.84).toFixed(2)}.<br><br>
Com o nosso serviço você economizará aproximadamente R$${(preço * 0.16).toFixed(2)}. `

    } else if (estado == "pr") {

        var preço = preco * 2.91
        mensagem = `O valor das quilogramas de soja inseridas em função do estado de ${estado.toUpperCase()}, se encontra em aproximadamente R$${preço}. <br> <br> <br>
 Em ${estado.toUpperCase()}, a estimativa de perda é de 18% por quilograma, reduzindo seu poder de venda no mercado físico para R$${(preço * 0.82).toFixed(2)}.<br><br>
 Com o nosso serviço você economizará aproximadamente R$${(preço * 0.18).toFixed(2)}.`

    } else if (estado == "mt") {

        var preço = preco * 2.67
        mensagem = `O valor das quilogramas de soja inseridas em função do estado de ${estado.toUpperCase()}, se encontra em aproximadamente R$${preço}. <br> <br> <br>
 Em ${estado.toUpperCase()}, a estimativa de perda é de 14% por quilograma, reduzindo seu poder de venda no mercado físico para R$${(preço * 0.86).toFixed(2)}.<br><br>
Com o nosso serviço você economizará aproximadamente R$${(preço * 0.14).toFixed(2)}. `

    } else if (estado == "go") {

        var preço = preco * 2.62
        mensagem = `O valor das quilogramas de soja inseridas em função do estado de ${estado.toUpperCase()}, se encontra em aproximadamente R$${preço}.<br> <br>
 Em ${estado.toUpperCase()}, a estimativa de perda é de 21% por quilograma, reduzindo seu poder de venda no mercado físico para R$${(preço * 0.79).toFixed(2)}.<br><br>
 Com o nosso serviço você economizará aproximadamente R$${(preço * 0.21).toFixed(2)}. `

    } else if (estado == "rs") {

        var preço = preco * 2.73
        mensagem = `O valor das quilogramas de soja inseridas em função do estado de ${estado.toUpperCase()}, se encontra em aproximadamente R$${preço}. <br><br> <br>
Em ${estado.toUpperCase()}, a estimativa de perda é de 14% por quilograma, reduzindo seu poder de venda no mercado físico para R$${(preço * 0.86).toFixed(2)}.<br><br>
Com o nosso serviço você economizará aproximadamente R$${(preço * 0.14).toFixed(2)}.`

    } else if (estado == "mg") {

        var preço = preco * 2.92
        mensagem = `O valor das quilogramas de soja inseridas em função do estado de ${estado.toUpperCase()}, se encontra em aproximadamente R$${preço}. <br><br> <br>
Em ${estado.toUpperCase()}, a estimativa de perda é de 11% por quilograma, reduzindo seu poder de venda no mercado físico para R$${(preço * 0.89).toFixed(2)}.<br><br>
 Com o nosso serviço você economizará aproximadamente R$${(preço * 0.11).toFixed(2)}. `
    } else {

        var preço = preco * 2.64
        mensagem = `O valor das quilogramas de soja inseridas em função do estado de ${estado.toUpperCase()}, se encontra em aproximadamente R$${preço}. <br><br> <br>
Em ${estado.toUpperCase()}, a estimativa de perda é de 13% por quilograma, reduzindo seu poder de venda no mercado físico para R$${(preço * 0.87).toFixed(2)}.<br><br>
 Com o nosso serviço você economizará aproximadamente R$${(preço * 0.13).toFixed(2)}. `
    }

    div_mensagem.innerHTML = mensagem


}