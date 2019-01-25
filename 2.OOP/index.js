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
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    // protected data:string='';
    LocalStorage.prototype.setDataToStorage = function (data) {
        localStorage.setItem('dog', JSON.stringify(data));
    };
    return LocalStorage;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, breed, age) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.breed = breed;
        _this.age = age;
        return _this;
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
}(LocalStorage));
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
        var d = document.getElementById('show');
    };
    HunterDog.testt = function () {
        console.log('test');
    };
    return HunterDog;
}(Dog));
var btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function () {
    var nameDog = document.getElementsByTagName('input')[0].value;
    var breedDog = document.getElementsByTagName('input')[1].value;
    var ageDog = parseInt(document.getElementsByTagName('input')[2].value);
    var dog = new HunterDog(nameDog, breedDog, ageDog, 100);
    dog.showDog();
    console.log(dog);
    console.log(typeof (dog));
    dog.setDataToStorage(dog);
    console.log(JSON.stringify(dog));
});
