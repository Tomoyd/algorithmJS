/**
 * 1. 从第一个开始，到最后一个结束，相邻元素进行比较，交换，
 * 最后一个的将是最大的
 * 2. 接着从第一个开始，到倒数第二个结束，倒数第二个将是剩余最大的
 * 3. 如此这样直到没有可以成对比较的元素结束
 */

function bubbleSort(arr) {
  let len = arr.length;
  let temp;
  // 比较的趟数
  for (let i = 0; i < len - 1; i++) {
    //   每趟比
    for (let j = 1; j < len - i; j++) {
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

const r = bubbleSort([1, 3, 8, 4, 7]);
