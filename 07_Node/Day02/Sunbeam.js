function GoodMorning()
{
    console.log("Good Morning to all")
}

function GoodAfternoon()
{
    console.log("Good Afternoon")
}

class Student
{
    constructor(no, name , address)
    {
        this.No = no;
        this.Name = name;
        this.Address = address;
    }

    GetDetails = ()=>{
        return this.No + this.Name + this.Address;
    }
}

var someValue = 30;

module.exports = {GoodAfternoon, GoodMorning, someValue, Student};