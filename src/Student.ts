class Student implements Person{
    fullName:string;

    constructor(public firstName:string, public middleInitial:string, public lastName:string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }

    foo(): string {
        return "";
    }

}