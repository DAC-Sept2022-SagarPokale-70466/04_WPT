// Class / Object Writing : Literal Syntax


// var person = {
//     Name : "Sagar",
//     Age : 22,
//     Address : "Nashik",
//     print : function(){
//         console.log(this.Name+this.Address+this.Age);
//     }
// }

// console.log(typeof(person));
// person.print();








// Class Writing Using Constructor function



// var Student = function(name, address, age)
//                 {
//                 this.name = name;
//                 this.address = address;
//                 this.age = age;

//                 this.print = function(){
//                         console.log("Heelo");
//                     }


//                 }
// var p1 = new Student("mahesh", "pune", 42);

// p1.print();






// Class Writing using class syntax 

class Student{
    constructor(name, address, age){
        this.name = name;
        this.address = address;
        this.age = age;
    }

    print(){
        console.log("afdfhello");
    }
}


var p1 = new Student("mahesh", "pune", 42);

p1.print();