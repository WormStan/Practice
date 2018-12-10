# Lesson 2: Data Types & print variable

## DataType in common use

- string
- number
- boolean
- any
- array
- tuple
- enum

### string

`let stringTest:string = "I am a string";`

### number

`let numberTest:number = 777;`

### boolean

`let booleanTest:boolean = true;`

### any

`let anyTest:any = "Any type is OK for me";`

### array

`let arrayTest:Array<number> = [1,2,3];`
`let arrayTest:string[] = ["A","B","C"];`
`let arraytt:any[] = ["This is a string",7,false];`

### tuple

`let tupleTest: [string,number];`
`tupleTest = ['This is a string',10]; //ok`
`tupleTest = [10,'This is a string']; //error`

### enum

`enum Animals {Dog = "wang wang",Cat = "miao miao",Fish = "sorry, I can't"};`
`let dog:Animals = Animals.Dog;`

## Print variable

### Demo 1 -- window.alert()

```JAVASCRIPT
let my_first_alert: string = "You can see me when you open the browser!";
window.alert();
```

### Demo 2 -- console.log()

```JAVASCRIPT
let my_first_console: number = 7;
console.log(my_first_console);
```

### Demo 3 -- use HTML

#### HTML

```HTML
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>Logix TS Traning -- Lesson 2</title>
    <script src="main.js"></script>
</head>

<body>
    <button onclick="addHeader();">Click Me!</button>
</body>

</html>
```

#### JavaScript

```JAVASCRIPT
function addHeader() {
    let headerText = "Lesson 2 -- Data Types & print variable";
    var node = document.createElement('h1');
    var text = document.createTextNode(headerText);
    node.appendChild(text);
    document.body.appendChild(node);
}
```