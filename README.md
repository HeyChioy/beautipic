# beautipic

## 获取Bing美图的Node.js小模块

### 内置方法
- beautipic.all(callback(err,obj))
> all:JSON 对象，结构如下
> ```JSON
{
  images:[{bot:
copyright:
copyrightlink:
drk:1
enddate:
fullstartdate:
hs:
hsh:
startdate:
top:1
url:
urlbase:
wp:},...]
} ```
> 就是Bing的JSON数据的images段  
> 数组长度为8

- beautipic.first(callback(err,one))
> one : JSON 对象，是上列images数组的第一数据对象

- beautipic.randomOne(callback(err,one))
> 随机返回数组中的一个对象

- beautipic.get(idx,callback(err,one))
> idx : 索引值[0,7]之间

### 其他
- 本模块基于superagent模块开发
- 如果有err，是superagent那边抛出来的
