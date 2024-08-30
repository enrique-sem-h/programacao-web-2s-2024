// Implemente a função transporMatriz(A);
// A função deve receber uma matriz (array de arrays) A e imprimir a matriz original e a versão transposta

function transporMatriz(A) {
    let A_string = "";
    let At_string = "";

    for(let i = 0; i < A.length; i++) {
        for(let j = 0; j < A[i].length; j++) {
            A_string += `${A[i][j]} `;
        }
        A_string += "\n";
    }

    for(let i = 0; i < A[0].length; i++) {
        for(let j = 0; j < A.length; j++) {
            At_string += `${A[j][i]} `;
        }
        At_string += "\n";
    }

    console.log("Matriz original: \n" + A_string);
    console.log("Matriz transposta: \n" + At_string);
}

let matriz = [[1, 2], [3, 4], [5, 6]];
transporMatriz(matriz);