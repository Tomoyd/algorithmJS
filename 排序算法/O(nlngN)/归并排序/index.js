/**
 * 分治法
 * 1. 分成两个已排序数组，合并成一个的序列
 * 2. 小的元素进入放进新数组中，直到不可再分
 */
const merge = (left, right) => {
  let resArr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      resArr.push(left.shift());
    } else {
      resArr.push(right.shift());
    }
  }
  return resArr.concat(left, right);
};

function mergeSort(arr = []) {
  if (arr.length <= 1) {
    return arr;
  }
  let center = Math.floor(arr.length / 2);
  let left = arr.slice(0, center);
  let right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}
const sorted = mergeSort([1, 3, 8, 4, 7]);

console.log("sorted :>> ", sorted);
