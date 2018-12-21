# Function

## What's function

我们回顾一下小学时学的二元一次方程式: y = x+5, 当x发生变化时, y的值始终是x的值与5的和.

函数: 有两个变量 x 和 y ，当 x 取其变化范围中的每一个特定值时，相应地有唯一的 y 与它对应，则称 y 是 x 的函数。记为 y = f （ x ），其中 x 为自变量， y 为因变量。

在TypeScript中, 我们可以用如下代码来解释这个函数.

```TYPESCRIPT
function calcY(x:number):number{
    return x+5;
}

let calcResult: number = calcY(5);
alert(calcResult);

```

## optional parameters -- 精致女人的年龄

```TYPESCRIPT
function getInfo(name:string,title:string,age?:number){
    alert(`my name is ${name}, my title is ${title}`);
    if (age) {
        alert(`my age is ${age}`);
    }
    else {
        alert("my age is a secret!");
    }
}
getInfo("XiaoNa","Tester",30)
```

## ...arguments

```TYPESCRIPT
function getInfo(name:string,title:string,...description:any[]){
    alert(`my name is ${name}, my title is ${title}, and ${description.join(",")}`)
}

getInfo("XiaoNa","Tester",["my age is",5]);
```

## ()=>

### Demo -- 1, callback

```TYPESCRIPT
let arrowArray: Array<string> = [];
arrowArray.push("test1");
arrowArray.push("test2");

arrowArray.forEach((value) => {
    alert(value);
});
```

### Demo -- 2, anonymous function

```TYPESCRIPT
let functionA:number = function(x:number,y:number){return alert(x+y)}
functionA(5,6);
```

```TYPESCRIPT
let functionA = (x, y) => { return alert(x + y) };
functionA(5,6);
```

### Demo -- 3, this

```TYPESCRIPT
class TestThis {
    testThis: string = "I am THIS";
    useFunc() {
        return (function () {
            alert(this.testThis); // Here, this is for window
        })();
    }

    useArrow() {
        return (() => {
            alert(this.testThis); // Here, this is for TestThis
        })();
    }
}

let test = new TestThis();
test.useFunc();
test.useArrow();
```