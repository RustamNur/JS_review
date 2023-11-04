// review-12

//!   **********  IIFE  **********
/*

    ? Bir hil nomli variable va functionlarda conflict
    ? chiqmasligi uchun ishlatilinadi, alohida scope 
    ? yaratib oladi va ozini ozi chaqiradi

    ? U ko'pincha Global Name Pollution ( yani bir hil nomlanib
    ? kodda name collusion (ismlar to'qnashuvi) kelib chiqishi)
    ? oldini olish uchun ishlatilinadi. IIFE da e'lon qilingan 
    ? variablelar ushbu funksiyadan tashqarida ko'rinmaydi


    var a = 10 
    console.log(a);
    (() => {
        var a = 30;
        console.log(a);
    })()
    
    console.log(a);

*/

//!  Global  = Windows  (this)

/*

? window  = browser | javascript
? global = nodeJs 
? globalThis = hamma environmentlarga ishlatish uchun yaratilgan
? tavsiya qilinadi , hamma joyda ishlab ketavergani uchun

*/

// !   ********* Named Function Expression *********

/*
    ? Odatta biron functionni nomini null tenglab
    ? uni boshqa nomga tenglab keyin chaqirsak avvalgi
    ? holati Garbage collection holati yuzaga keladi
    

let sayHi = function recursion(who) {
  if (who) {
    return `Hello, ${who}`;
  } else {
    return recursion("Guest");
  }
};

let worked = sayHi;
sayHi = null;
console.log(worked());
console.log(worked("Ali"));
console.log(worked("John"));

!Explanation:
    * Aslida bu functionga qoshimcha ism berishimiz ham 
    * hech narsaga zarar yetkazmaydi? Unda nega nega ishlatamiz?
    * Agar biz yuqoridagi kabi null tenglab yuborsak va boshqa
    * nom bilan chaqirilsa hech qanday muomosiz ishlashligi uchun
    * recursion functiondan foydalanamiz, recursion bo'lgan function
    * outer scopeda ishlamaydi , invoke qilish imkonimiz yo'q.
    * Chaqirilib qo'yilsa Error beradi . is not defined degan
    * 
*/

//! ************  setTimeOut() __ setInterval() **********

/*
    We may decide to execute a function not right now, but at a 
    certain time later. That’s called “scheduling a call”.

    There are two methods for it:

    setTimeout ==> allows us to run a function once after the interval of 
    time.
    ? setTimeOut = faqat bir marta yuradi


    setInterval   ==> allows us to run a function repeatedly, starting 
    after the interval of time, then repeating continuously at that 
    interval.
    ? setInterval = qayta qayta yuradi


    These methods are not a part of JavaScript specification. 
    
    But most environments have the internal scheduler and provide these 
    methods. In particular, they are supported in all browsers and 
    Node.js.

     
   ! ************* Curry Function ************

    *Currying shunchaki bir nechta argumentlar bilan funktsiyalarni 
     *baholashni va ularni bitta argument bilan funktsiyalar ketma- 
      *ketligiga ajratishni anglatadi.

    *Boshqa so‘zlar bilan aytganda, karri – funksiya bir vaqtning o‘zida 
     *barcha argumentlarni qabul qilish o‘rniga, birinchisini qabul 
      *qilib, yangi funksiyani qaytaradi, ikkinchisini oladi va yangi 
       *funksiyani qaytaradi, uchinchisini oladi va hokazo. argumentlar 
        *tugallandi.



const allSum = (a) => {
  return (b) => {
    return (c) => {
      return (d) => {
        return (e) => {
          return (f) => {
            console.log(a + b + c + d + e + f);
          };
        };
      };
    };
  };
};
allSum(0)(1)(2)(3)(4)(5);

 ! *********** Call , Apply , Bind **********

    * Boshqa objectlarga targetni yo'naltiradi
   
    * Bitta function yordamida objlarga birikib access qilish
    * dynamic ko;rinishga keladi
    
    * Function Call va Function Apply ikkalasi deyarli
    * bir hil ishledi, yagona farqi shundaki argument
    * qabul qilishda fn.call() oddiy holatda (,) , fn.apply()
    * esa argumentlarni array korinishida ( [] ) ichida q.q
    * 
    * Function Bind bulardan yaqona farqi Autocall yoqligida
    * Buning yechimi sifatida fn.bind() yo bir variablega 
    * biriktirilishi kerak, yoki ohiridan yana bir oddiy
    * qavs ochib qoyish kerak.
   
   function shop(how, speed) {
  console.log(`My car:${this.name} with ${this.color} color is the ${how} and 
   it's speed is ${speed}km/h`);
}
shop();

let car1 = {
  name: "BMW",
  color: "blue",
};
let car2 = {
  name: "Volvo",
  color: "black",
};

shop.call(car1, "best", 320);
shop.call(car2,"bad", 120);

shop.apply(car1, ["best", 320]);
shop.apply(car2, ["bad", 120]);

let myCar = shop.bind(car1, "best", 320);
myCar()
shop.bind(car2,"bad", 120)();
    

*/

// globalThis.b =50
// this.b = 100
// var a  = 10
//     console.log(a);
//     (() => {
//         var a = 30;
//         console.log(a,this.b,globalThis.b);
//     })()

// console.log(a);

// console.log(this);
// console.log(globalThis)

// let sayHi = function recursion(who) {
//   if (who) {
//     return `Hello, ${who}`;
//   } else {
//     return recursion("Guest");
//   }
// };

// let worked = sayHi;
// sayHi = null;
// console.log(worked());
// console.log(worked("Ali"));
// console.log(worked("John"));

// console.log(sayHi("Ali"));
// console.log(sayHi());
// console.log(sayHi("Mehmet"));

// let user = {
//   name: "test",
//   age: 20,
//   child: {
//     name: "test",
//     age: 15,
//     child: {
//       name: "test",
//       age: 35,
//     },
//   },
// };
// let sum = 0;

// const getAge = (obj) => {
//   sum += obj.age;
//   if (obj.child) {
//     getAge(obj.child);
//   }
// };

// getAge(user);
// console.log(sum);

// const allSum = (a) => {
//   return (b) => {
//     return (c) => {
//       return (d) => {
//         return (e) => {
//           return (f) => {
//             console.log(a + b + c + d + e + f);
//           };
//         };
//       };
//     };
//   };
// };
// allSum(0)(1)(2)(3)(4)(5);

function shop(how, speed) {
  console.log(`My car:${this.name} with ${this.color} color is the ${how} and 
   it's speed is ${speed}km/h`);
}
shop();

let car1 = {
  name: "BMW",
  color: "blue",
};
let car2 = {
  name: "Volvo",
  color: "black",
};

shop.call(car1, "best", 320);
shop.call(car2, "bad", 120);

shop.apply(car1, ["best", 320]);
shop.apply(car2, ["bad", 120]);

let myCar = shop.bind(car1, "best", 320);
myCar();
shop.bind(car2, "bad", 120)();
