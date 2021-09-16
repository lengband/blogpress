---
title: 前端面试灵魂之问
---

## HTML5
### HTML5新特性有哪些？
::: details
- 语义化标签
- 音视频处理
- canvas / webGL /SVG
- 拖拽API
- Web Worker
- Web Storage（localstorage、sessionStorage）
- history API
- requestAnimationFrame
- 地理位置
- [webSocket](#简明扼要介绍webSocket)
- 增强型表单
  - 新的input输入特性: color、date、email、number、url、range...
  - html5新增了五个表单元素

  标签名 | 描述
  ---|---
  \<datalist\> | 用户会在他们输入数据时看到域定义选项的下拉列表
  \<progress\> | 进度条，展示连接/下载进度
  \<meter\> | 刻度值，用于某些计量，例如温度、重量等
  \<keygen\> | 提供一种验证用户的可靠方法，生成一个公钥和私钥
  \<output\> | 用于不同类型的输出，比如尖酸或脚本输出

- html5新增表单属性

属性 | 描述
---|---
placehoder | 输入框默认提示文字
required | 要求输入的内容是否可为空
pattern | 描述一个正则表达式验证输入的值
min/max | 设置元素最小/最大值
step | 为输入域规定合法的数字间隔
height/wdith | 用于image类型 \<input\> 标签图像高度/宽度
autofocus | 规定在页面加载时，域自动获得焦点
multiple | 规定\<input\>元素中可选择多个值
:::

### cookie、sessionStorage、localStorage区别
:::details
相同点：
- 存储在客户端

不同点：
- cookie数据大小不能超过4k；sessionStorage和localStorage的存储比cookie大得多，可以达到5M+
- cookie设置的过期时间之前一直有效；localStorage永久存储，浏览器关闭后数据不丢失除非主动删除数据；sessionStorage数据在当前浏览器窗口关闭后自动删除
- cookie的数据会自动的传递到服务器；sessionStorage和localStorage数据保存在本地
:::


## CSS

### BFC
:::details
一、BFC的概念？

BFC（块级格式上下文）：它是页面中的一块渲染区域，有自己的渲染规则，决定了其子元素如何布局，以及和其他元素之间的关系和作用

二、BFC的原理？

内部的Box会在垂直方向，一个接一个地放置
Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠
每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反
BFC的区域不会与float box重叠
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素
计算BFC的高度时，浮动元素也参与计算

三、如何创建BFC？
- 根元素，即HTML元素
- float的值不为none
- overflow的值不为visible
- display的值为inline-block、table-cell、table-caption
- position的值为absolute或fixed

四、BFC的使用场景？
- 去除边距重叠现象
- 清除浮动（让父元素的高度包含子浮动元素）
- 避免某元素被浮动元素覆盖
- 避免多列布局由于宽度计算四舍五入而自动换行
:::

## JS

### 箭头函数与JS构造函数的区别
::: details
1. 箭头函数不能被直接命名，不过允许它们赋值给一个变量
2. 箭头函数不能用做构造函数，你不能对箭头函数使用new关键字
3. 箭头函数也没有prototype属性箭头函数绑定了词法作用域，不会修改this的指向（**最大特点**）
4. 箭头函数的作用域不能通过.call、.apply、.bind等语法来改变，这使得箭头函数的上下文将永久不变
:::
### 介绍下 Set、Map、WeakSet 和 WeakMap 的区别？
::: details
> https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/6

Set
成员唯一、无序且不重复
[value, value]，键值与键名是一致的（或者说只有键值，没有键名）
可以遍历，方法有：add、delete、has
WeakSet
成员都是对象
成员都是弱引用，可以被垃圾回收机制回收，可以用来保存 DOM 节点，不容易造成内存泄漏
不能遍历，方法有 add、delete、has
Map
本质上是键值对的集合，类似集合
可以遍历，方法很多可以跟各种数据格式转换
WeakMap
只接受对象作为键名（null 除外），不接受其他类型的值作为键名
键名是弱引用，键值可以是任意的，键名所指向的对象可以被垃圾回收，此时键名是无效的
不能遍历，方法有 get、set、has、delete
:::

### 介绍下深度优先遍历和广度优先遍历，如何实现？
::: details
> https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/9

```javascript
// 深度优先遍历 DFS(找到一个节点后，把它的后辈都找出来，最常用递归法。)
let deepTraversal1 = (node, nodeList = []) => {
  if (node !== null) {
    nodeList.push(node)
    let children = node.children
    for (let i = 0; i < children.length; i++) {
      deepTraversal1(children[i], nodeList)
    }
  }
  return nodeList
}
// 广度优先遍历 BFS(找到一个节点后，把他同级的兄弟节点都找出来放在前边，把孩子放到后边，最常用 while)
let widthTraversal2 = (node) => {
  let nodes = []
  let stack = []
  if (node) {
    stack.push(node)
    while (stack.length) {
      let item = stack.shift()
      let children = item.children
      nodes.push(item)
      // 队列，先进先出
      // nodes = [] stack = [parent]
      // nodes = [parent] stack = [child1,child2,child3]
      // nodes = [parent, child1] stack = [child2,child3,child1-1,child1-2]
      // nodes = [parent,child1,child2]
      for (let i = 0; i < children.length; i++) {
        stack.push(children[i])
      }
    }
  }
  return nodes
}
```
:::

### setTimeout、Promise、Async/Await 的区别？
::: details
其中 settimeout 的回调函数放到宏任务队列里，等到执行栈清空以后执行；
promise.then 里的回调函数会放到相应宏任务的微任务队列里，等宏任务里面的同步代码执行完再执行；async 函数表示函数里面可能会有异步方法，await 后面跟一个表达式，async 方法执行时，遇到 await 会立即执行表达式，然后把表达式后面的代码放到微任务队列里，让出执行栈让同步代码先执行。
:::

### 实现 new？
::: details
```javascript
var Dog = function (name) {
  this.name = name
}
Dog.prototype.bark = function () {
  console.log('wangwang')
}
/**
 * 创建一个new操作符
 * @param {*} Con 构造函数
 * @param  {...any} args 忘构造函数中传的参数
 */
function _new(Con, ...args) {
  let obj = {} // 创建一个对象，因为new操作符会返回一个对象
  Object.setPrototypeOf(obj, Con.prototype) // 将对象与构造函数原型链接起来
  // obj.__proto__ = Con.prototype // 等价于上面的写法
  let result = Con.apply(obj, args) // 将构造函数中的this指向这个对象，并传递参数
  return result instanceof Object ? result : obj
}
var simao = _new(Dog, 'simao')
simao.bark()
console.log(simao instanceof Dog) // true
```
:::

### bind、call、apply 手写代码
::: details
1. 手写apply源码
```javascript
Function.prototype.apply = function(content = window) {
  content.fn = this;
  let result;
  // 判断是否有第二个参数
  if(arguments[1]) {
      result = content.fn(...arguments[1]);
  } else {
      result = content.fn();
  }
  delete content.fn;
  return result;
}

```

2. 手写call源码
```javascript
/**
 * 完整版 步骤：
 * 将函数设为对象属性
 * 执行&删除这个函数
 * 指定this到函数并传入给定参数执行函数
 * 如果不传参数，默认指向window
 * */ 
Function.prototype.call = function(content = window) {
  // 判断是否是underfine和null
  // if(typeof content === 'undefined' || typeof content === null){
  //     content = window
  // }
  content.fn = this;
  let args = [...arguments].slice(1);
  let result = content.fn(...args);
  delete content.fn;
  return result;
}

```
3. 手写bind源码
```javascript
/**
 * bind() 方法
 * 会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。(来自于 MDN )
 */
 Function.prototype.bind = function(content) {
  if(typeof this != 'function') {
    throw Error('not a function');
  }
  let _this = this;
  let args = [...arguments].slice(1);
  return function F() {
    // 判断是否被当做构造函数使用
    if(this instanceof F) {
      return _this.apply(this, args.concat([...arguments]))
    }
    return _this.apply(content, args.concat([...arguments]))
  }
 }

```
:::

### WebRTC
> https://segmentfault.com/a/1190000011403597
::: details
- MediaStream：获取音频和视频流
- RTCPeerConnection：音频和视频数据通信
- RTCDataChannel：任意应用数据通信
:::

### 有以下 3 个判断数组的方法，请分别介绍它们之间的区别和优劣 Object.prototype.toString.call() 、 instanceof 以及 Array.isArray()

> https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/23

### 介绍下重绘和回流（Repaint & Reflow），以及如何进行优化

> https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/24

### 介绍下观察者模式和订阅-发布模式的区别，各自适用于什么场景

> https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/25

**观察者模式**
::: details
```javascript
var subject = {
  observers: [],
  notify() {
    this.observers.forEach((observer) => {
      observer.update()
    })
  },
  attach(observer) {
    this.observers.push(observer)
  },
}
var observer = {
  update() {
    alert('updated')
  },
}
subject.attach(observer)
subject.notify()
```

**订阅发布模式**

```javascript
var publisher = {
  publish(pubsub) {
    pubsub.publish()
  },
}
var pubsub = {
  subscribes: [],
  publish() {
    this.subscribes.forEach((subscribe) => {
      subscribe.update()
    })
  },
  subscribe(sub) {
    this.subscribes.push(sub)
  },
}
var subscribe = {
  update() {
    console.log('update')
  },
  subscribe(pubsub) {
    pubsub.subscribe(this)
  },
}
subscribe.subscribe(pubsub)
publisher.publish(pubsub)
```

两种模式本质都是一样的，主要关键点都在于注册（添加到注册数组中）和触发（触发注册数组中的内容），只是订阅/发布模式对注册和触发进行了解耦。可以看到，使用订阅发布模式中发布者触发 publish 的时候，可以选择触发哪一些订阅者集合（因为 publish 参数传递了中间集合，可以定义多个 pubsub 集合），而观察者模式则只能触发所有的被观察对象。
:::

### 实现 add(1)(2)(3)
::: details
```javascript
const add = (a: number, b: number, c: number) => a + b + c;

const adding = (...args: number[]) => args.reduce((pre, cur) => pre + cur, 0);

//参数确定
const curry = (fn: Function) => {
  let args = [];

  return function temp(...newArgs) {
    args.push(...newArgs);
    if (args.length === fn.length) {
      const val = fn.apply(this, args);
      args = [];
      return val;
    } else {
      return temp;
    }
  };
};

//参数不确定
const currying = (fn: Function) => {
  let args = [];

  return function temp(...newArgs) {
    if (newArgs.length) {
      args.push(...newArgs);
      return temp;
    } else {
      const val = fn.apply(this, args);
      args = [];
      return val;
    }
  };
};

const curryAdd = curry(add);
console.log(curryAdd(1)(2)(3)); // 6
console.log(curryAdd(1, 2)(3)); // 6
console.log(curryAdd(1)(2, 3)); // 6

let addCurry = currying(adding);
console.log(addCurry(1)(2)(3)(4, 5)()); //15
console.log(addCurry(1)(2)(3, 4, 5)()); //15
console.log(addCurry(1)(2, 3, 4, 5)()); //15
```
:::

## 手写题

### 使用ES6 的Proxy实现数组负索引。 （负索引：例如，可以简单地使用arr[-1]替代arr[arr.length-1]访问最后一个元素，[-2]访问倒数第二个元素，以此类推）
::: details
```javascript
const proxyArray = arr => {
    const length = arr.length;
    return new Proxy(arr, {
        get(target, key) {
            key = +key;
            while (key < 0) {
                key += length;
            }
            return target[key];
        }
    })
};
var a = proxyArray([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(a[1]);  // 2
console.log(a[-10]);  // 9
console.log(a[-20]);  // 8
```
:::

## VUE
## vue.js的生命周期
一共有10个: 
1. beforeCreate：实例初始化之后，this指向创建实例，不能访问到data、computed、watch、method
2. created：实例创建完成，可访问data、computed、watch、method上的方法和数据，未挂载到DOM，不能访问到$el属性，$ref属性内容为空数组
3. beforeMount：在挂载开始之前被调用，beforeMount之前，会找到对应的template，并编译成render函数
4. mounted：实例挂载到DOM上，此时可以通过DOMAPi获取到DOM节点，$ref属性可以访问
5. beforeUpdate：响应式数据更新时调用，发生在虚拟DOM打补丁之前
6. updated：虚拟DOM重新渲染和打补丁之后调用，组件DOM已经更新，可执行依赖于DOM的操作
7. activated：keep-alive开启时调用
8. deactivated：keep-alive关闭时调用
9. beforeDestroy：实例销毁之前调用。实例仍然完全可用，this仍能获取到实例
10. destroy：实例销毁后调用，调用后，Vue实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁

## computed 不绑定数据，会触发吗

## Observer，Compile，Watcher
> Vue实现这种数据双向绑定的效果，需要三大模块, 他们指责分别是什么呢？
::: details
1. Observer（数据监听器）
- 能够对数据对象的所有属性进行监听，如有变动可拿到最新值并通知订阅者.
- Observer的核心是通过Object.defineProprtty()来监听数据的变动，这个函数内部可以定义setter和getter，每当数据发生变化，就会触发setter。这时候Observer就要通知订阅者，订阅者就是Watcher
2. Compile（指令解析器）
- 对每个元素节点的指令进行扫描和解析，根据指令模板替换数据，以及绑定相应的更新函数。
- Compile主要做的事情是解析模板指令，将模板中变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加鉴定数据的订阅者，一旦数据有变动，收到通知，更新试图
3. Watcher（订阅者）
- 链接Observer和Compile的桥梁，能够订阅并收到每个属性变动的通知，执行指令绑定的相应的回调函数，从而更新试图。
  1. 在自身实例化时往属性订阅器(dep)里面添加自己
  2. 自身必须有一个update()方法
  3. 待属性变动dep.notice()通知时，能调用自身的update()方法，并触发Compile中绑定的回调
:::


## 网络

### 简单讲解一下 http2 的多路复用？
::: details
HTTP2 采用二进制格式传输，取代了 HTTP1.x 的文本格式，二进制格式解析更高效。
多路复用代替了 HTTP1.x 的序列和阻塞机制，所有的相同域名请求都通过同一个 TCP 连接并发完成。在 HTTP1.x 中，并发多个请求需要多个 TCP 连接，浏览器为了控制资源会有 6-8 个 TCP 连接都限制。

在 HTTP/2 中，有两个非常重要的概念，分别是帧（frame）和流（stream）。
帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。
多路复用，就是在一个 TCP 连接中可以存在多条流。换句话说，也就是可以发送多个请求，对端可以通过帧中的标识知道属于哪个请求。通过这个技术，可以避免 HTTP 旧版本中的队头阻塞问题，极大的提高传输性能。

HTTP2 中

1. 同域名下所有通信都在单个连接上完成，消除了因多个 TCP 连接而带来的延时和内存消耗。
2. 单个连接上可以并行交错的请求和响应，之间互不干扰
:::


### 简明扼要介绍webSocket
::: details
WebSocket协议为web应用程序客户端和服务端之间提供了一种全双工通信机制。

特点：
  1. 握手阶段采用HTTP协议，默认端口是80和443
  1. 建立在TCP协议基础之上，和http协议同属于应用层
  1. 可以发送文本，也可以发送二进制数据。
  1. 没有同源限制，客户端可以与任意服务器通信。
  1. 协议标识符是ws（如果加密，为wss），如ws://localhost:8023
:::


### POST和GET方法
::: details
1. GET在浏览器回退时时无害的，而POST会再次提交请求
1. GET请求会被浏览器主动缓存，而POST不会，除非手动设置
1. GET请求参数会被完整的保留在浏览器历史记录里，而POST中的参数不会被保留
1. GET请求在URL中传送的参数是有长度的限制，而POST没有限制
1. GET请求参数会暴露，不安全
1. GET参数通过URL传递，POST放在Requset Body中
:::

### 常见状态码
::: details
- 200 OK：客户端请求成功
- 206 Partial Content：客户发送了一个带有Range头的GET请求，服务器完成了它（当时音频或视频文件很大时返回206）
- 301 Moved Permanently：所请求的页面已经转移至新的URL
- 302 Found：所请求的页面已经临时转移至新的URL
- 303 Not Modified：客户端有缓冲的文档并发出看一个条件性的请求，服务器告诉客户，原来缓冲的文档还可以继续使用
- 401 无权限访问资源
- 403 Forbidden：对请求页面的访问被禁止
- 404 Not Found：请求资源不存在
- 500 Internal Server Error：服务器发生不可预期的错误原来缓冲的文档还可以继续使用
- 503 Server Unavailable：请求未完成，服务器临时过载或宕机，一段时间后可恢复正常
:::


### 什么是持久连接
::: details
HTTP协议采用”请求-应答“模式，当使用普通模式，既非Keep-Alive模式时，每个请求/应答客户和服务器都要新建一个连接，完成之后立即断开连接（HTTP协议为无连接的协议）
当使用Keep-Alive模式（又称持久连接、连接重用）时，Keep-Alive功能使客户端到服务器端的链接持续有效，当出现对服务器的后续请求时，Keep-Alive功能避免了建立或者重新建立连接
注意：keep-alive是1.1版本才有
:::