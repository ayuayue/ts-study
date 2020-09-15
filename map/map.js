/**
 * File: \map.ts
 * Project: map
 * Created Date: 2020-09-13
 * Author: caoayu
 * -----
 * Last Modified: 2020-09-13 6:35:24 pm
 * Modified By: the developer formerly known as caoayu at 1401262639@qq.com
 * -----
 * Copyright (c) 2020 caoayu
 * -----
 * HISTORY:
 */
// Map 对象保存键值对，并且能够记住键的原始插入顺序。
let myMap = new Map();
// set 设置键值对
myMap.set("name", "lisa");
// get 获取键的值
console.log(myMap.get("name")); // 不存在返回 undefined
// has 判断是否存在键
console.log(myMap.has("name"));
// size 返回数量
console.log(myMap.size);
// keys 返回所有的键
console.log(myMap.keys());
// values 返回所有的值
console.log(myMap.values());
// delete 删除键对应的值
console.log(myMap.delete("name"));
// clear 清空
myMap.set("age", 18);
console.log(myMap.clear());
console.log(myMap);
// 迭代map for of 
let newMap = new Map();
newMap.set("name", "lihua");
newMap.set("age", 18);
for (let [k, v] of newMap) {
    console.log(k, v);
}
let arr = new Array("12", 2);
console.log(arr);
