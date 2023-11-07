// review-13

/*

[[Prototip]]
[[Prototype]]Javascript-da barcha ob'ektlarga ega bo'lgan maxfiy xususiy 
xususiyat bo'lib, u ob'ekt prototipiga havolani o'z ichiga oladi .

[[Prototype]] is a hidden private property that all objects have in 
Javascript, it holds a reference to the object’s prototype.


An object’s prototype is the object that an object inherits or descends from. 
In the following diagram the object SN descends from FT, so FT is the prototype 
of SN. That means the hidden [[Prototype]] property of SNpoints to FT.

 
Ob'ektning prototipi - bu ob'ekt meros qilib oladigan yoki undan tushadigan ob'ekt. 
Quyidagi diagrammada SN ob'ekti FT dan tushadi, shuning uchun FT SN ning prototipidir. 
Bu SN nuqtalarining FT ga yashirin [[Prototip]] xususiyatini bildiradi.

[[Prototip]] ob'ekt prototipiga havola qiluvchi yashirin xususiyatdir.

Ob'ektning prototipi - bu ob'ekt tushadigan yoki meros qilib oladigan ob'ekt.

* .prototype is a special property that all functions have that contains a reference to an object.
* When a constructor is used to instantiate a new object, ConstructorName.prototype is set as the prototype of the new object.
* All instances of that constructor (the objects it creates) can access the properties of ConstructorName.prototype.

?==.prototypeo b'ektga havolani o'z ichiga olgan barcha funktsiyalarga ega bo'lgan maxsus xususiyatdir.
?==Konstruktor yangi ob'ektni yaratish uchun foydalanilganda, ConstructorName.prototypeyangi ob'ektning prototipi sifatida o'rnatiladi.
?==Ushbu konstruktorning barcha namunalari (u yaratgan ob'ektlar) xususiyatlariga kirishi mumkin ConstructorName.prototype.

let user1 = { name: "webbrain" };
let user2 = { title: "Academy" };

Object.assign(user1, user2);  --> birini birga biriktirib qo'yadi.
user1.__proto__ = user2;  --> user2ni datalarini set qilib olib, unga access qila oladi, bu usul deprecated bo'lgan usul 
                              hisoblanadi

console.log(user1.title);  --> // outputda user2ni title ni chiqarib beradi yani 'Academy'

let user = { name: "webbrain", last: "Academy" };
let hey = { name: "pdp", last: "Academy" };
let he = { name: "NT", last: "Academy" };

Object.fullname(user)                           --> Manual shaklda objectlar uchun prototype 
Object.prototype.fullName = function () {           orqali method (yani function) yaratish yo'li
  console.log(this.name, this.last);
  return this;
};


hey.fullName();  // pdp Academy
user.fullName(); // webbrain Academy
he.fullName();  // NT Academy

***************************************
let ar = [1, 2, 3, 4, 5, 3, 3, 2];

Array.prototype.remove = function (n) {
  let res = this.filter((value) => value !== n);
  console.log(res);
};

ar.remove(4);
ar.remove(1);

obj.remove('name')
obj.set('writable', 'name', false)

*/

let ft = { name: "test", age: 20, major: "dev", founded: 2023 };
let sn = { last: "name" };

Object.setPrototypeOf(sn, ft);
Object.getPrototypeOf(sn);

console.log(Object.keys(Object.getPrototypeOf(sn)));
console.log((Object.getPrototypeOf(sn).age = 35));

/* Bir obj ni prototype orqali ikkinchi objni ichiga kirish 
   Object.assign() dan ko'ra afzalroq usulu hisoblanadi.
   Buning asosiy sababi Object.assign() da memorida qandaydir
   hisobda data saqlananib qoladi , lekin prototypelari orqali 
   kirilganda unday emas. Yuqoridagi misoldagi kabi access qilingan 
   holatda access ham qilaolamiz, va modify ham qilaolamiz.
*/

// console.log(sn.age);

// console.log(ft);
// console.log(sn);

// object.remove(key)

Object.prototype.removeKey = function (element) {
  delete this[element];
};

let user = {
  name: "Test",
  age: 20,
  major: "student",
  founded: 2032,
};
let user2 = {
  name: "Test",
  age: 20,
  major: {
    ism: "hasan",
    child: {
      otaism: "husan",
    },
  },
};
let user3 = {
  name: "Test",
  age: 20,
  major: "student",
};

// user.removeKey('name')
// user2.removeKey('otaism')
// user3.removeKey('major')
// user.removeKey('major')

user2.removeKey("major");

// console.log(user);
console.log(user2);
// console.log(user3);
// console.log(user);

let cat = {
  quack() {
    console.log("🐈🐈🐈");
  },
};
let duck = {
  quack() {
    console.log("🦆🦆🦆");
  },
};

let quack = (element) => element.quack();



let arr = [cat, duck].forEach(obj => quack(obj))
console.log(arr);