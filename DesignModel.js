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
/*Function.prototype.apply.apply
Function.prototype.uncurrying=function () {
    var self=this;
    return function () {
        var obj=Array.prototype.shift.call(arguments);
        return self.apply(obj,arguments);
    }
};

var push=Array.prototype.push.uncurrying();

(function () {
    push(arguments,4,5);
    console.log(arguments);
})(1,2,3);


var call =Function.prototype.call.uncurrying();
var fn =function (name) {
    console.log(name);
};
call(fn,this,'sven');

var apply=Function.prototype.apply.uncurrying();
var fn =function (name) {
    console.log(this.name);
    console.log(arguments);
};
apply(fn,{name:'sven'},[1,2,3]);
    */
/*单例模式实现
var Singleton=function (name) {
    this.name=name;
};

Singleton.getInstance=(function () {
    var instance=null;
    return function (name) {
        if(!instance){
            instance=new Singleton(name);
        }
        return instance;
    }
})();

var a=Singleton.getInstance('sven1');
var b=Singleton.getInstance('sven2');

console.log(a===b);
    */
/*透明的单例模式
var CreateDiv=(function () {
    var instance;

    var CreateDiv=function (html) {
        if(instance){
            return instance;
        }
        this.html=html;
        this.init();
        return instance=this;
    };

    CreateDiv.prototype.init=function () {
        console.log(1);
    };
    return CreateDiv;
})();

var a=new CreateDiv('sven1');
var b=new CreateDiv('sven2');

console.log(a===b);
*/
/*代理实现单例模式
var CreateDiv=function (html) {
    this.html=html;
    this.init();
};

CreateDiv.prototype.init=function () {
    console.log(1);
};

var ProxySingletonCreateDiv=(function () {
    var instance;
    return function (html) {
        if(!instance){
            instance=new CreateDiv(html);
        }

        return instance;
    }
})();

var a=new ProxySingletonCreateDiv('sven1');
var b=new ProxySingletonCreateDiv('sven2');

console.log(a===b);
 */
/*动态创建命名空间
var MyApp={};

MyApp.namespace=function (name) {
    var parts=name.split('.');
    var current=MyApp;
    for(var i in parts){
        if(!current[parts[i]]){
            current[parts[i]]={};
        }
        current=current[parts[i]];
    }
};
    MyApp.namespace('event');
    MyApp.namespace('dom.style');

    console.log(MyApp);
    */
/*对象动态赋值
    var a={};
    c=a;
    c['b']={};
    c=c['b'];
    c['c']={};
    c=c['c'];
    console.log(a);
    */
/*单例模式
var getSingle=function (fn) {
    var result;
    return function () {
        return result||(result=fn.apply(this,arguments));
    }
};
*/
/*代理延迟
var Flower=function () {};
var xiaoming={
    sendFlower:function (target) {
        var flower=new Flower();
        target.receiveFlower(flower);
    }
};

var B={
    receiveFlower:function (flower) {
        A.listenGoodMood(function () {
            A.receiveFlower(flower);
        });
    }
};

var A={
    receiveFlower:function (flower) {
        console.log("receiveFlower " +flower);
    },
    listenGoodMood:function (fn) {
        setTimeout(function () {
            fn();
        },10000);
    }
};

xiaoming.sendFlower(B);

*/
/*代理缓存
var mult=function () {
    console.log('开始计算乘积');
    var a=1;
    for(var i=0,l=arguments.length;i<l;i++){
        a=a*arguments[i];
    }
    return a;
};
mult(2,3);
mult(2,3,4);

var proxyMult=function (fn) {
    var cache={};
    return function () {
        var args=Array.prototype.join.call(arguments,',');
        if(args in cache){
            return cache[args];
        }
        return cache[args]=fn.apply(this,arguments);
    }
};

var proxyPlus=proxyMult(mult);
proxyPlus(1,2,3,4);
proxyPlus(1,2,3,4);
    */
