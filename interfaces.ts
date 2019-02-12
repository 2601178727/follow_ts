interface Person {
  readonly id: number, // 只允许在创建时赋值
  name: string,
  age: number,
  time?: boolean, // 可选属性
  [propName: string]: any // 定义任意属性 如any指定了 类型 则其他属性 必须都是这个类型的子属性
}

let tom: Person = {
  id: 1212,
  name: 'tom',
  age: 25,
  time: false
}

// tom.id = 1; 只被允许在创建时赋值