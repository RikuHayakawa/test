import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
console.log("dgsg");
const mypo = ["vd", 6];
const [name, num] = mypo;
console.log(name);
console.log(num);

const sayHello = (name) => console.log("Hello");
sayHello();
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const numberArr = [1, 2, 3, 4, 5];
const numberArr2 = numberArr.map((number) => number % 2 === 0);
console.log(numberArr2);

/**
 * デフォルト値
 */

/**
 * map true, falseを返す
 *
 * filter　要素を返す
 */

const nameArr = ["ha", "ya", "ka"];
const nameArr2 = nameArr.map((name) => name + "ii");

console.log(nameArr2);

/**
 *三項演算子
 */
