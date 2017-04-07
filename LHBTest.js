/**
 * Created by Administrator on 2017/3/14.
 */
/*数组队列
var colors=new Array();
var count =colors.unshift("red","green");
console.log(colors);
count=colors.unshift("black");
console.log(colors);
var item=colors.pop();
console.log(item);
console.log(colors.length);
*/
/*这是我的第一个哟

哈哈
 */
/*排序反转
var values=[0,1,5,10,15];
function compare(value1,value2) {
    return 1;
}
values.sort(compare);
values.reverse();
console.log(values);
*/
/* slice截取，splice增删改
var colors=["red","green","blue","yellow","purple"];
console.log(colors.slice(1));//取参数
console.log(colors.slice(1,4));

console.log(colors.splice(0,1));//参数：1.操作的位置，2.删除的个数，3～.添加的元素
console.log(colors.splice(1,0,"black"));
console.log(colors.splice(1,1,"HB"));
console.log(colors);
    */
/*来一波日期
var date=new Date("1994-06-10");
date=new Date(1994,2,6,1,1,1);
console.log(date.toDateString());
    */
/*正则表达
//g:全局，i:不区分大小写，m:多行
var patten1=/at/i;
var patten2=new RegExp("at","g");

var text="mom and dad and baby";
var pattern =/mom( and dad( and baby)?)?/gi;
var matches=pattern.exec(text);
console.log(matches.index);
console.log(matches.input);
console.log(matches[0]);
console.log(matches[1]);
console.log(matches[2]);
console.log(matches.length);
*/
/*函数声明跟函数表达式区别
console.log(sum(10,10));
function sum(num1,num2) {
    return num1+num2;
}
    */
/*作为值的函数
function callFunction(Function) {
    return Function.apply(this,arguments);
}
function add() {
    var j=0;
    for(var i=1; i< arguments.length;i++){
        j+=Number(arguments[i]);
    }
    return j;
}
var result=callFunction(add,10,11,12,13,14);
console.log(result);
 */
/*对象属性
var person={};
Object.defineProperty(person,"name",{
    writable:false,
    value:"Nicholas",
    configurable:true
});
console.log(person.name);
person.name="Lhb";
delete person.name;
console.log(person.name);
    */
/*构造函数
function Person(name,age,job) {
    this.name=name;
    this.age=age;
    this.job=job;
    this.sayName=function(){
        console.log(this.name);
    }
}

var person1=new Person("LHB",24,"IT");
person1.sayName();
Person("BB",1,"1");
sayName();
*/
/*对象原型
function Person() {
}
Person.prototype.name="LHB";
Person.prototype.age=24;
Person.prototype.job="IT";
Person.prototype.sayName=function () {
    console.log(this.name);
}
var person1=new Person();
Person.prototype.sayName();
*/
/*动态原型模式
function Person() {

}
Person.prototype={
    contructor:Person,
    name:"HB",
    age:24,
    job:"IT",
    sayName:function () {
        console.log(this.name);
    }
};
var friend=new Person();
friend.sayName();
    */
/*原型链
function SuperType(){
    this.property=true;
}
SuperType.prototype.getSuperValue=function () {
    return this.property;
};

function  SubType() {
    this.subproperty=false;
}
SubType.prototype=new SuperType();
SubType.prototype.getSubValue=function () {
    return this.subproperty;
}
//重写超类型中的方法
SubType.prototype.getSuperValue=function () {
    return false;
}
var instance=new SubType();
console.log(instance.getSuperValue());
    */
/*组合继承
function SuperType(name) {
    this.name=name;
    this.color=["red","blue"];
}
SuperType.prototype.sayName=function () {
    console.log(this.name);
}
function  SubType(name,age) {
    SuperType.call(this,name);
    this.age=age;
}
SubType.prototype=new SuperType();
SubType.prototype.sayAge=function () {
    console.log(this.age);
};
var instance1=new SubType("LHB",24);
instance1.color.push("black");
console.log(instance1.color);
instance1.sayName();
instance1.sayAge();

var instance2=new SubType("HB",1);
console.log(instance2.color);
instance2.sayName();
instance2.sayAge();
    */
/*原型式继承
function objecet(o) {
    function F() {

    }
    F.prototype=o;
    return new F();
}
var c={a:"123"};
var s1=objecet(c);
var s2=objecet(c);
s1.b="LHB";
console.log(s2.b);
    */
/*闭包
function creatComparisonFunction(propertyName){
    return function (object1,object2) {
        var value1=object1[propertyName];
        var value2=object2[propertyName];

        if(value1<value2){
            return -1;
        }else if(value1>value2){
            return 1;
        }else{
            return 0;
        }
    };
}

function createFunctions() {
    var result=new Array();

    for(var i=0;i<10;i++){
        result[i]=function () {
            return i;
        }(i);
    }
    return result;
};
console.log(createFunctions());

name="HB";
var object={
    name:"LHB",
    getNameRunc:function () {
        var that=this;
        return function () {
            return that.name;
        };
    }
};
console.log(object.getNameRunc()());
×/
/*模块作用域*/
/*闭包
(function outputNumbers(count) {
    for(var i=0;i<count;i++){
        console.log(i);
    }
    console.log(i);
})(3);
*/

function Person(name) {
    this.getName=function () {
        return name;
    };
    this.setName=function(value){
        name=value;
    };

}

var person=new Person("LHb");
console.log(person.getName());
person.setName("HB");
console.log(person.getName());

(function () {
    return function () {
        var i=10;
        console.log(i);
    }
})();
console.log(i);