const button = document.getElementById('button-converter')
const select = document.getElementById('select-money')

const dolar = 5.42
const euro = 5.45
const bitcoin = 107.426

const convertValues = () => {
    const valueReais = document.getElementById('input-Valor').value
    const valueReal = document.getElementById('value-Real')
    const valueConvert = document.getElementById('value-convert')

    valueReal.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(valueReais)

    if (select.value === 'US$ Dólar americano') {

        valueConvert.innerHTML = new Intl.NumberFormat('en',
            { style: 'currency', currency: 'USD' }
        ).format(valueReais / dolar)
    }

    if (select.value === '€ Euro') {

        valueConvert.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(valueReais / euro)
    }

    if (select.value === 'Bit Coin') {

        valueConvert.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'BTC' }
        ).format(valueReais / bitcoin)
    }

}
const changeSelect = () => {
    const newCurrenty = document.getElementById('text-value')
    const newImg = document.getElementById('src-img')

    if (select.value === '€ Euro') {
        newCurrenty.innerHTML = 'Euro'
        newImg.src = './img/euro.png'
    }

    if (select.value === 'Bit Coin') {
        newCurrenty.innerHTML = 'Bit Coin'
        newImg.src = './img/bitCoin.png'
    }

    if (select.value === 'US$ Dólar americano') {
        newCurrenty.innerHTML = 'US$ Dólar americano'
        newImg.src = './img/dolár.png'
    }
    
    convertValues()
    
}


    button.addEventListener('click', convertValues)
    select.addEventListener('change', changeSelect)


/* if(select.value === 'Bit Coin'){
        newCurrenty.innerHTML = 'Bit Coin'
        newImg.src = './img/bitCoin.png'
    }*/