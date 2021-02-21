// 冒泡排序：如升序冒泡

/**
 * 1. 比较相邻的元素，如果第一个比第二个大则交换，否则不动
 * 2. 迭代比较每一对相邻元素，直到最后一对相邻元素，移到最后一位
 * 3. 除了最后一个元素比较，再对剩余所有元素进行以上比较,将最大的移到倒数第二位
 * 4.直到剩余比较的元素，剩余数量为1则结束
 * O(((n-1)+1)*(n-1)/2)
 * O(n(n-1)/2)
 * O(n**2)
 */

function bubbleSort(numbers) {
  let len = numbers.length;
  let tmp;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      tmp = numbers[j];
      if (numbers[j] > numbers[j + 1]) {
        numbers[j] = numbers[j + 1];
      }
      numbers[j + 1] = tmp;
    }
  }
  return numbers;
}

// 最差的情况完全反序时
