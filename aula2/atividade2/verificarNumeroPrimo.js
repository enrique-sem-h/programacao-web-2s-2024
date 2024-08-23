// A função deve verificar se o número "n" recebido é primo e retornar true, caso verdadeiro, ou false caso não seja primo.
// No mesmo arquivo, faça a chamada da função para os seguintes casos de teste:

function isPrime(n) {
    let isPrime = true;

    if(n < 2) {
        isPrime = false
    }

    for(let i = 2; i < n; i++) {
        if(n % i == 0) {
            isPrime = false;
            break;
        }
    }
    
    console.log(isPrime);
}

isPrime(0); //false
isPrime(1); //false
isPrime(2); //true
isPrime(3); //true
isPrime(7); //true
isPrime(83); //true
isPrime(100); //false
isPrime(991); //true
isPrime(104729); //true
isPrime(14348907); //false
