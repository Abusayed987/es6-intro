//  object destructuring
// p:01 fich --------------------------------------------------
const fish = {
    name: 'hilsha fish',
    address: 'chandpur',
    phoneNumber: '01717663388',
    color: 'silvar',
    price: 3030,
};
const { name } = fish;
const { address } = fish;
const { phoneNumber } = fish;
const { color } = fish;
const { price } = fish;
// console.log(name);
// console.log(address);
// console.log(color);
// console.log(price);

// p:02 medicine -------------------------------------------------------

const medicine = {
    medecineName: 'thuja',
    daily: 2,
    medecinePrice: 600,
    medecineColor: 'chocolet',
}
const { medecineName } = medicine;
// console.log(medecineName);
const { daily } = medicine;
// console.log(daily);
var { medecinePrice } = medicine;
// console.log(medecinePrice);
const { medecineColor } = medicine;
// console.log(medecineColor);


// p:03 book / phone ---------------------------------------------------
const mobile = {
    mobilenName: 'redmi note 11 pro max',
    mobilePrice: 25000,
    mobileColor: 'black',
    mobileSize: `5.7 inches`,
};
const { mobilenName } = mobile;
// console.log(mobilenName);
const { mobilePrice } = mobile;
// console.log(mobilePrice);
const { mobileColor } = mobile;
// console.log(mobileColor);
const { mobileSize } = mobile;
// console.log(mobileSize);


// array destructuring ==========================================================
// p:01 numbers
const numbers = [12, 23, 34, 45, 56, 57, 6, 76, 87, 889, 8, 43];
const [first, second, numb3, num4] = numbers;
// console.log(first, second, numb3, num4);


// p:02 nayoks
const nayoks = ['sakib', 'opu', 'bobli', 'puja'];
const [king, bou1, bou2, bouComming] = nayoks;
// console.log(`${king} er upcomming baccar ma holo ${bouComming}`);

// p:03 all mobile
const mobiles = ['Walton', 'Samsung', 'Redmi', 'iPhone16'];
const [maa, babar , amr, tawhid ] = mobiles;
console.log(` ammur Mobile holo ${maa} , abbu mobile holo ${babar} ,Amr mobile holo ${amr} , Abdullah Sayef Tawhid   er Mobile Holo ${tawhid}` );

// p:04 function use kore 
function getName() {
    return ['alim', 'halim'];
}
const [baba, chaca] = getName();
// console.log(`${chaca} and ${baba} holo vhai vhai!`);
