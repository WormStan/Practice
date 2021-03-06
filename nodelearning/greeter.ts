interface Person{
    firstName: string;
    lastName: string;
}

class Student{
    fullName: string;
    constructor(public firstName:string,public middleInitial:string,public lastName:string)
    {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


function greeter(person:Person){
    return "Hello, " + person.firstName+" "+person.lastName;
}

let User = new Student("Jane","M","User");
console.log(typeof(User));

document.body.innerHTML = greeter(User);