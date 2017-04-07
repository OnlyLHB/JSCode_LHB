/**
 * Created by Administrator on 2017/3/20.
 */
/*test
console.log('packet'?true:false);
console.log("true"==true);

var isEven=function (x) {
    console.log(x);
    return (x%2==0)?true:false;

};
var number=[1,2,3,4,5,6,7,8,9];

number.every(isEven);
number.some(isEven);

var LHB=[
    {name:'L',age:16},
    {name:'H',age:12},
    {name:'B',age:14}
];
function compare(a,b) {
    return a.age-b.age;
}
console.log(LHB.sort(compare));
    */
/*Stack 栈
function Stack() {
    var items=[];
    this.push=function (element) {
        items.push(element);
    };

    this.pop=function () {
        return items.pop();
    };

    this.peek=function () {
        return items[items.length-1];
    };

    this.isEmpty=function () {
        return items.length==0;
    };

    this.size=function () {
        return items.length;
    };

    this.clear=function () {
        items=[];
    };

    this.print=function () {
        console.log(items.toString());
    };
}

function baseConverter(decNumber,base) {
    var remStack=new Stack(),
        rem,
        baseString='',
        digits='0123456789ABCDEF';

    while(decNumber>0){
        rem=Math.floor(decNumber%base);
        remStack.push(rem);
        decNumber=Math.floor(decNumber/base);
    }

    while(!remStack.isEmpty()){
        baseString+=digits[remStack.pop()];
    }

    return baseString;
}

console.log(baseConverter(10,16));
    */
/*Queue 队列
function Queue() {
    var items=[];
    this.enqueue=function (element) {
        items.push(element);
    };

    this.dequeue=function () {
        return items.shift();
    };

    this.front=function () {
        return items[0];
    };

    this.isEmpty=function () {
        return items.length==0;
    };

    this.size=function () {
        return items.length;
    };

    this.print=function () {
        console.log(items.toString());
    };

    this.clear=function () {
        items=[];
    };
}

function PriorityQueue() {
    var items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priorirty = priority;
    }

    this.enqueue = function (element, priority) {
        var queueElement = new QueueElement(element, priority);

        if (this.isEmpty()) {
            items.push(queueElement);
        } else {
            var added = false;
            for (var i = 0; i < items.length; i++) {
                if (queueElement.priorirty < items[i].priorirty) {
                    added = true;
                    items.splice(i, 0, queueElement);
                    break;
                }
            }
            if (!added) {
                items.push(queueElement);
            }

        }
    };
}*/

/*LinkList 单向链表
function LinkedList() {
    var Node=function (element) {
        this.element=element;
        this.next=null;
    };

    var length=0;
    var head=null;

    this.append=function (element) {
        var node=new Node(element),
            current;

        if(head===null){
            head=node;
        }else{
            current=head;

            while(current.next){
                current=current.next;
            }

            current.next=node;
        }

        length++;
    };

    this.insert=function (position,element) {
        if(position>-1&&position<=length){
            var node=new Node(element),
                current=head,
                previous,
                index=0;

            if(position==0){
                node.next=current;
                head=node;
            }else{
                while (index++<position){
                    previous=current;
                    current=current.next;
                }

                previous.next=node;
                node.next=current;
            }
            length++;
            return true;
        }else{
            return false;
        }
    };

    this.removeAt=function (position) {
        if(position>-1&&position<length){
            var current=head,
                previous,
                index=0;

            if(position==0){
                head=current.next;
            }else{
                while (index++<position){
                    previous=current;
                    current=current.next;
                }
                previous.next=current.next;
            }

            length--;
            return current.element;
        } else{
            return null;
        }
    };

    this.remove=function (element) {
        var index=this.indexOf(element);
        return this.removeAt(index);
    };

    this.indexOf=function (element) {
        var current=head,
            index=-1;

        while (current){
            if(element==current.element){
                return index;
            }
            index++;
            current=current.element;
        }
        return -1;
    };

    this.isEmpty=function () {
        return length===0;
    };

    this.size=function () {
        return length;
    };

    this.toString=function () {
        var current=head,
            string='';

        while(current){
            string+=current.element;
            current=current.next;
        }

        return string;
    };

}

var list=new LinkedList();
list.append(10);
list.append(15);

console.log(list.toString());*/

