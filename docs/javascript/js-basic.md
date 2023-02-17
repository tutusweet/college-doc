# JS基本语法

## JavaScript输出语句

JavaScript 能够以不同方式输出数据：

- 使用 `window.alert()` 写入警告框
- 使用 `document.write()` 写入 HTML 输出
- 使用 `console.log()` 写入浏览器控制台

## JavaScript 关键词

JavaScript 语句常常通过某个关键词来标识需要执行的 JavaScript 动作。

下面的表格列出了一部分将在教程中学到的关键词：

| 关键词        | 描述                                              |
| :------------ | :------------------------------------------------ |
| break         | 终止 switch 或循环。                              |
| continue      | 跳出循环并在顶端开始。                            |
| debugger      | 停止执行 JavaScript，并调用调试函数（如果可用）。 |
| do ... while  | 执行语句块，并在条件为真时重复代码块。            |
| for           | 标记需被执行的语句块，只要条件为真。              |
| function      | 声明函数。                                        |
| if ... else   | 标记需被执行的语句块，根据某个条件。              |
| return        | 退出函数。                                        |
| switch        | 标记需被执行的语句块，根据不同的情况。            |
| try ... catch | 对语句块实现错误处理。                            |
| var           | 声明变量。                                        |

**注释**：JavaScript 关键词指的是保留的单词。保留词无法用作变量名。

## JavaScript 变量

在编程语言中，*变量*用于*存储*数据值。

变量属于标识符的一种，标识符可以理解为程序员用来标记名称的一段字符(变量 函数名 函数参数 类名等等...)

标识符可以是短名称（比如 x 和 y），或者更具描述性的名称（age、sum、totalVolume）。

构造变量名称（唯一标识符）的通用规则是：

- 名称可包含字母、数字、下划线和美元符号
- 名称必须以字母开头
- 名称也可以 `$` 和 `_` 开头
- 名称对大小写敏感（y 和 Y 是不同的变量）
- 保留字（比如 JavaScript 的关键词）无法用作变量名称

**提示**：JavaScript 标识符对大小写敏感。

定义变量通常可以使用`var` `let` `const` 这3个关键词，其中后面2个是ES6新语法中引入的关键词，这两个关键字在 JavaScript 中提供了块作用域（*Block Scope*）变量（和常量），更推荐使用。

## 全局作用域

*全局*（在函数之外）声明的变量拥有*全局作用域*。

```js
var carName = "porsche";

// 此处的代码可以使用 carName

function myFunction() {
  // 此处的代码也可以使用 carName
}
```

## 函数作用域

*局部*（函数内）声明的变量拥有*函数作用域*。

```js
// 此处的代码不可以使用 carName

function myFunction() {
  var carName = "porsche";
  // code here CAN use carName
}

// 此处的代码不可以使用 carName
```

## JavaScript 块作用域

通过 `var` 关键词声明的变量没有块*作用域*。

在块 *{}* 内声明的变量可以从块之外进行访问。

```js
{ 
  var x = 10; 
}
// 此处可以使用 x
```

在 ES2015 之前，JavaScript 是没有块作用域的。

可以使用 `let` 关键词声明拥有块作用域的变量。

在块 *{}* 内声明的变量无法从块外访问：

```js
{ 
  let x = 10;
}
// 此处不可以使用 x
```

## JavaScript 数据类型

JS变量保存的数据类型通常可以分为两大类：基本数据类型(原始值)和复杂数据类型(引用值)。

其中基本数据类型包括：字符串，数字，布尔值，undefined，null五大类(ES2015中有新增)

复杂数据类型包括：对象，数组，函数等。

## typeof 运算符

您可使用 JavaScript 的 `typeof` 来确定 JavaScript 变量的类型：

typeof 运算符返回变量或表达式的类型：

```js
typeof ""                  // 返回 "string"
typeof 314              // 返回 "number"
typeof true          // 返回 "boolean"
```

对于引用值类型，`typeof` 运算符可返回以下两种类型之一：

- function
- object

`typeof` 运算符把对象、数组或 `null` 返回 `object`。函数会返回`function`。



