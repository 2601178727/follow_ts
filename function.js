function sum(x, y) {
    return x + y;
}
var num = sum(1, 2);
console.log(num);
// 此处 => 用来表示函数定义，左边是输入类型，需要用括号括起来，右边是输出类型。
var mySum = function (x, y) {
    return x + y;
};
var myNum = mySum(2);
console.log(myNum);
// 添加了默认值的参数会被识别为可选参数，不比遵循可选参数必须在必须参数后面的规则
function defaultSum(x, y) {
    if (y === void 0) { y = 1; }
    return x + y;
}
// ...rest获取剩余参数
function push(array) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    items.forEach(function (item) {
        array.push(item);
    });
}
function reverse(x) {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
