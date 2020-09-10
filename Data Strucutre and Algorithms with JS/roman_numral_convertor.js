function convertToRoman(num) {
  let valueMap = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ];
  let roman = "";
  for (let i = valueMap.length - 1; i >= 0; i--) {
    let [value, str] = valueMap[i];
    if (num >= value) {
      while (num >= value) {
        num -= value;
        roman += str;
      }
    }
  }
  return roman;
}

convertToRoman(36);
