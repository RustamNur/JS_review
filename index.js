// setInterval(() => {
//     let date = new Date();
// console.log(`Time: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// },1000)

// let user = {
//     name: "webbrain",
//     year: 1999,
//     data: {
//         fullname: "webbrain academy",
//         founded:1990
//     }
// }

// console.log(JSON.stringify([user],["name","year","data","fullname","founded"],3));

/* JSON formatdagi file yaratayotganimizda 
    JS'da yozgan objectimizni JSON.stringfy()
    yoradmida o'zgartiramiz.
    jS obj 'user'ni [] 'ga olip qoyganimiz json fortmatli 
    bolganda uni array korinishga olip kelip qoyadi
    --[] => dependency yoki replacement deyiladi, js obj
    dan qaysi keylarni olish kere ekanligini yozamiz,yani
    agar [] empty array korinishda qoldirsak bizga bo'sh 
    obj korinishda json file creat bo'ladi.
    ichiga nechta keylarni yozadigan bo'lsak shuncha
    key va valuedan tashkil topgan json file yaraladi
    -- 'number' : yuqoridagi misoldagi kabi 3 bo'sa
    u 'tab' qilinish hisoblanadi, bu keyingi qatorga tushganda
    nested bo'lgan key/valuelar uchun.



    json formatli fileni oddiy JS.obj ga otkazish uchun esa JSON.parse()
    methodidan foydalanamiz, biz bundan eng kop backenddan malumot 
    kelganda ishlatamiz, yani fetchAPI yoki Axioslardan data qabul 
    qilayotib uni CRUD qilsh uchun yoki  UI ga berish uchun.

*/

//!  ---------- MAP va SET-----------

/*

#Es6 da qoshilgan

# create = new Map()

# The Same as Objects

# Map keylari har qanday DTlardan bo'lishi mumkun

# let obj = {}          -> obj qabul qiladi
  let map = new Map()   -> array qabul qiladi

# Map'ga oddiy object kabi key value biriktira olamiz
  lekin u Map sizeda(count-sanog'i) (yani length kabi ko'rinmaydi) ko'rinmaydi


# ordered value oladi, index bo'yicha

  
*/

let obj = {};

let map = new Map()

obj.name = "Ali"
map.name = "Ali"

map.set("name","IT center")

// console.log(obj);

// console.log(map);
// console.log(map.size,map.get("IT center"));
// Map(0) {name: "Ali"} , u degani
// sizeda hech qanday ozgarish yoq degani

/*

# Mapga dot bilan qoshilgan narsa dot bilan access qilinadi
set() bilan qoshilgan narsaga get() bilan access qilinadi
yani dot bilan qoshilgan narsa boshqa joyda, set() qilingan 
narsa boshqa joyda 

# obj ichida obj key bola olmaydi , lekin mapda bolaoladi

# 'has' bilan map ichida key bor yoqligini bilsa boladi , boolean 
   qaytaradi huddi objlardagi 'in' ga ohshash.

# 'delete' kod ichidan key name berilganini delete qilish uchun 
   ishlatamiz 

# clear() hech qanday key qoldirmasdan hammasini teng ochirib tashledi,
  lekin dot bilan kirgan key valuelar qoladi, faqat set boganlar ochadi.

# forEach() ishlataoladi, lekin map() ishlataolmaydi
  faqat valuelariga access qilaolamiz, keylarsiz output bo'ladi

# let map = new Map([["name","webbarin"],["title", "IT center"]]);

# Object.fromEntries() -> yordamida biz new Mapdagi key valuelarni
  oddiy obj qilaolamiz.

  Methods and properties are:

    new Map() – creates the map.
    map.set(key, value) – stores the value by the key.
    map.get(key) – returns the value by the key, 'undefined' if key  
    doesn’t   exist in map.
    map.has(key) – returns true if the key exists, false otherwise.
    map.delete(key) – removes the element (the key/value pair) by the 
    key.
    map.clear() – removes everything from the map.
    map.size – returns the current element count.


    ********************__SET__********************
 
    
# unordered value qabul qiladi.

# qiymat qabuladigan payt map kabi set() , emas
  add() bilan oladi

  ex:
  let obj = {name:"webbrain"}

  let set = new Set ()
  function name (params){
    console.log("hey")
  }
  set.add(obj)
  set.add(name)
  

    # A Set is a special type collection – “set of values” (without 
        keys), where each value may occur only once.

    Its main methods are:

    new Set([iterable]) – creates the set, and if an iterable object is 
    provided (usually an array), copies values from it into the set.

    set.add(value) – adds a value, returns the set itself.

    set.delete(value) – removes the value, returns true if value existed 
    at the moment of the call, otherwise false.

    set.has(value) – returns true if the value exists in the set, 
    otherwise false.

    set.clear() – removes everything from the set.

    set.size – is the elements count.

    # Asosiy feature (xususiyati) set.add() qilib bir qiymatni 
      faqat bir martagina qabul qiladi holos, yani duplicate qabul 
      qilmaydi

    # Harqanday Arraylarni duplicateni chiqarib tahslash uchun bizga
      juda qo'l keladi, hamda array.filter((value,index,array)=>array
      .indexOf(value)===index) kodi bilan birga :)


    ********_____WeakMap hamda WeakSet __________********
   
   
   # Bizga Garbage Collection dan ma'lumki 'unreachable' ma'lumotlar
     musor collectorlari tomonidan hotiradan o'chiriladi. 

     new Map va new Set orqali yaratilgan har bir objectlar
     hatto null ga tenglanganda ham garbage collertorlar tominidan 
     tozalanmaydi, 
   
   # Bularda keylar albatta OBJECT , bolishi kere, primitive
     DT bo'lishi mumkun emas.

   # (!) Shuning uchun keys() , values() , entries(), metodlarini
         qabul qilmaydi, chunki ichidan ma'lumot olishni ilojisi yoqdir

         WeakMap sadece bu metodlara sahiptir:

            weakMap.get(key)
            weakMap.set(key, value)
            weakMap.delete(key, value)
            weakMap.has(key)









      
*/

let mapped = new Map([["name", "webbarin"], ["title", "IT center"]]);

// console.log(mapped);
// console.log(mapped.keys());
// console.log(mapped.values());
// console.log(mapped.entries());

// console.log(Object.fromEntries(mapped));

for (let item of mapped.values()) {
    console.log(item);
}
for (let item of mapped.keys()) {
    console.log(item);
}
for (let item of mapped.entries()) {
    console.log(item);
}


mapped.forEach(item => console.log(item));

let set = new Set([1, 1, 3, 4, 5, 5, 6, 15, 15])

let uniq = [...set]

console.log(uniq);

let arr = [1, 1, 3, 4, 5, 5, 6, 15, 15]

let unique = arr.filter((value, index,array) => array.indexOf(value) === index)

console.log(unique);