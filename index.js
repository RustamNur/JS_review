//! review-11

//? --------Recursion-----

/*
 Recursion functionlar - Takrorlash

  * Function ozini ozi chaqirishi hisoblanadi

  * Hozirgi kunda ishlatilmidi lekin, JSda mathematic 
  * hisob kitop qilayotganda , loopdan ko'ra tezroq ishledi


 *************Scopes*************
 ? Scopes => JS engine uses the scope to manage the variable 
 ? accessibility

  ! var 
      * functional scope
      * global scope
      * reassignable
      * redeclarable
      * can be hoisted
  ! let 
      *functional scope
      *local (block) scope
      *reassignable
     
  ! const
      *functional scope
      *local (block) scope

 *************Lexical Environment*************

 ? JS da har bir function yoki kod bloki
 ? lexical environment deb nomlangan ichki 
 ? ( as hidden) objectga ega bo'ladi
 ? lex.env 2 qismdan iborat 
   * Environment Record - local memory
   * reference to Outer lex.Env - outer scope 
   
 ? variablega access qilish uchun Js engine avval
 ? avval local scopidan izlaydi , topolmasa tashqariga
 ? yani outer scopga reference beriladi, bo'lsa oladi,
 ? bo'lmasa yana tashqarisiga chiqib ketadi.

 ? (!) global scopda turgan holatda console.log'dan
 ? biron noaniq variablega access qilmoqchi bo'lsak 
 ? bizga ReferenceError : bu 'variable' is not defined
 ? deydi, Reference yo'q yani globaldan tashqarida scope
 ? yoq va "null" qaytadi, null ni bizga referenceError 
 ? qilib ko'rsatadi (!)

 *************Closure*************

 ? Functionlarni ozining scope chainidagi variablelarni
 ? ishlatishga ruhsati bo'lishiga aytiladi.
 ? Bu jarayon functionlar ichma ich bo'lgan holatda 
 ? yuzaga keladi

 ? Simple Definition => child function parent function 
 ? ichidagi variablellardan foydalana olishiga aytiladi,
 ? yani outer scopidan reference qilingan variablaga access 
 ? qilishligi.

   * *********** Lex.Env VS Closure *********
  
        * Lex.Env => JavaScript engine variablening qayerda 
        * mavjudligini aniqlash uchun koddagi variablening 
        * joylashuvidan qanday foydalanishini tavsiflaydi.
        * 
        * 
        * Closure => bu function va uning outer scopidagi
        * varibalelarni eslab qolish qobiliyatining 
        * kombinatsiyasi


*/

// let sum = 0;
// const summery = (n) => {
//   if (n === 1) return (sum += 1);
//   else {
//     sum += n;
//     return summery(n - 1);
//   }
// };
// summery(5);
// console.log(sum);

let company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],
  sales2: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],
  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],
    sites1: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
    internals2: [{ name: "Jack", salary: 1300 }],
  },
  development2: {
    sites55: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],
    sites15: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],
    internals56: [{ name: "Jack", salary: 1300 }],
    internals202: [{ name: "Jack", salary: 1300 }],
  },
};

const getCalc = (firma) => {
  if (Array.isArray(firma)) {
    return firma.reduce((prev, current) => prev + current.salary, 0);
  } else {
    let sum = 0;
    for (child of Object.values(firma)) {
      sum += getCalc(child);
    }
    return sum;
  }
};

// console.log(getCalc(company));
let sum = 0;
const sumTo = (n) => {
  if (n === 1) {
    // console.log(n);
    sum += 1;
  } else {
    sum += n;
    // console.log(n);
    return sumTo(n - 1);
  }
};
sumTo(6);
// console.log(sum);
let summy = 1;
const getAvr = (n) => {
  if (n == 1) return (summy *= 1);
  else {
    summy *= n;
    return getAvr(n - 1);
  }
};
getAvr(5);
// console.log(summy);

const fabinnacci = (n) => {
  if (n <= 1) return n;
  else return fabinnacci(n - 1) + fabinnacci(n - 2);
};
console.log(fabinnacci(45));
