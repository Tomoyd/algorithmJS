// 进制转换，十进制转化为其他进制

// 除余法
function integerDec2X(dec, x) {
  let stack = [];
  if (dec === 0) {
    return 0;
  }
  let result = "";
  while (dec > 0) {
    stack.push(dec % x);
    dec = ~~(dec / x);
  }

  while (stack.length > 0) {
    result += stack.pop();
  }
  return result;
}

// 减积法
function decimalDec2X(dec, x) {
  let queue = [];
  let result = ".";
  if (dec === 0) {
    return "";
  }

  while (dec !== 0 && result.length < 10) {
    queue.push(~~(dec * x));
    dec = dec * x - queue[queue.length - 1];
  }

  while (queue.length > 0) {
    result += queen.shift();
  }
  return result;
}

function dec2X(dec, x) {
  const integer = ~~dec;
  const decimal = dec - integer;
  return integerDec2X(integer, x) + decimalDec2X(decimal, x);
}
