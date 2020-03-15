function ceasarCipherEncryptor(string, key) {
  let result = "";
  for (let char of string) {
    let charCode = char.charCodeAt(0);
    if (charCode + key <= 122) {
      result += String.fromCharCode(charCode + key);
    } else {
      result += String.fromCharCode((96 + charCode + key) % 122);
    }
  }
  return result;
}
