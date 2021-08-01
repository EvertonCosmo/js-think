
function _replaceChars(str = '') {
let parsed = str.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
  console.log({ parsed });
  return parsed;
}
function palindrome(word = '') {
  const regex = /[^A-Za-z0-9]/g;
  let wordLowCase = word.toLowerCase().replace(regex, '')
  const wordFormatted = _replaceChars(wordLowCase);
  return wordFormatted === wordFormatted.split('').reverse().join('');
}
console.log(palindrome('Aná'));
