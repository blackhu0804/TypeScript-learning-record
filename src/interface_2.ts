/**
 * 函数类型接口
 */
let addNumber: (x: number, y: number) => number

// interface addNumber {
//   (x: number, y: number): number
// }

type addNumber = (x: number, y: number) => number

let addnumber: addNumber = (a, b) => a + b

interface Lib {
  (): void;
  version: string;
  doSomething(): void;
}

function getLib() {
  let lib: Lib = (() => {}) as Lib; // 断言
  lib.version = '1.0';
  lib.doSomething = () => {}

  return lib;
}

let lib1 = getLib();
lib1();
lib1.doSomething();
let lib2 = getLib();