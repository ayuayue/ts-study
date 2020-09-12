// string 对象
var txt = new String("string");
var txt1 = "string";
console.log(txt, txt1);
// constructor 对创建该对象的函数的引用。
var he = new String("hello");
console.log("constructor: " + he.constructor);
// length 
console.log("hello".length);
// prototype 原型 允许您向对象添加属性和方法。
function employee(id, name) {
    this.id = id;
    this.name = name;
}
var emp = new employee(18, "lisa");
console.log(emp.id, emp.name);
employee.prototype.email = function () {
    return "email";
};
console.log(emp.email());
// charAt 返回在指定位置的字符
console.log(he.charAt(2));
// charCodeAt 返回指定位置的unicode码
console.log(he.charCodeAt);
// concat 链接两个或更多字符串
console.log("hello".concat(",", "World"));
// indexOf 返回指定字符串首次出现的位置,从0开始,-1表示查找不到,将整个str当作整体进行查询而不会进行匹配
console.log(he.indexOf("o"));
// lastIndexOf 返回指定字符串最后一次出现的位置
// localeCompare 用本地特定的顺序来比较两个字符串。相同返回0
var hello = new String("hello world");
console.log(he.localeCompare(hello.valueOf()));
// match() 查找找到一个或多个正则表达式的匹配。查不到返回null
console.log(hello.valueOf().match(/o/g));
//	replace() 替换与正则表达式匹配的子串
console.log(he.replace(/h/g, "w"));
// search() 检索与正则表达式相匹配的值,搜索到返回0,否则为1
console.log(he.search(/h/g));
// 	slice() 提取字符串的片断，并在新的字符串中返回被提取的部分。不包括最后的范围 [0,2)
console.log(he.slice(0, 2));
// split() 把字符串分割为子字符串数组。
console.log(he.split(''));
// substr() 从起始索引号提取字符串中指定数目的字符。
console.log(he.substr(1, 3));
// 	substring() 提取字符串中两个指定的索引号之间的字符。
console.log(he.substring(1, 3));
// toLocaleLowerCase() 字符串转小写根据主机的语言
console.log("HElloWord".toLocaleLowerCase());
// toLocaleLowerCase() 字符串转大写根据主机的语言
console.log("HElloWord".toLocaleUpperCase());
// toLowerCase  转小写
console.log("HE".toLowerCase());
// toString() 返回字符串
console.log(hello.toString());
