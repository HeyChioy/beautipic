# beautipic

## 获取Bing美图的Node.js小模块

## 使用方法

var beautipic = require('beautipic');

### 内置方法
- all(callback(err,obj))
> all:JSON 对象，结构如下
> 就是Bing的JSON数据的images段  
> 数组长度为8

- first(callback(err,one))
> one : JSON 对象，第一张图片的信息

- randomOne(callback(err,one))
> all中随机返回一张图片

- get(idx,callback(err,one))
> idx : 索引值[0,7]之间
