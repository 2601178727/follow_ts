function sum(x: number, y: number): number {
  return x+y;
}

let num: number = sum(1, 2);
console.log(num);

// 此处 => 用来表示函数定义，左边是输入类型，需要用括号括起来，右边是输出类型。

let mySum: (x: number, y?: number) => number = function (x: number, y: number): number {
  return x+y;
}

let myNum: number = mySum(2);
console.log(myNum);

// 添加了默认值的参数会被识别为可选参数，不比遵循可选参数必须在必须参数后面的规则
function defaultSum(x: number, y: number = 1): number {
  return x+y;
}

// ...rest获取剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach((item) => {
    array.push(item);
  })
}

// 重载，实现一个函数 reverse，输入数字 123 的时候，输出反转的数字 321，输入字符串 'hello' 的时候，输出反转的字符串 'olleh'。
function reverse(x: number): number; // 如果输入的是number类型，那么输出也要是number类型
function reverse(x: string): string;
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}

// 类型断言
function getLength(something: string | number): number {
  if ((<string>something).length) { // 赋予了联合属性时，只能使用联合属性的共有属性，如需要单独类型的属性，需要用到类型断言
      return (<string>something).length;
  } else {
      return something.toString().length;
  }
}