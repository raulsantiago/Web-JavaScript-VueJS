//Sempre será verdadeiro ou falso

console.log('01)', '1' == 1) // são iguais ?
console.log('02)', '1' === 1) // são extritamente iguais ? Inclusive os tipos
console.log('03)', '3' != 3) // diferente ?
console.log('04)', '3' !== 3) // extritamente diferente ?

console.log('05)', 3 < 2) // menor ?
console.log('06)', 3 > 2) // maior ?
console.log('07)', 3 <= 2) // menor igual ?
console.log('08)', 3 >= 2) // menor igual ?

const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2) // Não tem diferença por ser memoria IGUAL ?
console.log('10)', d1 == d2) // Não tem diferença por ser memoria IGUAL ?

console.log('11)', d1.getTime() === d2.getTime()) // Não tem diferença por ser memoria IGUAL ?

console.log('12)', undefined == null) // true
console.log('13)', undefined === null) // false