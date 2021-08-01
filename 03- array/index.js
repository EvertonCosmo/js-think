function listTerms(m) {
  const array = [];
  let initialSerie = 5;
  var index = initialSerie;

  do {
    array.push(index);
    index += 2;
  } while (index <= m);

  return array;
}

console.log(listTerms(35));
