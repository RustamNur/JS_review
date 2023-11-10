// review-14

/*

*************  CLASS   *****************
*/

// class Users {
//     constructor(title) {
//         this.title = title
//     }
//     name = 'webbrain';
//     welcomeMsg() {
//         console.log(this);
//         console.log(`This is my title: ${this.title}`)
//     }
// }

// let user1 = new Users ("Webbrain Student")
// let user2 = new Users("Webbrain Mentor")

// user1.welcomeMsg()
// user2.welcomeMsg()

// class AnimalFree {
//   constructor(name) {
//     this.name = name;
//     this.speed = 0;
//   }

//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} runs speed ${this.speed} km/h`);
//   }

//   stop() {
//     console.log(`${this.name} stays still`);
//   }
// }

// class AnimalHide extends AnimalFree {
//   constructor(name) {
//     super(name);
//   }
//   hide(place) {
//     this.place = place;
//     console.log(`${this.name} hides to ${this.place}!`);
//   }
//   run(speed) {
//     this.speed = speed;
//     console.log(`${this.name} runs like that: ${this.speed} km/h`);
//   }
//   stop() {
//     super.run(45); // üst sınıfın stop metodunu çağır.
//     this.hide("AJUBUJU"); // sonra gizle
//   }
// }

// let animal1 = new AnimalHide("Rabbit");
// animal1.run(12);
// animal1.stop();
// animal1.hide("forest");
// console.log("=============");
// let animal2 = new AnimalHide("Wolf");
// animal2.run(25);
// animal2.stop(10);
// animal2.hide("behind the tree");

// class Ar extends Array { }

// let ar = new Ar(  ).length

// console.log(ar);

// let obj = {
//     sayHi() {
//         console.log(`Hello ${this.name}`);
//     },
//     sayBye() {
//         console.log(`Bye ${this.name}`);
//     }
// }

// class Greeting {
//     constructor(name) {
//         this.name = name;
//     }
// }

// Object.assign(Greeting.prototype, obj)

// let gr = new Greeting("Eshmat")
// gr.sayHi()
// gr.sayBye()

//! ******* ERROR HANDLING ********

// try {
//   console.log(number);
//   throw new ReferenceError(`${number}is not defined`);
// } catch {
//   console.log(`number is noy defined`);
// }

// console.log(age);
// let toplam = 1
// let sum = (n) => {
//   if (n === 1) return toplam *= 1
//   else toplam *= n
//   return sum(n-1)
// }

// sum(5)
// console.log(toplam);
//! **********************   CALLBACK HELL  ***************
// let users = {
//   eshmat: {
//     login: "eshmat",
//     fullname: "EshmatBoy",
//     pw: 12345,
//   },
//   toshmat: {
//     login: "toshmat",
//     fullname: "Toshmattt",
//     pw: 123777,
//   },
// };

// console.log("started...");

// const loginParol = (login, pw, callback) => {
//   setTimeout(() => {
//     if (users.toshmat.login === login && users.toshmat.pw === pw) {
//       return callback(` welcome to here! `,()=>{ return `${users.toshmat.fullname}`});
//     } else {
//       return callback(`Login or Password is not correct`);
//     }
//   }, 2000);
// };

// const callback = (usr,getFullname) => {
//   console.log(usr);
//   console.log(getFullname());
//   console.log("finished...");
// };

// loginParol("toshmat", 123777, callback);

//!  ***********  Promise **********

// let users = {
//   eshmat: {
//     login: "eshmat",
//     fullname: "EshmatBoy",
//     pw: 12345,
//   },
//   toshmat: {
//     login: "toshmat",
//     fullname: "Toshmattt",
//     pw: 123777,
//   },
// };

// console.log("started...");

// let user = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (users.eshmat.login === "eshmat" && users.eshmat.pw === 12345) {
//       return resolve(`Wellcome to Here!`);
//     } else {
//       return reject(`Oops...`);
//     }
//   }, 2000);
// });

// user
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err))
//   .finally(() => console.log("finished..."));

//!  ***********  Async | Await **********

// let users = {
//   eshmat: {
//     login: "eshmat",
//     fullname: "EshmatBoy",
//     pw: 12345,
//   },
//   toshmat: {
//     login: "toshmat",
//     fullname: "Toshmattt",
//     pw: 123777,
//   },
// };

// console.log("started...");

// let user = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (users.eshmat.login === "eshmat" && users.eshmat.pw === 12345) {
//       return resolve(`Wellcome to Here!`);
//     } else {
//       return reject(`Oops...`);
//     }
//   }, 2000);
// });

// let get = async () => {
//   let res = await user;
//   console.log(res);
//   console.log("finished...");
// };

// get();

//! ********* Generator Function ********

// function* createId() {
//   let id = users.length;
//   while (true) {
//     yield ++id;
//   }
// }

// let users = [
//   { id: 1, name: "Test_1" },
//   { id: 2, name: "Test_2" },
//   { id: 3, name: "Test_3" },
//   { id: 4, name: "Test_4" },
//   { id: 5, name: "Test_5" },
// ];
// const generator = createId();
// // console.log(generator.next());

// const onDelete = (id) => {
//   let res = users.filter((value) => value.id !== id);
//   users = res;
// };

// const handleCreate = (user) => {
//   users = [...users, { id: generator.next().value, name: user }];
// };

// onDelete(2);
// handleCreate("Test_6");
// handleCreate("Test_7");
// handleCreate("Test_8");
// onDelete(4);
// onDelete(7);
// // onDelete(1);

// console.log(users);

let sum = (a) => (b) => b ? sum(a * b) : a;

let summery = sum(1)(2)(3)(154)();

console.log(summery);
