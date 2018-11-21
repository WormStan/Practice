//Usage for interface implements.
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


//Usage for dom operation.
let node = document.createElement('p');
let text = document.createTextNode("This is my name");
node.appendChild(text);
node.id = 'testP';
document.body.appendChild(node);
let willChange = document.getElementById('testP');
willChange.hidden = false;


//Usage for arrow funciton.
let array_Test: Array<any> = [0, 1, "test"];
array_Test.forEach(test_text => console.log(`Text is ${test_text}`));


//Usage for While loop
var a: number;
while (a == 50) { 
    setInterval(a => Math.random() * 100, 5000);
    if (a < 50) {
        break;
    }
}


//Usage for switch method
switch (a) { 
    case 1: console.log("1");
        break;
    case 2: console.log(2);
        break;
    default:
        console.log("I am default");
}

// Add label for function.
test: function testLabel() {

    console.log("I am label test");
}
testLabel();


// Add description for Class and Function.
/**
* This is test for the class description.
*/
class Test { 
    /**
    * This is test for the function description.
    */
    test() { 
    }
}

let t = new Test();