/*DoublyLinkedList 双向链表
function DoublyLinkedList() {

    var Node=function (element) {

        this.element=element;
        this.prev=null;
        this.next=null;

    };

    var length=0;
    var head=null;
    var tail=null;

    this.insert=function (position,element) {

        if(position>-1&&position<=length){

            var node=new Node(element),
                current=head,
                previous,
                index=0;

            if(position===0){

                if(!head){
                    head=node;
                    tail=node;
                }else{
                    node.next=current;
                    current.prev=node;
                    head=node;
                }
            }else if(position===length){
                current=tail;
                current.next=node;
                node.prev=current;
                node.next=tail;
            }else{
                while (index++<position){
                    previous=current;
                    current=current.next;
                }
                node.next=current;
                node.prev=previous;
                previous.next=node;
                current.prev=node;

            }

            length++;
            return true;
        }else{
            return false;
        }
    };
}
 */
/*Set 集合
function Set() {
    var items={};

    this.has=function (value) {
        return value in items;
    };

    this.has=function (value) {
        return items.hasOwnProperty(value);
    };

    this.add=function (value) {
        if(!this.has(value)){
            items[value]=value;
            return true;
        }
        return false;
    };

    this.remove=function (value) {
        if(this.has(value)){
            delete items[value];
            return true;
        }
        return false;
    };

    this.clear=function () {
        items={};
    };

    this.size=function () {
        return Object.keys(items).length;
    }

    this.sizeLegacy=function () {
        var count=0;
        for(var prop in items){
            if(items.hasOwnProperty(prop)){
                ++count;
            }
        }
    };

    this.valuesLegacy=function () {
        var keys=[];
        for(var key in items){
            keys.push(key);
        }
        return keys;
    };

    this.union=function (otherSet) {
        var unionSet=new Set();

        var values=this.valuesLegacy();
        for(var i=0;i<values.length;i++){
            unionSet.add(values[i]);
        }

        values=otherSet.valuesLegacy();
        for(var i=0;i<values.length;i++){
            unionSet.add((values[i]));
        }

        return unionSet;
    };
}
var set1=new Set();
var set2=new Set();

set1.add(1);
set1.add(2);
set2.add(3);
console.log(set1.toString());
console.log(set1.union(set2).valuesLegacy());
    */
/*Dictionary 字典
function Dictionary() {
    var items={};
    
    this.has=function (key) {
        return key in items;
    };

    this.set=function (key,value) {
        items[key]=value;
    };

    this.remove=function (key) {
        if(this.has(key)){
            delete items[key];
            return true;
        }
        return false;
    };

    this.get=function (key) {
        return this.has(key)?items[key]:undefined;
    };

    this.values=function () {
        var values=[];
        for(var k in items){
            if(this.has(k)){
                values.push(items[k]);
            }
        }
        return values;
    };
}*/

/*哈希表
function HashTable() {
    var table=[];

    var loseloseHashCode=function (key) {
        var hash=0;
        for(var i=0;i<key.length;i++){
            hash+=key.charCodeAt(i);
        }
        return hash%37;
    };

    this.put=function (key,value) {
        var position=loseloseHashCode(key);
        console.log(position+'-'+key);
        table[position]=value;
    };

    this.get=function (key) {
        return table[loseloseHashCode(key)];
    };

    this.remove=function (key) {
        table[loseloseHashCode(key)]=undefined;
    };

    this.toString=function () {
        return table.toString();
    };

    var ValuePair=function (key,value) {
        this.key=key;
        this.value=value;

        this.toString=function () {
            return '['+this.key+'-'+this.value+']';
        }
    };
    
    this.put=function (key,value) {
        var position=loseloseHashCode(key);

        if(table[position]==undefined){
            table[position]=new LinkedList();
        }
        table[position].append(new ValuePair(key,value));;
    }
}

var hash=new HashTable();
hash.put('LHB','Cool');
hash.put('LHB','Cool');
console.log(hash[30]);
    */
