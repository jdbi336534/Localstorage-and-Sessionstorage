#LocalStorage&SessionStorage

@(我的第一个笔记本)[SessionStorage封装, 实例, 使用方法]

**Storage.js**：是一款集 LocalStorage&SessionStorage于一体的封装包，下面举几个例子。
 
- **LocalStorage存储** ：
 - **LocalStorage存储一条数据**:
 `Store.setStorage({"json":"jsonp"})`或者`Store.setStorage("json"，"jsonp")`；
 - **LocalStorage存储多条数据**:
 `Store.setStorage({"json":"jsonp"，"json1":"jsonp1",...})`
- **LocalStorage读取** ：
	- **LocalStorage读取一条数据**: 
 `Store.getLocalStorage(“json”)`读取名为"json"的值;
	- **LocalStorage读取多条数据**:
	 当`Store.getLocalStorage()`没有传参时会返回一个object数组，数组里存的是localstore里面的所有数据，若要查询多条，给一个数组进去`var arr=["json","haha"];  Store.getLocalStorage(arr)`返回一个查询结果object数组;
- **LocalStorage删除** ：
	- **LocalStorage删除一条数据** ：
	 删除LocalStorage,当传递一个参数时，会删除一条记录`Store.removeStorage(“123”)`;
	若要删除多条，给一个数组进去`var arr=["json","haha"];  Store.removeStorage(arr)`;
- **LocalStorage清空所有** ：
	  `Store.clearStorage();`此函数默认清空所有的LocalStorage。
	  
-------------------
>SessionStorage和LocalStorage的使用方法基本相同，同样的方法。


- **SessionStorage存储** ：
 - **SessionStorage存储一条数据**:
 `Store.setSessionStorage({"json":"jsonp"})`或者`Store.setSessionStorage("json"，"jsonp")`；
 - **SessionStorage存储多条数据**:
 `Store.setSessionStorage({"json":"jsonp"，"json1":"jsonp1",...})`
- **SessionStorage读取** ：
	- **SessionStorage读取一条数据**: 
 `Store.getSessionStorage(“json”)`读取名为"json"的值;
	- **SessionStorage读取多条数据**:
	 当`Store.getSessionStorage()`没有传参时会返回一个object数组，数组里存的是SessionStorage里面的所有数据，若要查询多条，给一个数组进去`var arr=["json","haha"];  Store.getSessionStorage(arr)`返回一个查询结果object数组;
- **SessionStorage删除** ：
	- **SessionStorage删除一条数据** ：
	 删除SessionStorage,当传递一个参数时，会删除一条记录`Store.removeSessionStorage(“123”)`;
	若要删除多条，给一个数组进去`var arr=["json","haha"];  Store.removeSessionStorage(arr)`;
- **SessionStorage清空所有** ：
	  `Store.clearSessionStorage();`此函数默认清空所有的SessionStorage。