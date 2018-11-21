interface TestInterface { 
    test_name: string;
    test_age: number;
}

class TestClass implements TestInterface { 
    test_name = "test";
    test_age = 15;

    testfunc() { 
        console.log(`My name is ${this.test_name} and my age is ${this.test_age}`);
        return "Done";
    }   
}

let kk = new TestClass();
let testshot =  kk.testfunc();
//console.log(testshot);

let node = document.createElement('p');
let text = document.createTextNode("This is my name");
node.appendChild(text);
node.id = 'testP';
document.body.appendChild(node);

let willChange = document.getElementById('testP');

willChange.hidden = false;

let array_Test: Array<any> = [0, 1, "test"];

array_Test.forEach(test_text => console.log(`Text is ${test_text}`));

var a:number;
while (true) { 
    setInterval(a => Math.random() * 100, 5000);
    if (a < 50||a>70) {
        break;
    }
    console.log(a);

}

switch (a) { 
    case 1: console.log("1");
        break;
    case 2: console.log(2);
        break;
    default:
        console.log("I am default");
}