/*哈希表改进
var SJHashCode=function (key) {
    var hash=5381;
    for(var i=0;i<key.length;i++){
        hash=hash*33+key.charCodeAt(i);
    }
    return hash%1013;
}
    */
/*二叉树
function BinarySearchTree() {

    var Node=function (key) {
        this.key=key;
        this.left=null;
        this.right=null;
    };

    var root=null;

    this.insert=function (key) {

        var newNode=new Node(key);

        if(root===null){
            root=newNode;
        }else{
            insertNode(root,newNode);
        }
    };

    this.insertList=function () {
        for(var i=0;i<arguments.length;i++){
            this.insert(arguments[i])
        }
    };

    var insertNode=function (node,newNode) {
        if(newNode.key<node.key){
            if(node.left===null) {
                node.left = newNode;
            }else{
                insertNode(node.left,newNode);
            }
        }else{
            if(node.right===null){
                node.right=newNode;
            }else{
                insertNode(node.right,newNode);
            }
        }
    }

    this.inOrderTraverse=function (callback) {
        inOrderTraverseNode(root,callback);
    };

    var inOrderTraverseNode=function (node,callback) {
        if(node!==null){
            inOrderTraverseNode(node.left,callback);
            callback(node.key);
            inOrderTraverseNode(node.right,callback);
        }
    }

}
function printNode(value) {
    console.log(value);
}
var tree=new BinarySearchTree();
tree.insertList(11,7,15,5,3,9,8,10,13,12,14,20,18,25,6);
tree.inOrderTraverse(printNode);
    */
/*图
function Graph() {
    var vertices=[];
    var adjList=new Dictionary();

    this.addVertex=function (v) {
        vertices.push(v);
        adjList.set(v,[]);
    };

    this.addEdge=function(v,w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };

    var initializeColor=function () {
        var color=[];
        for(var i=0;i<vertices.length;i++){
            color[vertices[i]]='white';
        }
        return color;
    };

    this.bfs=function (v,callback) {
        var color=initializeColor(),
            queue=new Queue(),
            d=[],
            pred=[];
        queue.enqueue(v);

        for(var i=0;i<vertices.length;i++){
            d[vertices[i]]=0;
            pred[vertices[i]]=null;
        }

        while(!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);


            color[u] = 'grey';
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] === 'white') {
                    color[w] = 'grey';
                    d[w]=d[u]+1;
                    pred[w]=u;
                    queue.enqueue(w);
                }
            }
            color[u] = 'black';

        }
        return {
            distances:d,
            predecessors:pred
        };
    };

    var time=0;

    this.dfs=function () {
        var color=initializeColor(),
            d=[],
            f=[],
            p=0;
        time=0;

        for(var i=0;i<vertices.length;i++){
            f[vertices[i]]=0;
            d[vertices[i]]=0;
            p[vertices[i]]=null;
        }

        dfsVisit(vertices[0],color,d,f,p)

        return {
            discovery:d,
            finished:f,
            predecessors:p
        };
    };

    var dfsVisit=function (u,color,d,f,p) {
        color[u]='grey';
        d[u]=++time;
        var neighbors=adjList.get(u);
        for(var i=0;i<neighbors.length;i++){
            var w=neighbors[i];
            if(color[w]==='white'){
                p[w]=u;
                dfsVisit(w,color,d,f,p);
            }
        }
        color[u]='black';
        f[u]=++time;
        console.log('explored '+u);
    };
}

var graph=new Graph();
var myVertices=['A','B','C','D','E','F','G','H','I'];
for(var i=0;i<myVertices.length;i++){
    graph.addVertex(myVertices[i]);
}

graph.addEdge('A','B');
graph.addEdge('A','C');
graph.addEdge('A','D');
graph.addEdge('C','D');
graph.addEdge('C','G');
graph.addEdge('D','G');
graph.addEdge('D','H');
graph.addEdge('B','E');
graph.addEdge('B','F');
graph.addEdge('E','I');


function printNode(value) {
    console.log('Visited vertex:'+value);
}

//var shortestPathA=graph.bfs(myVertices[0],printNode);

graph.dfs();
    */
