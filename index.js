//review-6

/*
OBJECTS

let account = {
    name: "FutureJob Academy",
    major: "Frontend and Backend Developing",
    2023: founded,
    students: 56,
    "full name" : "FJA IT courses"
}

account                    => object name
name: "FutureJob Academy", => property
name                       => property name | object key
"FutureJob Academy"        => property value | object value

Objectlarga access qilish yo'llari
    1.  via dot (.)
        account.name // FutureJob Academy
        account.major // Frontend and Backend Developing

    2. via square bracket ( [] )
        -> when we use [], if the key names are characters we must
        use as a 'string' quotes ["..."]
        -> if the key name is a 'number' we can write to access the value 
        with quotes or without.
        -> we use [] when the key names are multi-words
        
        account["name"] // FutureJob Academy
        account[2023] // founded
        account["2023"] // founded
        account["full name"] // FJA IT courses

=================================================================

***Add new property
    Objectlarga new property add qilish uchun , access qilgan holat bilan
    osongina hal qilamiz

    account.location = "Nizhny Novgorod"

    Output:
    {name: "FutureJob Academy",major: "Frontend and Backend Developing",2023: founded,students: 56,"full name" : "FJA IT courses",location:"Nizhny Novgorod"}

***Delete the property of object
    Object ichidan biron bir propertylarni remove qilish uchun
    'delete' keywordidan foydalanamiz, 

    delete object + key

    delete account.location;

    Output:
    {name: "FutureJob Academy",major: "Frontend and Backend Developing",2023: founded,students: 56,"full name" : "FJA IT courses"}

===============================================================

***Freezing 

    Objectni assignmented variable let bo'lsa ham const bo'lsa ham
    ichidagi ma'lumotlarni o'zgatirsa bo'laveradi,chunki objectdan boshqa
    data biriktirlmaguncha hech qanday hatolik bermaydi.
    Lekin objectni ichidagi datalarni ham muzlatib qo'yishlikni ilojisi
    bor buning uchun 'Object.freeze()' methodidan foydalanamiz.
    Bu bizga object propertylari bilan ishlashni ya'ni update/delete/add
    to'htatib qo'yadi.

    Object.freeze(account)

    (!) Object.seal() -> delete va add qilomimiz, lekin update qilish 
        imkoni bor
=============================================================

Shallow Cloning => Object.assign({},original object)

Sayoz klonlash asl ob'ektning yangi havola(reference) bilan nusxasi bo'lgan yangi ob'ektni yaratadi. Biroq, yangi ob'ektning o'zi ham ob'ektlar bo'lgan xususiyatlari asl ob'ektning xususiyatlariga havola bo'ladi. Boshqacha qilib aytganda, ichki ob'ektlar asl va klonlangan ob'ektlar o'rtasida taqsimlanadi.

***

Deep Cloning => structuredClone(original object)

Chuqur klonlash esa, uning barcha xossalari va ichki ob'ektlarini o'z ichiga olgan asl ob'ektning aniq nusxasi bo'lgan yangi ob'ektni yaratadi. Bu shuni anglatadiki, yangi ob'ekt va dastlabki ob'ekt bir-biridan butunlay mustaqil bo'lib, bir ob'ektga kiritilgan o'zgartirish ikkinchisiga ta'sir qilmaydi.

================================================================

# Agar objectdagi keyning valuesi variable name'i bilan bir hil bo'lsa 
biz ikkovini bittagina yozsak bo'ladi.

let name = "John";
let age = 20;

let user = {
    name: name,    ==> name,
    age:age,       ==> age,
}

console.log(user) // {name:"John",age:20}

================================================================

# 'in' keywordi

    'in' keywordi object ichidagi qandaydir bir KEY name bor yoki
    yo'qligini tekshirib beradi , Boolean qiymat qaytaradi
    bor bo'lsa true , yoq bo'lsa false

    console.log("name" in user) // true

    console.log(name in user) // false *chunki nameni valuesi
                                        "John", John esa user
                                        ni keysi emas, shuning
                                        uchun false qaytaradi


*/

const originalObject = {
    name: 'John Doe',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA',
    },
  };

  const clonedObject = Object.assign({}, originalObject);
console.log(clonedObject);

  const clonedObject2 = structuredClone(originalObject)

clonedObject.address.city = "Dallas"
clonedObject2.address.city = "Texas"

console.log(clonedObject);
console.log(clonedObject2);
console.log(originalObject);

let schedule = {};

const isEmpty = () => {
  for (let i in schedule) {
    return false;
  }
  return true;
};

console.log(isEmpty(schedule)); // true

schedule["8:30"] = "get up";
schedule.time = "gotoschool"
schedule["get up"] = "8:30"

console.log(schedule);
console.log(isEmpty(schedule)); // false

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
const sumOFSalaries = () => {
    let sum = 0;
    for (let i in salaries) {
        sum +=salaries[i]
    }
    return sum;
}

console.log(sumOFSalaries());

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (menu) => {
  for (let i in menu) {
    if (typeof menu[i] === 'number') {
      menu[i] *= 2;
    }
  }
  return menu;
};

console.log(multiplyNumeric(menu));
let obj = {
  name: "Ali",
  age: 46,
  child: {
    name: "Hasan",
    age: 26,
    child: {
      name: "Muhammad",
      age: 5,
      child: {
        name: "Hasan",
        age: 26,
        child: {
          name: "Muhammad",
          age: 5,
        },
      },
    },
  },
};
let sum = 0;
while (true) {
  if (obj) {
      sum += obj.age;
      console.log(obj.age);
  } else break;
  obj = obj.child;
}

console.log(sum);
