// Array declaration
let grades = ["A", "B", 6.9, 5.4, 7.2, 9, 10, true];

/*
grades[3] = true;
*/

// console.log(grades);

// prints the count for the array's elements
// console.log(grades.length);

// for loop
// for(let i = 0; i < grades.length; i++) {
//     if(typeof grades[i] == "number") {
//         if(grades[i] >= 7) {
//             console.log(`Grade: ${grades[i]} - Approved`);
//         } else {
//             console.log(`Grade: ${grades[i]} - Reproved`);
//         }
//     }
// }

/* defining a matrix
    2 1 0
    0 1 0
    1 2 1
*/
let mat = [
    [2, 1, 0],
    [0, 1, 0],
    [1, 2, 1]
];

console.log(mat[1][2]);
console.log(mat[1].length);

for(let i = 0; i < mat.length; i++) {
    for(let j = 0; j < mat[i].length; j++) {
        console.log(mat[i][j]);
    }
    console.log("\n");
}

let capitals = {
    DF : "Distrito Federal",
    DF_DDD : 61,
    BA : "Salvador",
    BA_DDD : 71,
    RJ : "Rio de Janeiro",
    RJ_DDD : 21,
}

// console.log(capitals.DF);

const a = printCapital();
console.log(a);

function printCapital() {
    for(const key in capitals) {
        const capital = capitals[key];
    
        console.log(capital);
    }
}