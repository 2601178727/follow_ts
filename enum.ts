enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat}

// 如果紧接在计算所得项后面的是未手动赋值的项，那么它就会因为无法获得初始值而报错：
enum Color {Red, Green, Blue = "blue".length}

// 常数枚举 不能包含计算成员
const enum Directions {
  Up,
  Down,
  Left,
  Right
}

let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right];