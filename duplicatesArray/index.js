//lower
const findDuplicateInArray = (numbers=[]) => {
  const matchArr=[]
  for(let i=0;i<numbers.length;i++){
    for(let j=i+1;j<numbers.length;j++){
      if(numbers[i]===numbers[j]) matchArr.push(numbers[i])
    }
  }
  return  matchArr;
}

const findDuplicatesByMap = (numbers=[]) => {
  const matchArr=[];
  const map=new Map();
  for(let i=0;i<numbers.length;i++){
    if(map.has(numbers[i])){
      matchArr.push(numbers[i]);
      map.set(numbers[i],map.get(numbers[i])+1);
    }else{
      map.set(numbers[i],0);
    }
  }
return matchArr;
}
const findDuplicatesByObj = (numbers=[]) => {
  const matchArr=[];
  const map={};
  for(let i=0;i<numbers.length;i++){
    if(map[numbers[i]]){
      matchArr.push(numbers[i]);
      map[numbers[i]]++;
    }else{
      map[numbers[i]]=1;
    }
  }
return matchArr;
}

//  1=<a[i]<=n
const findDuplicates = (nums) => {
  const result = [];

  for (let i = 0; i < nums.length; i += 1) {
    // 以自己为索引将索引到的值设置为0
    const index = Math.abs(nums[i]);
    console.log('index', index)

    if (nums[index - 1] < 0) {
      result.push(index);
    }

    nums[index - 1] = -nums[index - 1];

  }

  return result;
};
// console.table(findDuplicateInArray([4,3,2,7,8,2,3,1]));
console.time();
// console.table(findDuplicatesByMap([4,3,2,7,8,2,3,1]));
// console.table(findDuplicateInArray([4,3,2,7,8,2,3,1]));
// console.table(findDuplicatesByObj([4,3,2,7,8,2,3,1]));
console.table(findDuplicates([4,3,2,7,8,2,3,1]));
console.timeEnd();
