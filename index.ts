interface People {
    name : string,
    age : number,
    isLegal : () => boolean
}




class Manager implements People {
    name : string;
    age : number;
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;

    }
    isLegal(){
        return this.age > 18
    }

}

let m = new Manager("john",30)
console.log(m.isLegal())

class God extends Manager{
    constructor(name:string,age:number){
        super(name,age)

    }
}