# JS数组遍历

数组遍历方法会对每个数组元素进行操作。

## Array.forEach()

`forEach()` 方法为每个数组元素调用一次函数（回调函数）。

该函数接受 3 个参数：

- 项目值
- 项目索引
- 数组本身

上节中已经说明过这个方法。

## Array.map()

`map()` 方法通过对每个数组元素执行函数来创建新数组。

`map()` 方法不会对没有值的数组元素执行函数。

`map()` 方法不会更改原始数组。

这个例子将每个数组值乘以2：

```js
var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(myFunction);

function myFunction(value, index, array) {
  return value * 2;
}
```

请注意，该函数有 3 个参数：

- 项目值
- 项目索引
- 数组本身

## Array.filter()

`filter()` 方法创建一个包含通过测试的数组元素的新数组。

这个例子用值大于 18 的元素创建一个新数组：

```js
var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

请注意此函数接受 3 个参数：

- 项目值
- 项目索引
- 数组本身

## Array.every()

`every()` 方法检查所有数组值是否通过测试。

这个例子检查所有数组值是否大于 18：

```js
var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

请注意此函数接受 3 个参数：

- 项目值
- 项目索引
- 数组本身

## Array.some()

`some()` 方法检查某些数组值是否通过了测试。

这个例子检查某些数组值是否大于 18：

```js
var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

请注意此函数接受 3 个参数：

- 项目值
- 项目索引
- 数组本身

## Array.indexOf()

`indexOf()` 方法在数组中搜索元素值并返回其位置。

**注释**：第一个项目的位置是 0，第二个项目的位置是 1，以此类推。

检索数组中的项目 "Apple"：

```js
var fruits = ["Apple", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
```

如果未找到项目，`Array.indexOf()` 返回 -1。

如果项目多次出现，则返回第一次出现的位置。

## Array.find()

`find()` 方法返回通过测试函数的第一个数组元素的值。

这个例子查找（返回）大于 18 的第一个元素的值：

```js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

请注意此函数接受 3 个参数：

- 项目值
- 项目索引
- 数组本身

## Array.findIndex()

`findIndex()` 方法返回通过测试函数的第一个数组元素的索引。

这个例子查找大于 18 的第一个元素的索引：

```js
var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
```

请注意此函数接受 3 个参数：

- 项目值
- 项目索引
- 数组本身