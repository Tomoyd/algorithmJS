/**
 * 堆排序
 */

function heapify(arr, current, n) {
  let left = 2 * current + 1;
  let right = 2 * current + 2;
  let max = current;
  if (left < n && arr[left] > arr[max]) {
    max = left;
  }
  if (right < n && arr[right] > arr[max]) {
    max = right;
  }
  if (max === current) {
    return;
  }
  let temp = arr[max];
  arr[max] = arr[current];
  arr[current] = temp;

  heapify(arr, max, n);
}

function buildHeap(arr, n) {
  for (let i = Math.floor((n - 2) / 2); i >= 0; i--) {
    heapify(arr, i, n);
  }
}

function heapSort(arr) {
  buildHeap(arr, arr.length);

  for (let i = arr.length - 1; i >= 1; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, 0, i);
  }
  return arr;
}

const heapSorted = heapSort([1, 2, 5, 7, 9, 9, 2]);

console.log("heapSorted :>> ", heapSorted);
