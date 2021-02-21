// 插入排序
/**
 * 1.将第一个元素看做是已经排序好的有序队列
 * 2. 从头到尾扫描未排序的，往已排序的序列中插入
 *
 * 实现：从第二个元素开始遍历，与已排序的从尾到头进行比较，如果比前面的小则将前面移动，并记录插入位置，直到找到第一个比其小的元素
 */

function insertSort(numbers) {
  let len = numbers.length;
  let temp, insertIndex;
  for (let i = 1; i < len; i++) {
    temp = numbers[i];
    insertIndex = i;
    for (let j = i - 1; j >= 0; j--) {
      if (temp > numbers[j]) {
        break;
      }
      insertIndex = j;
      numbers[j + 1] = numbers[j];
    }

    numbers[insertIndex] = temp;
  }
}
