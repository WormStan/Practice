# Lesson 3: String

## Multiple Lines

```TYPESCRIPT
let multiple_string:string = `I am a multiple lines string,
look, I can use ENTER in this string instead of \\n`;

console.log(multiple_string);
```

## String Index

```TYPESCRIPT
let string_index:string = "0123456789"
alert("I am index:"+string_index[5]);
```

## Use \ to convert

```TYPESCRIPT
let string_convert:string = "Here I'd like to use \"Double quotation marks\"";
alert(string_convert);
```

## String length

```TYPESCRIPT
let string_length:string = "Do you know my length?"
alert("My length is:"+string_length.length);
```

## String to Array

```TYPESCRIPT
let string_array:string = "test1,test2,test3"
let array_demo:string[] = string_array.split(",");
console.log(array_demo)
for (let item of array_demo){
    alert(item);
}
```

## String Templates

```TYPESCRIPT
let company:string = "RockwellAutomation";
let address:string = "DLSP";
let emp_number = 50;

alert(`My company is ${company},
You can find me at ${address}, you can find my contect number ${emp_number}`);
```
