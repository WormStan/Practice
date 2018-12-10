# Lesson 1: What's Type Script

## Font-end Skills

- HTML
- CSS
- JavaScript

## What's TypeScript

TypeScript是一种由微软开发的自由和开源的编程语言。它是JavaScript的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。

## Demo 1 -- A simple page

- A HTML page
- Add some style?
- Click me!

### Create a HTML page

```HTML
    <!DOCTYPE html>
    <html>

    <head>
        <meta charset="utf-8" />
        <title>Logix TS Traning -- Lesson 1</title>
        <link rel="stylesheet" type="text/css" media="screen" href="style.css" />
        <script src="main.js"></script>
    </head>

    <body>
        <h1 id="my_h1">my first HTML page</h1>
        <button onclick="changeColor();">Click Me!</button>
    </body>

    </html>
```

### Add some style via CSS file

```CSS
    h1{
        color:blue;
    }
```

### Click me let me change a color

```JAVASCRIPT
    function changeColor() {
        var myh1 = document.getElementById("my_h1");
        myh1.style = "color:red";
    }
```

## Demo 2 -- Let's try TypeScript

- [PlayGround](https://www.typescriptlang.org/play/index.html)