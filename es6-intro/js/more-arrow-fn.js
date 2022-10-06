
// simple operation hole return korar dorkar nai
const arrFn = (num1, num2) => num1 * num2;

//perameter 1 ta hole parenthesis() er dorkar hoy na
const arrFn2 = num => num * 2;

// jodi perameter na thake tahole taholeo Empty-parenthesis() use korte hoy
const arrFn4 = () => num * 2;

// akadik operation hole {return} korte hoy .
const arrFn3 = (a, b, c) => {
    const sum = a + b;
    const sum2 = b + c;
    const multiply = sum * sum2;
    return multiply;
}

const num = 3;
const empty = () => num * num;
// const emptyResult = empty()
console.log(empty());

const single = singlee => singlee / 2; // don't use parenthresis for single perameter!

const single1 = singlee1 => singlee1 * 2;
const single2 = singlee2 => singlee2 * singlee2;

// console.log(single(2));
const multilineFn =  (pera1, pera2) => {
    const peRa1 = pera1 *1 ;
    const peRa2 = pera2 * 2;
    const multiply = peRa1 / peRa2 ;
    return multiply ;
}

console.log(multilineFn(232,343));