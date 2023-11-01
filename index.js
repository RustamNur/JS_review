// review-5

/*

Functionlardagi 'return' keywordini 
ishlatimizdan maqsad function biriktirilgan 
variablega returndan qaytgan value biriktirishdir.
Ya'ni function ichidan qiymat olganda biz agar
oddiy console.log() ishlatadigan bolsak uni ustida
a'mal bajara olmaymiz,lekin returnga qaytrasak uni ustida a'mal 
bajarsak bo'ladi.

function return qilingan narsaga teng bo'ladi


 # TDZ
    --  Vaqtinchalik o'lik zona (TDZ) - bu o'zgaruvchiga kompyuter uni qiymat bilan to'liq ishga tushirgunga qadar kirish imkoni bo'lmagan blok maydoni.

    let va const TDZ zonasida bo'ladi qachonki hoisting 
    qilinganda , var hoisting qilinganda esa 'undefined' qaytadi.

    --Временная мертвая зона
Попытавшись обратиться к let или const-переменной до ее объявления, мы получаем ошибку, и происходит это из-за временной мертвой зоны (temporal dead zone, TDZ).

TDZ начинается в начале области видимости переменной и заканчивается ее объявлением. Обращение к переменной в TDZ приводит к выбросу ReferenceError.

    -- The let and const variables exist in the TDZ from the start of their enclosing scope until they are declared.



*/