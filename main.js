'use strict'
// EXERCISE 1

const numbers = [1, 2, 3]
const list = document.querySelector('.list'); 
 
for (let i = 0; i< numbers.length; i++){
	const newLi = document.createElement('li');
	console.log(i); 
	const contentLi = document.createTextNode(`${i+1}`);
	console.log(contentLi);
	newLi.appendChild(contentLi); 
	list.appendChild(newLi); 
} 

 
