// let season="summer"
// console.log(season)
// season="autumn"
// console.log(season)

////////////////    1.2    //////////////////////
let num = 10;
console.log(num);
num += 1;
console.log(num);
num += 1;
console.log(num);
console.log(""); //^^^^^^^^^^both same vvvvvvvvv//
let num1 = 20;
console.log(num1);
console.log((num1 += 1));
console.log((num1 += 1));
console.log("");

////////////////   1.3     /////////////////////
let num0 = 10;
console.log(num0);
console.log((num0 -= 1));
console.log((num0 -= 1));
console.log((num0 -= 1));
console.log("");

/////////////     1.4    /////////////////////////
stringnum = "10";
console.log(typeof stringnum, stringnum);
console.log(typeof Number(stringnum), Number(stringnum));
console.log(typeof Math.floor(stringnum), Math.floor(stringnum));
console.log(typeof Math.round(stringnum), Math.round(stringnum));
console.log(typeof (stringnum - 0), stringnum - 0);
console.log("");

////////////    1.5    ////////////////////////////
let a = 10;
a = a * num;
console.log(a);
console.log("");

///////////    2.1    ////////////////////////////
const Jonash = 170;
const Jonasw = 70;

const Petrash = 180;
const Petrasw = 76;

var Jonasbmi =
  Math.round((Jonasw / ((Jonash / 100) * (Jonash / 100))) * 10) / 10;
var Petrasbmi =
  Math.round((Petrasw / ((Petrash / 100) * (Petrash / 100))) * 10) / 10;

console.log(
  "Petro kmi yra",
  Petrasbmi,
  "\n",
  "Jono kmi yra",
  Jonasbmi,
  "\n",
  "Jono kmi yra didesnis uz Petro"
);
console.log("");
////////////  P2.2.1    ////////////////////
const side1 = 10;
const side2 = 12;
var side3 = Math.sqrt(side1 ** 2 + side2 ** 2);
console.log(side3);
console.log("");
/////////// P2.2.2     ////////////////////
const cel = 20;
var fah = (cel * 9) / 5 + 32;
console.log(fah, typeof fah);
console.log("");
