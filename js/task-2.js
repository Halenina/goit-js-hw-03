function makeArray(firstArray, secondArray, maxLength) {
  const newArray = firstArray.concat(secondArray);
  if (maxLength < newArray.length) {
    return newArray.slice(0, maxLength);
  } else {
    return newArray;
  }
}