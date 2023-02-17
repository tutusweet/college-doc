# 表单

作为HTML中一类特别的标签，表单非常重要，它可以搜集不同类型的用户输入。

## form元素

HTML 表单用于收集用户输入。

`<form>` 元素定义 HTML 表单：

### 实例

```html
<form>
 .
form elements
 .
</form>
```

## input元素

`<input>` 元素是最重要的表单元素。

`<input>` 元素有很多形态，根据不同的type属性，表单元素可以表现不同的形态。

## 文本输入

`<input type="text">` 定义用于*文本输入*的单行输入字段：

### 实例

```html
<form>
 First name:<br>
<input type="text" name="firstname">
<br>
 Last name:<br>
<input type="text" name="lastname">
</form> 
```

**注释**:表单本身并不可见。还要注意文本字段的默认宽度是 20 个字符。

## 密码输入

`<input type="password">` 定义*密码字段*：

### 实例

```html
<form>
 User name:<br>
<input type="text" name="username">
<br>
 User password:<br>
<input type="password" name="psw">
</form> 
```

## 单选按钮输入

`<input type="radio">`定义*单选按钮*。

单选按钮允许用户在有限数量的选项中选择其中之一：

### 实例

```html
<form>
<input type="radio" name="sex" value="male" checked>Male
<br>
<input type="radio" name="sex" value="female">Female
</form> 
```

## 多选按钮输入

`<input type="checkbox"> `定义复选框。

复选框允许用户在有限数量的选项中选择零个或多个选项。

### 实例

```html
<form>
<input type="checkbox" name="vehicle" value="Bike">I have a bike
<br>
<input type="checkbox" name="vehicle" value="Car">I have a car 
</form> 
```

## 提交按钮

`<input type="submit">` 定义用于向*表单处理程序*（form-handler）*提交*表单的按钮。

表单处理程序通常是包含用来处理输入数据的脚本的服务器页面。

表单处理程序在表单的 *action* 属性中指定：

### 实例

```html
<form action="action_page.php">
First name:<br>
<input type="text" name="firstname" value="Mickey">
<br>
Last name:<br>
<input type="text" name="lastname" value="Mouse">
<br><br>
<input type="submit" value="Submit">
</form> 
```

## Action 属性

*action 属性*定义在提交表单时执行的动作。

向服务器提交表单的通常做法是使用提交按钮。

通常，表单会被提交到 web 服务器上的网页。

在上面的例子中，指定了某个服务器脚本来处理被提交表单：

```html
<form action="action_page.php">
```

如果省略 action 属性，则 action 会被设置为当前页面。

不过在现代互联网的实际开发中，我们基本放弃了通过action属性来定义服务器地址的做法，在后面的ajax课程中我们会做进一步说明。

## select元素（下拉列表）

`<select>`元素定义*下拉列表*：

### 实例

```html
<select name="cars">
<option value="volvo">Volvo</option>
<option value="saab">Saab</option>
<option value="fiat">Fiat</option>
<option value="audi">Audi</option>
</select>
```

`<option>` 元素定义待选择的选项。

列表通常会把首个选项显示为被选选项。

您能够通过添加 selected 属性来定义预定义选项。

### 实例

```html
<option value="fiat" selected>Fiat</option>
```

## textarea元素

`<textarea>` 元素定义多行输入字段（*文本域*）：

### 实例

```html
<textarea name="message" rows="10" cols="30">
The cat was playing in the garden.
</textarea>
```

## button 元素

`<button>` 元素定义可点击的*按钮*：

### 实例

```html
<button type="button" onclick="alert('Hello World!')">Click Me!</button>
```

## Input属性

### value属性

*value* 属性规定输入字段的初始值：

### 实例

```html
<form action="">
 First name:<br>
<input type="text" name="firstname" value="Bill">
<br>
 Last name:<br>
<input type="text" name="lastname">
</form> 
```

### readonly属性

*readonly* 属性规定输入字段为只读（不能修改）：

### 实例

```html
<form action="">
 First name:<br>
<input type="text" name="firstname" value="Bill" readonly>
<br>
 Last name:<br>
<input type="text" name="lastname">
</form> 
```

readonly 属性不需要值。它等同于 readonly="readonly"。

### disabled属性

*disabled* 属性规定输入字段是禁用的。

被禁用的元素是不可用和不可点击的。

被禁用的元素不会被提交。

### 实例

```html
<form action="">
 First name:<br>
<input type="text" name="firstname" value="Bill" disabled>
<br>
 Last name:<br>
<input type="text" name="lastname">
</form> 
```

disabled 属性不需要值。它等同于 disabled="disabled"。

### maxlength属性

*maxlength* 属性规定输入字段允许的最大长度：

### 实例

```html
<form action="">
 First name:<br>
<input type="text" name="firstname" maxlength="10">
<br>
 Last name:<br>
<input type="text" name="lastname">
</form> 
```

如设置 maxlength 属性，则输入控件不会接受超过所允许数的字符。

该属性不会提供任何反馈。如果需要提醒用户，则必须编写 JavaScript 代码。

**注释**:输入限制并非万无一失。JavaScript 提供了很多方法来增加非法输入。如需安全地限制输入，则接受者（服务器）必须同时对限制进行检查。