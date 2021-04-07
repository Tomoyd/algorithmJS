/**
 * 插入排序
 * 1. 从第二个开始，认为之前的是已经排好序的，然后与前一个相比，比他大则进行交换，否则不交换
 * 2. 再从第三个开始与前面相邻比较，比其大则交换位置，依次寻找，直到找到比他小的停止或者到没有元素可比
 * 3.依次这样，直到最后一个元素也找到自己的位置
 */

function insertSort(arr) {
  const len = arr.length;
  let temp;
  for (let i = 1; i < len; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }

  return arr;
}

let sortedArr = insertSort([1, 3, 8, 4, 7]);

console.log("sortedArr :>> ", sortedArr);
