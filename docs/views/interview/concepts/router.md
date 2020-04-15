---
title: Router！路由！
date: 2020-3-15
tags:
 - router
 - Vue
categories: 
 - Interview
---


### 说了那么多的路由，他到底是个啥？

这几年来，大大小小的面试经历过不少了，经常被问到路由的问题。我的回答也仅限于Vue的路由守卫的一些知识点，现在想起来是在是太肤浅了，有必要好好总结一下。

### 1.前端路由与后端路由
#### 前端路由一般使用在单页面应用（SPA），大部分页面结构不变，只改变部分内容的使用。路由的映射函数通常是进行一些DOM的显示和隐藏操作。
* 比如：vue-router
* 用户体验好，不需要每次都从服务器全部获取，快速展现给用户.
* 使用浏览器的前进，后退键的时候会重新发送请求，没有合理地利用缓存
#### 后端路由又可称之为服务器端路由，因为对于服务器来说，当接收到客户端发来的HTTP请求，就会根据所请求的相应URL，来找到相应的映射函数，然后执行该函数，并将函数的返回值发送给客户端。
* 比如：koa-router
* 分担了前端的压力，html和数据的拼接都是由服务器完成。
* 加大了服务器端的压力,如果当前网速过慢，那将会延迟页面的加载，对用户体验不是很友好。

### 2.前端路由主要模式
#### hash模式
* hash的实现基于location.hash。其实现原理也很简单，location.hash的值就是URL中#后面的内容（通常被吐槽长得丑）

#### history模式
* 使用```history.pushState()```来新增一个历史记录
* 使用```history.repalceState()```来直接替换当前的历史记录

### 3.利用HASH写的一个简单路由

``` html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="nav">
    <a href="#/page1">page1</a>
    <a href="#/page2">page2</a>
    <a href="#/page3">page3</a>
  </div>
  <div id="container" style="width: 265px;height: 100px;background-color: blanchedalmond;margin-top: 20px;text-align: center;"></div>
  <script>
    let container = document.getElementById('container')

    class HashRouter {
      constructor() {
        this.routers = {}
        window.addEventListener('hashchange',this.load.bind(this),false)
      }
      register(hash, callback){
        this.routers[hash] = callback
      }
      registerIndex(callback){
        this.routers['index'] = callback
      }
      load(){
        let hash = location.hash
        const home = Object.keys(this.routers)[1]
        let hander
        if(!hash){
          hander = this.routers[home]
        }else{
          hander = this.routers[hash]
        }
        hander.call(this)
      }
    }

    let router = new HashRouter()
    //注册其他视图回到函数
    router.register('',()=> container.innerHTML = 'page1')
    router.register('#/page1',()=> container.innerHTML = 'page1')
    router.register('#/page2',()=> container.innerHTML = 'page2')
    router.register('#/page3',()=> container.innerHTML = 'page3')
    //加载视图
    router.load()
  </script>
</body>
</html>
```