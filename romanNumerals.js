function toRomanLazy(num) {
  let outPut = "";
  let romanNumeralToArabic = {'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1};
  let romanNumeralPriorityOrder = ['M', 'D', 'C','L','X','V','I'];
  
  for(let i = 0; i <romanNumeralPriorityOrder.length;i++){
    timesDivided =  Math.floor(romanNumeralToArabic[romanNumeralPriorityOrder[i]] / num)
    console.log(timesDivided - num)
  }
  
}

function toRoman(num) {
  return "";
}
console.log(toRomanLazy(8))
module.exports = { toRoman, toRomanLazy };
