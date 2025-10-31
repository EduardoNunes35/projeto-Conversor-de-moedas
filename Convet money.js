
//Seleciona os elementos do botão e do select da página:
const buttonConvert = document.querySelector(".button-convert")
const selectCurrency = document.querySelector(".currency-select")



//Função que roda ao clicar no botão:
function buttonClicado() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    //Sem o ".value", aparecerá o código do input no console


    console.log("Para:"+selectCurrency.value)

//Valores das moedas:
    const dolarValue = 5.2
    const euroValue = 5.9
    const bitcoinValue = 577527.99
    const libraValue = 7.07
    const pesoArgentinoValue = 0.034


//Seleiciona os campos de moeda do site:
    const valueToConvert = document.querySelector(".value-to-convert")
    const convertedValues = document.querySelector(".converted-value")



    if (selectCurrency.value == "dolar") { //se o valor selecionado no select for "dolar", faça:
        convertedValues.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarValue)
    }
    if (selectCurrency.value == "euro") {
        convertedValues.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroValue)
    }
    if (selectCurrency.value == "euro") {
        convertedValues.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroValue)
    }
    if (selectCurrency.value == "bitcoin") {
        convertedValues.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinValue)
    }
    if (selectCurrency.value == "libra") {
        convertedValues.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraValue)
    }
    if (selectCurrency.value == "peso-argentino") {
        convertedValues.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / pesoArgentinoValue)
    }



console.log(convertedValues) //mostra no console o valor convertido

    //Coloca o valor do input no campo de moeda a converter, com formatação de moeda brasileira:
    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)
}



    /*new Intl.NumberFormat("linguagem do país"), {
    style: "estilo de formatacão"
    currency: "tipo da moeda"
    }*/


//Função que roda ao mudar o select:
function changeCurrency() { 
    //Pega os elementos da página que serão alterados:
    const currencyName = document.querySelector(".currency-name2")
    const currencyImg = document.querySelector("#currency-Converted-Img")



    if (selectCurrency.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/estados-unidos.jpg"

    }
    if (selectCurrency.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.jpg"
    }
    if (selectCurrency.value == "bitcoin") {
        currencyName.innerHTML = "Bit Coin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    if (selectCurrency.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./assets/libra.jpg"
    }
    if (selectCurrency.value == "peso-argentino") {
        currencyName.innerHTML = "Peso Argentino"
        currencyImg.src = "./assets/argentina.jpg"
    }
    if (selectCurrency.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImg.src = "./assets/brasil.jpg"
    }


    buttonClicado() //atualiza os "dados" da moeda convertida ao mudar o select (change)
}

buttonConvert.addEventListener("click", buttonClicado)
selectCurrency.addEventListener("change", changeCurrency)






