const products = [
  "preto-PP", 
  "preto-M", 
  "preto-G", 
  "preto-GG", 
  "preto-GG", 
  "branco-PP", 
  "branco-G", 
  "vermelho-M", 
  "azul-XG", 
  "azul-XG", 
  "azul-XG", 
  "azul-P"
]

module.exports = () => {



var x;
for(x = 0; x < products.length; x++)
{
  products[x] = products[x].replace('-', ' ');
}
console.log(products)
var count = {};
products.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(count)

//const groupBy = (array, key) => {
  // Return the end result
 // return array.reduce((result, currentValue) => {
    // If an array already present for key, push it to the array. Else create an array and push the object
   // (result[currentValue[key]] = result[currentValue[key]] || []).push(
   //   currentValue
  //  );
    // Return the current iteration `result` value, this will be taken as next iteration `result` value and accumulate
   // return result;
 // }, {}); // empty object is the initial value for result object
//};

// Group by color as key to the person array
//const personGroupedByColor = groupBy(products, 'color');

// this step of code can be restructured to multiple lines, see below for the multi line code
//(result[currentValue[key]] = result[currentValue[key]] || []).push(
  currentValue
//);

// This is how the above code in multiple line
//if (!result[currentValue[key]]) {
  result[currentValue[key]] = [];
//}
//result[currentValue[key]].push(currentValue);

//const personGroupedByColor = groupBy(products, "color");
//
}