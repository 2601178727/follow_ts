function sum(x: number, y: number): number {
  return x+y;
}

let num: number = sum(1, 2);
console.log(num);

// 此处 => 用来表示函数定义，左边是输入类型，需要用括号括起来，右边是输出类型。

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
  return x+y;
}

let myNum: number = mySum(2, 4);
console.log(myNum);