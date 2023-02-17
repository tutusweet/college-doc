# JS数组方法

JavaScript 数组的力量隐藏在数组方法中，对于前端编程学习而言它非常重要，切记！

## 将数组转为字符串

`join()` 方法也可将所有数组元素结合为一个字符串，您还可以规定分隔符。

```js
var fruits = ["Banana", "Orange","Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * "); 
```

结果

```
Banana * Orange * Apple * Mango
```

## pop 和 push

在处理数组时，删除元素和添加新元素是很简单的。

`push()` 方法（在数组结尾处）向数组添加一个新的元素：

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");       //  向 fruits 添加一个新元素
```

`push()` 方法返回新数组的长度。

`pop()` 方法从数组中删除最后一个元素：

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();              // 从 fruits 删除最后一个元素（"Mango"）
```

`pop()` 方法返回“被弹出”的值。

## shift和unshift

`shift()` 方法会删除首个数组元素，并把所有其他元素“位移”到更低的索引。

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();            // 从 fruits 删除第一个元素 "Banana"
```

`shift()` 方法返回被“位移出”的字符串。

`unshift()` 方法（在开头）向数组添加新元素，并“反向位移”旧元素：

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // 向 fruits 添加新元素 "Lemon"
```

`unshift()` 方法返回新数组的长度。

## splice

上一节中我们留下了一个问题，应该如何删除数组中的元素，splice方法正好可以实现它！

`splice()` 方法可以删除数组中的元素，并且增添新的数组元素。

```js
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
```

第一个参数（2）定义了应添加新元素的位置（拼接）。

第二个参数（0）定义应删除多少元素。

其余参数（“Lemon”，“Kiwi”）定义要添加的新元素。

`splice()` 方法返回一个包含已删除项的数组。

## concat

`concat()` 方法通过合并（连接）现有数组来创建一个新数组：

### 实例（合并两个数组）

```js
var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // 连接 myGirls 和 myBoys
```

`concat()` 方法不会更改现有数组。它总是返回一个新数组。

`concat()` 方法可以使用任意数量的数组参数。

## slice

`slice()` 方法用数组的某个片段切出新数组。

本例从数组元素 1 （"Orange"）开始切出一段数组：

```js
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1); 
```

`slice()` 方法创建新数组。它不会从源数组中删除任何元素。

`slice()` 可接受两个参数，比如 (1, 3)。

该方法会从开始参数选取元素，直到结束参数（不包括）为止。