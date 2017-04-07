/**
 * Created by Administrator on 2017/4/1.
 */
/*
var duck={
    duckSinging:function () {
        console.log('嘎嘎嘎');
    }
};

var chicken={
    duckSinging:function () {
        console.log('嘎嘎嘎');
    }
};

var choir=[];

var pushChoir=function (animal) {
    if(animal&&typeof animal.duckSinging=="function" ) {
        choir.push(animal);
        console.log('合唱团数量：' + choir.length);
    }
};

pushChoir(duck);
pushChoir(chicken);
    */
/*多态
var makeSound=function (animal) {
    animal.sound();
};
var Duck=function () {
    this.sound=function () {
        console.log("嘎嘎嘎");
    }
};
var Chicken=function () {
    this.sound=function () {
        console.log("咯咯咯");
    }
};

makeSound(new Duck());
makeSound(new Chicken());

*/
/*原型模式
var Plane=function () {

    this.attackLevel=1;
    this.defenseLevel=1;
};
Plane.prototype.blood=100;
var plane=new Plane();
plane.blood=500;
plane.attackLevel=10;
plane.defenseLevel=7;

var clonePlane=new Plane();
console.log(clonePlane.blood);
    */
/* js Class
class Animal{
    constructor(name){
        this.name=name;
    }
    getName(){
        return this.name;
    }
}

class Dog extends Animal{
    constructor(name){
        super(name);
    }
    speak(){
        return "woof";
    }
}

var dog=new Dog("Scamp");
console.log(dog.getName()+' says '+dog.speak());
*/
/*this 在普通函数
name='globalName';

var getName=function () {
    return this.name;
};

console.log(getName());

var myObject={
    name:'sven',
    getName:function () {
        return this.name;
    }
};

var getName=myObject;
console.log(getName.getName());*/

/*返回对象
var MyClass=function () {
    this.name='sven';
    return {
        name:'anne'
    }
};

var obj=new MyClass();
console.log(MyClass.name);
    */
/*值得研究
document.getElementById=(function (func) {
  return function () {
      return func.apply(document,arguments);
  }
})(document.getElementById);
*/
/*bind
Function.prototype.bind=function(){
    var self=this,
        context=[].shift.call(arguments),
        args=[].slice.call(arguments);
    return function () {
        return self.apply(context,[].concat.call(args,[].slice.call(arguments)));
    }
};
var obj={
    name:'sven'
};

var func=function(a,b,c,d){
    console.log(arguments);
}.bind(obj,1,2);

func(3,4);

(function(){
    Array.prototype.push.call(arguments,3);
    console.log(arguments);
})(1,2);
*/
/*
闭包

var Type={};

for(var i=0,type;type=['String','Array','Number'][i++];){
    (function (type) {
        Type['is'+type]=function (obj) {
            return Object.prototype.toString.call(obj) === '[object ' + type + ']';
        }
    })(type)
};

console.log(Type.isArray([]));
console.log(Type.isString("str"));

var mult=(function () {
    var cache={};
    var args=Array.prototype.join.call(arguments,',');

    var caculate=function () {
        var a=1;
        for(var i=0,l=arguments.length;i<l;i++){
            a*=arguments[i];
        }
        return a;
    };
    return function () {

        if(cache[args]){
            return cache[args];
        }

        return cache[args]=caculate.apply(this,arguments);
    }
})();
console.log(mult(1,2,3));
console.log(mult(1,2,3));
    */
/*AOP
Function.prototype.before=function (beforefn) {
    var __self=this;
    return function () {
        beforefn.apply(this,arguments);
        return __self.apply(this,arguments);
    }
};

Function.prototype.after=function (afterfn) {
    var __self=this;
    return function () {
        var ret=__self.apply(this,arguments);
        afterfn.apply(this,arguments);
        return ret;
    }
};

var func=function(){
    console.log(2);
};

func=func.before(function () {
    console.log(1);
}).after(function(){
    console.log(3);
});

func();

var currying=function(fn){
    var args=[];

    return function () {
        if(arguments.length===0){
            return fn.apply(this,args);
        }else{
            [].push.apply(args,arguments);
            return arguments.callee;
        }
    }
};
var cost=(function() {
    var money = 0;

    return function () {
        for (var i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i];
        }
        return money;
    }
})();

var cost=currying(cost);

cost(100);
cost(200);

console.log(cost());
 */
Function.prototype.uncurrying=function () {
    var self=this;
    return function () {
        var obj=Array.prototype.shift.call(arguments);
        return self.apply(obj,arguments);
    }
};

var push=Array.prototype.push.uncurrying();

(function () {
    push(arguments,4);
    console.log(arguments);
})(1,2,3);
