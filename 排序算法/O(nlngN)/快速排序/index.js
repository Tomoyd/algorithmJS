/**
 * 1.划分交换排序，分治法，非稳定排序
 * 描述
 * 1. 挑选基准值
 * 2. 所有比基准值小的，放到前面，比其大的放到右边
 * 3. 然后对两边进行分割，相同操作当不能再分割时，结束分割
 */

function quickSort(arr) {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let pivot = arr[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 1; i < len; i++) {
    if (arr[i] >= pivot) {
      rightArr.push(arr[i]);
    } else {
      leftArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

const sorted = quickSort([1, 3, 8, 4, 7]);
console.log("sorted :>> ", sorted);
