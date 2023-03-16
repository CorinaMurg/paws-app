function convertToRoman(num) {
    var romanNumeral = "";
    var romanNumList = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    var decimalList = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    
    for (var i = 0; i < decimalList.length; i++) {
      while (decimalList[i] <= num) {
        romanNumeral += romanNumList[i];
        num -= decimalList[i];
      }
    }
    return romanNumeral.toUpperCase();
  }

  console.log(convertToRoman(835));