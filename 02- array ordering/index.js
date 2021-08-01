
function difference(value1, value2) {
  return Math.abs(value1 - value2);
}
function orderNGroup(list) {
  let finalString = '';
  let sortedList = list?.sort((a, b) => a - b);
  let first = sortedList?.shift();
  let array = sortedList?.reduce(
    (acc, cur) => {
      if (difference(acc[0][1], cur) === 1) {
        acc[0][1] = cur;
      } else {
        acc?.unshift([cur, cur]);
      }
      return acc;
    },
    [first]
  );

  array.reverse().forEach((el) => {
    if (!el?.length) {
      finalString += `${el} `;
    }
    if (el?.length > 1) {
      if (el[0] === el[1]) {
        finalString += ` ${el[0]} `;
      } else {
        finalString += `${el[0]}:${el[1]} `;
      }
    }
  });
  return finalString;
}

console.log(orderNGroup([7, 3, 15, 0, -2, 6, -5, 1, 14, -1, 100, 5]));
