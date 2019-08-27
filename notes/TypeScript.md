# TypeScript 

## 静态类型语言

- 对类型极度严格
- 立即发现错误
- 运行时性能好
- 自文档化

## 动态类型语言

- 对类型非常宽松
- BUG 可能隐藏很长时间
- 运行时性能差
- 可读性差

动态类型语言的优势：

1. 性能是可以改善的，V8引擎，灵活性更重要
2. 隐藏的错误可以通过单元测试发现
3. 文档可以通过工具生成

## 数据类型

### ES6 的数据类型

#### 六种基本数据类型

- Boolean
- Number
- String
- Object
- undefined
- null
- Symbol

#### 引用类型

- Array
- Function



### TypeScript 的数据类型

除上面的数据类型以外，TypeScript 还包括 void, any, never, 元组，枚举，高级类型。



#### 类型注解

> 作用：相当于强类型语言中的类型声明

#### 枚举类型

> 枚举：一组有名字的常量集合

## 函数定义的几种方式

### 1. function

```TypeScript
  function add1(x: number, y: number) {
    return x + y
  }
```

### 2. 

```TypeScript
  let add2:  (x: number, y: number)  => number
```

### 3.

```TypeScript
type add3 = (x: number, y: number) => number
```

### 4.
```TypeScript
interface add4 {
  (x: number, y: number): number
}
```

参数的限制：必须数量一致

### 可选参数

```TypeScript
  function add5(x: number, y?: number) {
    return y ? x+y : x;
  }
```

### 参数默认值
```TypeScript
  function add6(x: number, y = 0) {
    return x + y;
  }
```