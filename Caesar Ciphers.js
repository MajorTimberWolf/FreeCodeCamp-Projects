/*Caesar Cipher: Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.*/

function rot13(str) { // LBH QVQ VG!
    const acode='A'.charCodeAt();
    const _code='N'.charCodeAt();
    const Zcode='Z'.charCodeAt();
    return [...str].map(
      function(e){
        const code=e.charCodeAt();
        if(acode<=code && code<=Zcode){
          if(code<_code){
            return String.fromCharCode(code+13);
          } else {
            return String.fromCharCode(code-13);
          }
        } else {
          return e;
        }
      }
    ).join("");
  }
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");