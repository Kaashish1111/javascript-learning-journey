const marvel_heros=["Spiderman","Ironman","Thor"]
const dc_heros=["Superman","Flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const all_heros=marvel_heros.concat(dc_heros)
// console.log(all_heros);

// note: here in spread we can give more than two values whereas in concate we are limited to two values
const all_new_heros=[...dc_heros,...marvel_heros]
console.log(all_new_heros);

const complex_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const complex_simple=complex_array.flat(2) // here we sepecified the number till where we want the array . 
console.log(complex_simple)

console.log(Array.isArray("Kashish"));
console.log(Array.from("Kashish"));
console.log(Array.from({name: "Kashish"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));