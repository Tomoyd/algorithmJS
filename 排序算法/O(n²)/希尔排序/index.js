/**
 * 希尔排序，递减增量排序法
 * 插入排序的一种改进；
 * 插入排序对于已经排好序的，效率灰常快
 * 插入排序一般比较低下
 * 希尔排序
 * 可以在一定步长情况下使尽量顺序然后最后在进行插入排序
 * 非稳定的排序
 */

function shellSort(arr) {
  const len = arr.length;
  const step = [5, 3, 1];
  let curStep = 0;
  let temp;
  for (let s = 0; s < step.length; s++) {
    curStep = step[s];
    for (let i = step[s]; i < len; i += curStep) {
      for (let j = i; j > 0; j -= curStep) {
        if (arr[j] < arr[j - curStep]) {
          temp = arr[j];
          arr[j] = arr[j - curStep];
          arr[j - curStep] = temp;
        }
      }
    }
  }
  return arr;
}

let sorted = shellSort([1, 3, 8, 4, 7, 5, 3, 6, 9]);

console.log("sorted :>> ", sorted);
