 abstract class  Dog {
    protected name:string;
    protected breed:string;
    protected age:number;
    
    constructor(name:string,breed:string,age:number){
        this.name = name;
        this.breed = breed;
        this.age = age;
    };
    public showDog():void{
        console.log('name:',this.name);
        console.log('breed:',this.breed);
        console.log('age:',this.age);
    }
    public getAge():number{
        return this.age;
    }
    public setAge(newAge:number):void{
        if ((newAge<30)&&(newAge>0)) this.age = newAge;
    }
}

class HunterDog extends Dog{
    private power:number;
        
    constructor(name:string,breed:string,age:number,power:number){
        super(name,breed,age);
        this.power= power;
    }
    public hunt():void{
        console.log('atata');
        this.power -=15;
    }
    public showDog():void{
        console.log('name:',this.name);
        console.log('breed:',this.breed);
        console.log('age:',this.age);
        console.log('power:',this.power);
    }
    public static testt():void{        
        console.log('test');
    }
}

// let bobik = new Dog('Valera','taksa',24);
// bobik.showDog();
// console.log(bobik.getAge());
// bobik.setAge(56);
// console.log(bobik.getAge());
// console.log('**********************');
// let Jessi = new HunterDog('Jessi','huski',25,99);
// Jessi.showDog();
// console.log('**********************');
// Jessi.hunt();
// console.log('**********************');
// Jessi.showDog();
// console.log('**********************');
// console.log('**********************');

// Jessi.setAge(21);
// Jessi.getAge();
let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click',()=> {    
    let nameDog = document.getElementsByTagName('input')[0].value;
    let breedDog = document.getElementsByTagName('input')[1].value;
    let ageDog = parseInt(document.getElementsByTagName('input')[2].value);
    let dog = new HunterDog(nameDog,breedDog,ageDog,100);   
    dog.showDog(); 
    console.log(dog);
    console.log(typeof(dog));
});


