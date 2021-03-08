---
title: js进阶3
type: js
order: 3
---



### 执行上下文/作用域链/闭包

#### JavaScript中的执行上下文和执行栈
1.执行上下文
- 变量对象(Variable object，VO)
- 作用域链(Scope chain)
- this

#### JavaScript中的作用域链

#### JavaScript中的闭包
- 闭包是指有权访问另外一个函数作用域中的变量的函数.可以理解为(能够读取其他函数内部变量的函数)
- 闭包的作用: 正常函数执行完毕后,里面声明的变量被垃圾回收处理掉,但是闭包可以让作用域里的变量,在函数执行完之后依旧保持没有被垃圾回收处理掉
- 闭包的缺陷:
闭包会导致内存占用过高,因为变量都没有释放内存
- 函数创建的作用域在函数定义时就已经确定了


### 原型和继承   [推荐文章](https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg)

####  原型prototype
JS 原型是指为其它对象提供共享属性访问的对象。在创建对象时，每个对象都包含一个隐式引用指向它的原型对象或者 null。

####  原型链是什么
原型也是对象，因此它也有自己的原型。这样构成一个原型链。

####  [继承](./继承.html) [参考文章](https://www.cnblogs.com/humin/p/4556820.html)
1. 原型链继承
子对象的prototype等于父的构造函数
子原型上constructor重新指向本身
缺点：引用类型的属性被所有实例共享
2. 构造继承：使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类
```
<!--父:-->
// 定义一个动物类
function Animal (name) {
  // 属性
  this.name = name || 'Animal';
  // 实例方法
  this.sleep = function(){
    console.log(this.name + '正在睡觉！');
  }
}
// 原型方法
Animal.prototype.eat = function(food) {
  console.log(this.name + '正在吃：' + food);
};
<!--子:-->
function Cat(name){
  Animal.call(this);
  this.name = name || 'Tom';
}
var cat = new Cat();
```
3. 实例继承
4. 拷贝继承
5. 组合继承
6. 类继承

