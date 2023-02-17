# JS数组

JS数组可以有序地存储多个数据。

## 什么是数组？

数组属于复杂数据类型，它能够有序存放一个以上的值。

如果您有一个项目清单（例如，汽车品牌列表），在单个变量中存储汽车品牌应该是这样的：

```js
var car1 = "Benz";
var car2 = "Volvo";
var car3 = "BMW"; 
```

数组可以用一个单一的名称存放很多值，并且还可以通过引用索引号来访问这些值。索引值从数字0开始。

## 创建数组

创建数组一般有2种方式:

* 字面量

  ```js
  var cars = ["Benz", "Volvo", "BMW"];
  ```

* 构造函数

  ```js
  var cars = new Array("Benz", "Volvo", "BMW");
  ```

以上两个例子效果完全一样。

出于简洁、可读性和执行速度的考虑，请使用第一种方法。

## 数组的基本操作

我们通过引用索引号（下标号）来引用某个数组元素。

这条语句访问 cars 中的首个元素的值：

```js
var name = cars[0];
```

这条语句修改 cars 中的首个元素：

```js
cars[0] = "Audi";
```

这条语句给数组新增了第四个元素：

```js
cars[3] = 'TOyota'
```

删除数组元素需要使用数组的方法，后续说明。

## 数组是对象

数组是一种特殊类型的对象。在 JavaScript 中对数组使用 `typeof` 运算符会返回 "object"。

但是，JavaScript 数组最好以数组来描述。

数组使用*数字*来访问其“元素”。

## length 属性

`length` 属性返回数组的长度（数组元素的数目）。

## 遍历数组元素

遍历数组的最安全方法是使用 "`for`" 循环：

```js
var fruits, text, fLen, i;

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
     text += "<li>" + fruits[i] + "</li>";
} 
```

您也可以使用 `Array.forEach()` 函数：

```js
var fruits, text;
fruits = ["Banana", "Orange", "Apple", "Mango"];

text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";

function myFunction(value) {
  text += "<li>" + value + "</li>";
}
```

## 如何识别数组

常见的问题是：我如何知晓某个变量是否是数组？

问题在于 JavaScript 运算符 `typeof` 返回 "`object`"，因为 JavaScript 数组属于对象。

### 解决方案 1：

为了解决这个问题，ECMAScript 5 定义了新方法 `Array.isArray()`：

```js
Array.isArray(fruits);     // 返回 true
```

此方案的问题在于 ECMAScript 5 *不支持老的浏览器*。

### 解决方案 2：

假如对象由给定的构造器创建，则 *instanceof* 运算符返回 true：

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
 
fruits instanceof Array     // 返回 true
```

随着学习的深入，还有其他的更多方法来判断变量是否为一个数组。