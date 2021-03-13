function print(depth) {
  if (depth === 0) {
    console.log("我的小鱼");
  } else {
    console.log("抱着");
    print(depth - 1);
    console.log("鲤鱼");
  }
}

print(3);
