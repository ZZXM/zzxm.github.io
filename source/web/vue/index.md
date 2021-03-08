---
title: vue
type: vue
order: 1
---

### vue生命周期
new vue的时候会init（初始化事件）,inti过程中首先调用的就是beforeCreate（创建组件实例），然后在injections和reactivity的时候调用created（已创建,属性已绑定,$el还不可用）,当created完成之后，执行beforemount钩子（挂载前）会去判定instance（实列）里是否存在$el option,没有的话会去调用vm.$mount,然后执行下一步,判定是否有template,如果有会被解析成render function,这是模板编译的过程,最终会被解析成render函数。
render函数会调用vue里面的createElement方法,return返回一个creatElement方法,方法接受3个参数,第一个参数未创建的div标签,第二个参数传了一个对象,第三个参数是div标签里面的内容。
beforeMount的时候,$el还只是我们html里面写的节点,然后到mounted的时候,他就可以把渲染出来的内容挂载到dom节点上,中间执行了render function的内容.
后续的钩子需要外部触发才会执行,比如说有数据变化,会调用beforeUpdate,然后经过virtual Dom,最后updated更新完毕,当组件销毁的时候会调用beforeDestory,以及destoryed。还有监听报错的钩子renderError和serverprefetch

### vue响应式的原理
1.object.defineProperty
2.vue在默认初始数据的时候,会给data中的属性使用object.defineProperty重新定义所有属性，当页面取到对应属性时,会进行依赖收集（收集当前组件的watcher）,如果属性发生变化会通知相关依赖进行更新操作。
3.代码流程 initData[初始化用户传入数据] => new Observer[对数据进行观测] => this.walk（value）[进行对象的处理] => defineReactive[对数据进行观测] => Object.defineProperty[拦截属性,对属性进行依赖收集,拦截属性的更新操作,对相关依赖进行通知] 

### diff算法
diff算法是虚拟dom的必要产物,通过diff进行新旧虚拟dom对比,将变更结果返回到真实dom上
vue为了降低watcher的颗粒度,每个组件只有一个watcher与之对应,只有引入watcher才能精准找到发生变化的地方
vue中diff执行的时刻是在组件实例执行其更新函数的时候（updatachildren），它会对比上一次的返回结果oldvnode和新的返回结果newvnode，此过程称为patch。
diff过程遵循深度优先，同源对比的策略;两个节点会根据是否拥有子节点和文本节点进行不同的操作，比较两组节点是算法中的重点，根据新头旧头，新尾旧尾,新头旧尾和新尾旧头一坨坨判定节点是否一致，进行相应的patch处理，按照整个方式进行递归操作，查找结束在处理剩下节点,key可以更高效的找到相同节点。

### computed和watch有什么区别
computed:
computed是计算属性,也就是计算值,它更多用于计算值的场景
computed具有缓存性,computed的值在getter执行后是会缓存的，只有在它依赖的属性值改变之后，下一次获取computed的值时才会重新调用对应的getter来计算
computed适用于计算比较消耗性能的计算场景
watch:
更多的是「观察」的作用,类似于某些数据的监听回调,用于观察props $emit或者本组件的值,当数据变化时来执行回调进行后续操作
无缓存性，页面重新渲染时值不变化也会执行
小结:
当我们要进行数值计算,而且依赖于其他数据，那么把这个数据设计为computed
如果你需要在某个数据变化时做一些事情，使用watch来观察这个数据变化

### 为何vue采用异步渲染
因为如果不采用异步更新，那么每次更新数据都会对当前组件进行重新渲染.所以为了性能考虑。 Vue 会在本轮数据更新后，再去异步更新视图!
3.代码流程 initData[初始化用户传入数据] => new Observer[对数据进行观测] => this.walk（value）[进行对象的处理] => defineReactive[对数据进行观测] => Object.defineProperty[拦截属性,对属性进行依赖收集,拦截属性的更新操作,对相关依赖进行通知] 

### Vue中v-if和v-show的区别 
v-if 如果条件不成立不会渲染当前指令所在节点的 dom 元素
v-show 只是切换当前 dom 的显示或者隐藏
注：v-for的优先级高于v-if

### ajax请求放在哪个生命周期中 
理解: 
1.在created的时候，视图中的 dom 并没有渲染出来，所以此时如果直接去操 dom 节点，无法找到相 关的元素
2.在mounted中，由于此时 dom 已经渲染出来了，所以可以直接操作 dom 节点 
一般情况下都放到 mounted 中,保证逻辑的统一性,因为生命周期是同步执行的， ajax 是异步执行的
服务端渲染不支持mounted方法，所以在服务端渲染的情况下统一放到created中







[参考](https://blog.csdn.net/qq_41646249/article/details/104644647?utm_medium=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf&depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-1.add_param_isCf)