let numbers = [0, 2, 3, 4, 5, 6, 7, 8, 9];

// funcoes

function provmedBtn(index) {

    let numberPar = '';
    let numberImpar = '';

    if (index == 'par') {
        for (var i = 0; i < numbers.length; i++) {
            let number = numbers[i];

            if (number % 2 === 0) {
                numberPar += number + ', ';
            }
        } alert('Dos numeros: '+numbers+"\nOs numeros pares são: "+numberPar)
    }
    else {
        for (var i = 0; i < numbers.length; i++) {
            let number = numbers[i];

            if (number % 2 !== 0) {
                
                numberImpar += number + ', ';
            }
        } alert('Dos numeros: '+numbers+"\nOs numeros impares são: "+numberImpar)
            
    }
}

