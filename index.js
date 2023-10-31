// review-3
//LOOPS

/*

For loop

(!) Hardoim bir narsani takror yozib yoki chaqirmaslik ucbun JS'dagi looplardan foydalanamiz

syntax =>

  for (initial ; Condition ; update){
    //code body
  }

  ex//

  for (let i=1; i < 10; i++ ){
    console.log(i)
  }

  explanation:
  1. let i => ozgaruvchi yaratilinadi 'i' ga teng bolgan, bu bizni loopimizda initial qiymat  hisoblanadi

  2. i < 10 => bu bizni asosiy shartimiz, ya'ni loopni takrorlanishini ta'minlash uchun. Agar bizda condition false bolsa loop yurmaydi , shart qachon true bolsagina loop yuradi. 
  (!) doimiy 'true' holat esa loopni infinity ko'rinishga keltirib qo'yadi va compimizni qotirib qoyadi(to'htovsiz yurganini evaziga)

  3. i++ => iteration , ya'ni loopimizni asosiy steplarini conditionga ko'ra oshirberuvchi code bo'lagi desak bo'ladi.

  for (;;) ==> infinity

  (!) agar loopimizdan i++ ni olib tashlasak condition true bo'lgan holatda hardoim infinity holatga tushuib qoladi va comp qotadi:)...Lekin i++ ni code body'imizga yozib qoysak boladi, va hech qanday hatolik yuz bermaydi

  for (let i = 1; i <= 10; i++){
      console.log(i,"HelloWorld");
  }



  let sum = 0;
  for (let i = 0; i < 15; i++) {
    console.log(`Sum = ${sum} + ${i} = ${(sum += i)}`);
    if (sum === 10) break;
  }

Nested Loop 
-Bunga eng yanshi misol yoshlikda o'rganganimiz karra jadvali hisoblanadi

  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log("===========");
  }

  | Bu codeda qanday holat yuz berdi , birinchi loop bolgan 'i' variable
    bir marta yurganda uni ichidagi 'j' variable shartiga ko'ra yurib   
    chiqadi , qachonki conditionimiz falsy holatga yetib kelganda  parent loop yana iteration shartiga ko'ra 
    yana yurib chiqadi,bir marta yurganda child loop (inner) yana tamomiyla shartga asoslangan holatda yurib chiqadi
*/

