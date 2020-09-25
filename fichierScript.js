const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function square(arr){
  const sqr = arr.map(num => Math.pow(num, 2));
  return sqr; 
}

//console.log(square(numbers));


function odd(arr) {
  return arr.filter(num => num % 2 === 0); 
}

//console.log(odd(numbers));


function evenSum(arr) {
  const filtered = arr.filter(num => num%2 == 0);
  const sqr = filtered.map(num => Math.pow(num, 2))
  const sum = sqr.reduce((total, value) => total + value, 0);
  return sum; // 21
}

//console.log(evenSum(numbers));

function evenSumCleanned(arr) {
  const res = arr.filter(num => num%2 == 0)
                 .map(num => Math.pow(num, 2))
                 .reduce((total, value) => total + value, 0);

  return res;
}

//console.log(evenSumCleanned(numbers));

function getPostOfString(str) {
  // const chaine = str.split( char =);
  const caract = str.split("");
  const tab = caract.map(chr => caractervalue(chr));
  return tab;
}
 
//console.log(getPostOfString("abe"));

//console.log(getPostOfString("abe"));
// ["a","b","e"]
// {
  // a: 1,
  // b: 2,
  // e; 5,
// }

function valueProprieteTable2(str) {
    const caract = str.split("");
    const result = {};
    //console.log(caract[]);
   // console.log(typeof(caract));

    for(let i=0; i < caract.length; i++) {
      const position = alph.findIndex(chr => chr === caract[i]);
        result[caract[i]] = position + 1;
    }
    
    return result;
}













const arr = [5, 2, 3, 4, 5, 6];

const sum = arr.reduce((total, value) => {
  console.log('total => ', total);
  console.log('value => ', value);
  const result = total + value;
  console.log('result => ', result);
  return result;
}, 0);






function valueProprieteTable(str) {
  return str.split('').reduce((total, value) => {
    total[value] = alph.findIndex(chr => chr === value) + 1;
    return total;
  }, {});
}









console.log(valueProprieteTable("bae"));


function caractervalue(chr) {
 /*  for (let i = 0; i < alph.length; i++) {

    if (alph[i] === chr){
      return i+1;
    }
  } */
  return alph.indexOf(chr) + 1;
}

//console.log(caractervalue("z"));