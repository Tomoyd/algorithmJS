/**
 *
 */

function selectSort(arr) {
  const len = arr.length;
  let min = 0;
  let temp;
  for (let i = 0; i < len - 1; i++) {
    min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

const sorted = selectSort([1, 3, 8, 4, 7]);

console.log("sorted :>> ", sorted);
