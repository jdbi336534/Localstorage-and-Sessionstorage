function isJSON(obj) {
	return typeof(obj) === "object" && Object.prototype.toString.call(obj).toLowerCase() && !obj.length;
}

function stringify(val) {
	return val === undefined || typeof val === "function" ? val + '' : JSON.stringify(val);
}

//定义一个object给遍历的时候用
function store(key, value) {
	this.key = key;
	this.value = value;
}

var Store = {
	//-----------------------------------localStorage------------------------------------//
	//存储
	//使用说明 setStorage({"json":"jsonp"});或者setStorage("json"，"jsonp");
	setStorage: function(key, value) {
		//如果不是一个json
		if(key && !isJSON(key)) {
			localStorage.setItem(key, stringify(value));
		} else if(key && isJSON(key) && !value) {
			//如果是json
			for(var a in key) {
				localStorage.setItem(a, key[a]);
			}
		}
	},
	//-----------------------------------------------------------------------//
	//查询一条记录getLocalStorage(“123”);
	//获得LocalStorage,当我们没有传参时会返回一个object数组，数组里存的是localstore里面的所有数据
	//若要查询多条，给一个数组进去var arr=["json","haha"];  getLocalStorage(arr);
	getLocalStorage: function(key) {
		if(!key) {
			var arr = [];
			for(var i = 0; i < localStorage.length; i++) {
				var attr = localStorage.key(i);
				arr.push(new store(attr, localStorage.getItem(attr)));
			}
			return arr;
		} else {
			if(!isJSON(key) && !isJSON(key[0]) && typeof(key) != "string") {
				var arr = [];
				for(var k = 0; k < key.length; k++) {
					for(var j = 0; j < localStorage.length; j++) {
						if(key[k] == localStorage.key(j)) {
							var attr = localStorage.key(j);
							arr.push(new store(attr, localStorage.getItem(attr)));
						}

					}
				}

				return arr;

			} else {

				return localStorage.getItem(key);
			}
		}
	},
	//-----------------------------------------------------------------------//
	//删除LocalStorage,当传递一个参数时，会删除一跳记录getLocalStorage(“123”);
	//若要删除多条，给一个数组进去var arr=["json","haha"];  getLocalStorage(arr);
	removeStorage: function(key) {
		if(key) {
			if(!isJSON(key) && !isJSON(key[0]) && typeof(key) != "string") {

				for(var k = 0; k < key.length; k++) {
					for(var j = 0; j < localStorage.length; j++) {
						if(key[k] == localStorage.key(j)) {
							localStorage.removeItem(key[k]);
						}
					}
				}
			} else {
				localStorage.removeItem(key);
			}
		}

	},
	//清空所有
	clearStorage: function() {
		localStorage.clear();
	},

	//-----------------------------------sessionStorage------------------------------------//
	//存储
	//使用说明 setsessionStorage({"json":"jsonp"});setsessionStorage("json"，"jsonp");
	setSessionStorage: function(key, value) {
		//如果不是一个json
		if(key && !isJSON(key)) {
			sessionStorage.setItem(key, stringify(value));
		} else if(key && isJSON(key) && !value) {
			//如果是json
			for(var a in key) {
				sessionStorage.setItem(a, key[a]);
			}
		}
	},
	//-----------------------------------------------------------------------//
	//查询一条记录getsessionStorage(“123”);
	//获得LocalStorage,当我们没有传参时会返回一个object数组，数组里存的是localstore里面的所有数据
	//若要查询多条，给一个数组进去var arr=["json","haha"];  getsessionStorage(arr);
	getSessionStorage: function(key) {
		if(!key) {
			var arr = [];
			for(var i = 0; i < sessionStorage.length; i++) {
				var attr = sessionStorage.key(i);
				arr.push(new store(attr, sessionStorage.getItem(attr)));
			}
			return arr;
		} else {
			if(!isJSON(key) && !isJSON(key[0]) && typeof(key) != "string") {
				var arr = [];
				for(var k = 0; k < key.length; k++) {
					for(var j = 0; j < sessionStorage.length; j++) {
						if(key[k] == sessionStorage.key(j)) {
							var attr = sessionStorage.key(j);
							arr.push(new store(attr, sessionStorage.getItem(attr)));
						}

					}
				}

				return arr;

			} else {

				return sessionStorage.getItem(key);
			}
		}
	},
	//-----------------------------------------------------------------------//
	//删除LocalStorage,当传递一个参数时，会删除一跳记录getsessionStorage(“123”);
	//若要删除多条，给一个数组进去var arr=["json","haha"];  getsessionStorage(arr);
	removeSessionStorage: function(key) {
		if(key) {
			if(!isJSON(key) && !isJSON(key[0]) && typeof(key) != "string") {

				for(var k = 0; k < key.length; k++) {
					for(var j = 0; j < sessionStorage.length; j++) {
						if(key[k] == sessionStorage.key(j)) {
							sessionStorage.removeItem(key[k]);
						}
					}
				}

			} else {
				sessionStorage.removeItem(key);
			}
		}

	},
	//清空所有
	clearSessionStorage: function() {
		sessionStorage.clear();
	}

}