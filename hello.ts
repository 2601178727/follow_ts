function sayHello(person: string) {
  return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));

// 表示函数没有返回值
function alertName(): void {
  alert('My name is Tom');
}

let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
// myFavoriteNumber = false;