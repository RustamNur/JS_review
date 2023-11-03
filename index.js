//review-9

//! *******___DOM Selectors___******

//* 1) getElementByTagnName

const listItem = document.getElementsByTagName('li')
console.log(listItem[1]);



//* 2) getElementByClassName

const listItem1 = document.getElementsByClassName('list-item')
console.log(listItem1);



//* 3) getElementById

const clickBtn = document.getElementById('click-btn')
console.log(clickBtn)



//* 4) querySelector / querySelectorAll

const listItem2 = document.querySelectorAll('.list-item')
console.log(listItem2);

//? textContent

const domItems = document.getElementById('home')
domItems.textContent += " Hello world"

const domItems1 = document.querySelectorAll('.list-item')
domItems1.forEach((item) => {
    item.textContent +=  ' Darslari'
})

//? innerHTML
const names = ["Ali","USman","Huzayfa","Ubayda"]
const ol = document.querySelector('ol')
names.map((item) => {
    ol.innerHTML
})