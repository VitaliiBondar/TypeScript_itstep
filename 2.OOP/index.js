"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Dog = /** @class */ (function () {
    function Dog(name, breed, age) {
        this.name = name;
        this.breed = breed;
        this.age = age;
    }
    ;
    Dog.prototype.showDog = function () {
        console.log('name:', this.name);
        console.log('breed:', this.breed);
        console.log('age:', this.age);
    };
    Dog.prototype.getAge = function () {
        return this.age;
    };
    Dog.prototype.setAge = function (newAge) {
        if ((newAge < 30) && (newAge > 0))
            this.age = newAge;
    };
    return Dog;
}());
var HunterDog = /** @class */ (function (_super) {
    __extends(HunterDog, _super);
    function HunterDog(name, breed, age, power) {
        var _this = _super.call(this, name, breed, age) || this;
        _this.power = power;
        return _this;
    }
    HunterDog.prototype.hunt = function () {
        console.log('atata');
        this.power -= 15;
    };
    HunterDog.prototype.showDog = function () {
        console.log('name:', this.name);
        console.log('breed:', this.breed);
        console.log('age:', this.age);
        console.log('power:', this.power);
    };
    HunterDog.testt = function () {
        console.log('test');
    };
    return HunterDog;
}(Dog));
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
var btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function () {
    var nameDog = document.getElementsByTagName('input')[0].value;
    var breedDog = document.getElementsByTagName('input')[1].value;
    var ageDog = parseInt(document.getElementsByTagName('input')[2].value);
    var dog = new HunterDog(nameDog, breedDog, ageDog, 100);
    dog.showDog();
    console.log(dog);
    console.log(typeof (dog));
});
