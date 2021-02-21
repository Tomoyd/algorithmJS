// 选择排序
/**
 * 1. 选择出第一个最小的，放到排序其实位置
 * 2. 再从未排序的找出最小的排在已排序的末尾
 * 3. 直到均排序完毕，未排序的长度为1
 * O(n**2)
 */
function selectionSort(numbers) {
  let len = numbers.length;
  let minIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }
    temp = numbers[minIndex];
    numbers[minIndex] = numbers[i];
    numbers[i] = temp;
  }
}
