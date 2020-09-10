function rot13(str) {
  // const alphaObj = {
  //   'A':1,'B':2,'C':3,'D':4,'E':5,'F':6,'G':7,'H':8,'I':9,'J':10,'K':11,'L':12,'M':13,14:'N',15:'O',16:'P',17:'Q',18:'R',19:'S',20:'T',21:'U',22:'V',23:'W',24:'X',25:'Y',26:'Z'}
  let decoded = "";
  let pos;
  for (let s of str) {
    pos = s.charCodeAt(0) - 64;
    if (pos > 0 && pos < 27) {
      pos -= 13;
      if (pos < 1) {
        pos += 26;
      }
    }
    decoded += String.fromCharCode(pos + 64);
  }
  return decoded;
}

rot13("SERR PBQR PNZC");
