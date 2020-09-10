function palindrome(str) {
  if (str === "") return true;
  str = str.toLowerCase().replace(/[^a-z0-9]/gi, "");
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (str[start] !== str[end]) return false;
    end--;
    start++;
  }
  return true;
}

palindrome("eye");
