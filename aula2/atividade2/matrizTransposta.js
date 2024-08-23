// Implemente a função transporMatriz(A);
// A função deve receber uma matriz (array de arrays) A e imprimir a matriz original e a versão transposta

function transporMatriz(A) {
    console.log("Matriz original: " + A);

    for(let i = 0; i < A.length; i++) {
        for(let j = 0; j < A[i].length; j++) {
            // por algum motivo a linah de baixo nao funcionou ;(
            // process.stdout.write(A[i][j]);
            console.log(A[i][j]);
        }
    }
}

let matriz = [[1, 2], [3, 4], [5, 6]];
transporMatriz(matriz);