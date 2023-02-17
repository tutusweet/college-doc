# JS对象

JS对象属于引用值数据类型，用来存储键值对数据。

存储的值一般称为属性，但如果存储的值是一个函数，通常便称作方法，属性和方法统称为对象成员。

## 创建对象

和数组类型，创建对象也有2种形式：

* 字面量形式

  ```js
  let person = {
      firstName:"Bill",
      lastName:"Gates",
      age:50,
      eyeColor:"blue"
  };
  ```

* 构造函数形式

  ```js
  let person = new Object()
  person.firstName="Bill"
  ...
  ```

推荐通过字面量的形式直接创建对象。

## 对象的基本操作

访问对象成员有2种方式：

* ```
  objectName.propertyName
  ```

* ```
  objectName["propertyName"]
  ```

删除对象成员可以使用delete关键字

```js
delete objectName.propertyName
```

## 对象遍历

JavaScript `for in` 语句循环遍历对象的属性：

```js
for (key in object) {
  // code block to be executed
}
```

```js
const person = {fname:"Bill", lname:"Gates", age:25};

let text = "";
for (let x in person) {
  text += person[x];
}
```

- *for in* 循环遍历 *person* 对象
- 每次迭代返回一个*键* (x)
- 键用于访问键的*值*
- 键的值为 *person[x]*

## this 关键词

在对象方法中，`this` 引用该函数的“拥有者”。

