function filterArray(numbers, value) {
  const resultArr = [];
  for (num of numbers) {
    if (num > value) {
      resultArr.push(num);
    }
  }
  return resultArr;
}