/* 算法
function ArrayList() {

    var array = [];

    this.insert = function (item) {
        array.push(item);
    };

    this.toString = function () {
        return array.join();
    };

    //冒泡
    this.bubbleSort = function () {
        var length = array.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    swap(j, j + 1);
                }
            }
        }
    };

    //选择排序
    this.selectionSort = function () {
        var length = array.length,
            indexMin;
        for (var i = 0; i < length - 1; i++) {
            indexMin = i;
            for (var j = i + 1; j < length; j++) {
                if (array[indexMin] > array[j]) {
                    indexMin = j;
                }
            }
            if (i !== indexMin) {
                swap(i, indexMin);
            }
        }
    };

    var swap = function (index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };
    //归并排序
    this.mergeSort = function () {
        array = mergeSortRec(array);
    }

    var mergeSortRec = function (array) {
        var length = array.length;
        if (length == 1) {
            return array;
        }
        var mid = Math.floor(length / 2),
            left = array.slice(0, mid),
            right = array.slice(mid, length);

        return merge(mergeSortRec(left), mergeSortRec(right));
    };

    var merge = function (left, right) {
        var result = [],
            il = 0,
            ir = 0;

        while (il < left.length && ir < right.length) {
            if (left[il] < right[ir]) {
                result.push(left[il++]);
            } else {
                result.push(right[ir++]);
            }
        }

        while (il < left.length) {
            result.push(left[il++]);
        }

        while (ir < right.length) {
            result.push(right[ir++]);
        }

        return result;
    };

    //快速排序
    this.quickSort = function () {
        quick(array, 0, array.length - 1);
    }

    var quick = function (array, left, right) {

        var index;

        if (array.length > 1) {

            index = partition(array, left, right);

            if (left < index - 1) {
                quick(array, left, index - 1);
            }

            if (index < right) {
                quick(array, index, right);
            }
        }
    };

    var partition=function(array, left, right) {

        var pivot = array[Math.floor((right + left) / 2)],
            i = left,
            j = right;

        while (i <= j) {
            while (array[i] < pivot) {
                i++;
            }

            while (array[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swapQuickStort(array, i, j);
                i++;
                j--;
            }
        }

        return i;
    };

    var swapQuickStort = function (array, index1, index2) {
        var aux = array[index1];
        array[index1] = array[index2];
        array[index2] = aux;
    };
    
    //搜索算法
    //顺序搜索
    this.sequentialSearch=function (item) {
        for(var i=0;i<array.length;i++){
            if(item===array[i]){
                return i;
            }
        }
        return -1;
    };

    this.binarySearch=function (item) {
        this.quickSort();

        var low=0,
            high=array.length-1,
            mid,element;

        while(low<=high){
            mid=Math.floor((low+high)/2);
            element=array[mid];
            if(element<item){
                low=mid+1;
            }else if(element>item){
                high=mid-1;
            }else{
                return mid;
            }
        }
        return -1;
    };
}
 */
/*
function MinCoinChange(coins) {
    var coins = coins;
    var cache = {};

    this.makeChange = function (amount) {
        var me = this;
        if (!amount) {
            return [];
        }
        if (cache[amount]) {
            return cache[amount];
        }

        var min = [], newMin, newAmount;
        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i];
            newAmount = amount - coin;
            if (newAmount >= 0) {
                newMin = me.makeChange(newAmount);
            }
            if (newAmount >= 0 &&
                (newMin.length < min.length - 1 || !min.length)
                && (newMin.length || !newAmount)) {
                min = [coin].concat(newMin);
                console.log('new Min ' + min + ' for ' + amount);
            }
        }
        return (cache[amount] = min);
    };

}
var minCoinChange=new MinCoinChange([1,5,10,25]);
console.log(minCoinChange.makeChange(10));
*/
function LetterCapitalize(str) {
    var s=str.split(' ');
    for(var i=0;i<s.length;i++){
        var t=s[i].charCodeAt(0);
        if(t>=97&&t<=122){
            s[i]=String.fromCharCode(t-32)+s[i].slice(1);
        }
    }
    return s.join(' ');
}

console.log(LetterCapitalize('i l h'));