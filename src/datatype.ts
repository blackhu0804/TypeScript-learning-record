// 原始类型
let bool: boolean = true
let num: number = 123
let str: String = "abc"

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']

// 元组(限定数组元素的类型和个数)
let tuple: [number, string] = [0, '1']

// 函数
let add = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b;

// 对象
let obj: {x: number, y: number} = {x: 1, y: 2}
obj.x = 3

// Symbol
let s1: symbol = Symbol()
let s2 = Symbol()

// undefined, null
let un: undefined = undefined
let nu: null = null

// void
let noReturn = () => {}

// any
let x

// never 不会有返回值
let error = () => {
  throw new Error('error');
}
let endless = () => {
  while(true) {}
}

// 数字枚举 可以反向映射 
enum Role {
  Reporter,
  Developer,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter) // 0

// 字符串枚举 不可以反向映射
enum Message {
  Success = '成功了',
  Fail = '失败了'
}

// 异构枚举
enum Answer {
  N,
  Y = 'Yes'
}

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}

// 枚举类型
enum E { a, b}
enum F { a = 0, b = 1}
enum G { a = 'apple', b = 'banana'}

let e: E = 3
let f: F = 3

let g1: G = G.a
let g2: G.a = G.a