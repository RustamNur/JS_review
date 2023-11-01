//review-4

/*

While Loop

-- While loop condition true oldugu surece her zaman loop yurutur, ama condition yerine falsy kiymetleri almaz , yazilirsa falsy valuelar kodumuz calismaz

syntax ==

while(condition){
    //code body
    i++
}

example: 
 
let i = 3
while(i){
    alert(i);
    i++
}

explanation of example (EOE):

    --Bizga variable berilgan i=3       
    qilinib while loopni contioni true 
    yani i ozi 3ga teng bolgani uchun 
    true qaytaradi, va iteration yani 
    loopni takrorlanish stepi pastga 
    qarab yoki yuqoriga qarab osishi 


DO/While Loop

    do/while va while ni yagona farqi 
    do/while condition false bolsa ham bir marta yurib olishidir


   ---FUNCTIONS---
   1. Function Declaration
        -hoisting
        -named function

   2. Function Expression
        -function which is assignmented 
        to the variable
        -anonymous function
        -Can not hoisting, because of variable, when we call the function 
        expression , the JS engine know it is a basic variable and back 
        responce us ReferenceError ( cannot access ... before 
        initialization)

   3. Arrow Function
        -ES6
        - '=>' signed
        - if a line is a single , may 
        not use the curly brackets
        -when we don't use the curly 
        brackets we may not use the 
        function return keyword
        -if we use the curly brackets
        we must use the 'return' keyword


        (!)(!) HOISTING
            'Move to top' => variable(var) va function (function 
            declaration) hoisting bo'ladi holos, yani file eng yuqorisiga 
            kotarish hisoblanadi.
            let va const va boshqa functionlar hoisting bolmaydi

    Function Parametr

    # Function parametrlar orderlarga qarab beriladi, type yoki logicca 
    qarab emas.

    ex :

    const getAvr = function (name,surname,age){
        console.log(`Name: ${name}`)
        console.log(`Surname: ${surname}`)
        console.log(`Age: ${age}`)
    }

    getAvr("John", 25, "USA")
    getAvr("Italy", Allen, 36)

    EOE: name: "John"
         surname : 25
         age: "USA"

    # Agar ko'rsatilgan parametrga argument berilmasa = bosh qolgan joyga 'undifined' keladi , agar oshiqcha bolsa ignore qilinadi.
    

    # Shadowign Variable in JS
        inner variable bilan outer variableni nomi bir hil bo'lsa 
        shadow variable boladi function chaqirilsa innerni oladi, 
        functiondan tashqarida outer variableni chaqirsak outerni ozini
        qiymati kelib chiqadi

        (!)
        If we already had some variable and we shadowed it inside another 
        scope, we are losing access to the original variable and will not 
        receive the output we need inside another scope. Shadowing can 
        lead to unneeded bugs and results and will be harder to debug 
        when you have many variables.
 
        That’s why it’s always better to name variables in a more 
        explanatory way, so it describes their purpose. It’s also 
        recommended to keep the code organized and group the variable 
        declaration together, instead of spreading them across the code. 
        By having all variables together, it will be easier to notice if 
        you are creating anything with the same name.

        In conclusion, understanding variable shadowing in JavaScript is 
        important as it affects the accessibility and behavior of 
        variables within a scope. Variable shadowing occurs when an 
        inner scope declares a variable with the same name as an outer 
        scope. This results in the inner scope’s variable overriding 
        the outer scope’s variable and shadowing it. However, it’s 
        essential to avoid illegal shadowing, which occurs when two 
        variables with the same name are declared within the same 
        scope using different keywords, such as let and var. Shadowing 
        can lead to bugs and confusing results, so it’s recommended to 
        use descriptive names for variables and keep them organized.

        Agar bizda allaqachon biron bir o'zgaruvchi bo'lsa va biz uni boshqa doirada shadow qilsak, biz asl o'zgaruvchiga kirish huquqini yo'qotamiz va boshqa doirada kerakli natijani olmaymiz. Shadowing keraksiz xatolar va natijalarga olib kelishi mumkin va sizda ko'p o'zgaruvchilar mavjud bo'lganda disk raskadrovka qilish qiyinroq bo'ladi.
 
Shuning uchun har doim o'zgaruvchilarni ko'proq tushuntiruvchi tarzda nomlash yaxshiroqdir, shuning uchun u ularning maqsadini tavsiflaydi. Shuningdek, kodni tartibli saqlash va o'zgaruvchilar deklaratsiyasini kod bo'ylab tarqatish o'rniga birga guruhlash tavsiya etiladi. Barcha o'zgaruvchilar birgalikda bo'lsa, siz bir xil nomdagi biror narsa yaratayotganingizni sezish osonroq bo'ladi. Xulosa qilib aytadigan bo'lsak, JavaScript-da o'zgaruvchilar soyasini tushunish juda muhim, chunki u doiradagi o'zgaruvchilarning mavjudligi va harakatiga ta'sir qiladi. O'zgaruvchilarning soyasi ichki qamrov tashqi qamrov bilan bir xil nomdagi o'zgaruvchini e'lon qilganda sodir bo'ladi. Bu ichki qamrovning o'zgaruvchisi tashqi ko'lamning o'zgaruvchisini bekor qiladi va uni soya qiladi. Shu bilan birga, bir xil nomdagi ikkita o'zgaruvchilar let va var kabi turli xil kalit so'zlar yordamida bir xil doirada e'lon qilinganda yuzaga keladigan noqonuniy soyaning oldini olish juda muhimdir. Shadowing xatolar va chalkash natijalarga olib kelishi mumkin, shuning uchun o'zgaruvchilar uchun tavsiflovchi nomlardan foydalanish va ularni tartibli saqlash tavsiya etiladi.
*/


