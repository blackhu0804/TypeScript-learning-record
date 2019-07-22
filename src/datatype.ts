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