/*
var each=function (ary,callback) {
    for(var i=0,l=ary.length;i<l;i++){
        var value=callback.call(ary[i],i,ary[i]);
        if(value===false) {
            break;
        }
    }
};

var compare=function (ary1,ary2) {
    if(ary1.length!==ary2.length){
        console.log("ary1和ary2不相等");
    }
    each(ary1,function (i) {
        if(ary1[i]!==ary2[i]){
            console.log("ary1和ary2不相等");
            return false;
        }
    });

    console.log('相等');
};

compare([2,2,3],[1,2,4]);
 */
/* JQ each
$.each=function (obj,callback) {
    var value,
        i=0,
        length=obj.length,
        isArray=isArraylike(obj);

    if(isArray){
        for(;i<length;i++){
            value=callback.call(obj[i],i,obj[i]);

            if(value===false){
                break;
            }
        }
    }else{
        for(i in obj){
            value=callback.call(obj[i],i,obj[i]);

            if(value===false){
                break;
            }
        }
    }

    return obj;
};
*/
/*发布订阅模式
var Event=(function () {
    var clientList={},
        listen,
        trigger,
        remover;

    listen=function (key,fn) {
        if(!clientList[key]){
            clientList[key]=[];
        }
        clientList[key].push(fn);
    };

    trigger=function () {
        var key = Array.prototype.shift.call(arguments),
            fns = clientList[key];
        if (!fns || fns.length === 0) {
            return false;
        }
        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    };
});
*/
/*组合模式
    var Folder=function (name) {
        this.name=name;
        this.parent=null;
        this.files=[];
    };

    Folder.prototype.add=function (file) {
        file.parent=this;
        this.files.push(file);
    };

    Folder.prototype.scan=function () {
        console.log('开始扫描文件夹:'+this.name);
        for(var i=0,file,files=this.files;file=files[i++];){
            file.scan();
        }

    };

    Folder.prototype.remove=function () {
        if(!this.parent){
            return;
        }
        for(var files=this.parent.files,l=files.length-1;l>=0;l--){
            var file=files[l];
            if(file===this){
                files.splice(l,1);
            }
        }
    };

    var File=function (name) {
        this.name=name;
        this.parent=null;
    };

    File.prototype.add=function () {
        throw new Error('不能添加在文件下面');
    };

    File.prototype.scan=function () {
        console.log('开始扫描文件：'+this.name);
    };

    File.prototype.remove=function () {
        if(!this.parent){
            return ;
        }
        for(var files=this.parent.files,l=files.length-1;l>=0;l--){
            var file=files[l];
            if(file===this){
                files.splice(l,1);
            }
        }
    };

*/
/*
var Beverage=function () {};

Beverage.prototype.boilWater=function () {
    console.log('把水煮沸');
};

Beverage.prototype.brew=function () {};

Beverage.prototype.pourInCup=function(){};

Beverage.prototype.addCondiments=function () {};

Beverage.prototype.init=function(){
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
};

var Coffee=function () {};

Coffee.prototype=new Beverage();

Coffee.prototype.brew=function () {
    console.log('用沸水冲泡咖啡');
};

Coffee.prototype.pourInCup=function () {
    console.log('把咖啡倒进杯子');
};

Coffee.prototype.addCondiments=function () {
    console.log('加糖和牛奶');
};

var Coffee=new Coffee();
Coffee.init();
*/
/*AOP 职责链模式
Function.prototype.after=function (fn) {
    var self=this;
    return function () {
        var ret=self.apply(this,arguments);
        if(ret==='nextSuccessor'){
            return fn.apply(this,arguments);
        }

        return ret;
    }
}

*/
/*AOP装饰函数
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

var func=function () {
    console.log(1);
};

func.a='a';
console.log(func.a);

func=func.after(function () {
    console.log(2);
});

console.log(func.a);
    */
/*状态模式

var StateFactory=(function () {

    var State=function () {

    };

    State.prototype.clickHandler1=function () {
        throw new Error('子类必须重写父类的clickHander1方法');
    };

    State.prototype.clickHandler2=function () {
        throw new Error('子类必须重写父类的clickHandler2方法');
    };

    return function (param) {

        var F=function (uploadObj) {
            this.uploadObj=uploadObj;
        };

        F.prototype=new State();

        for(var i in param){
            F.prototype[i]=param[i];
        }

        return F;
    }
})();
    */