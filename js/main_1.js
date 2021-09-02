import cmmFunc from "./CmmFunction";

console.log(cmmFunc.getType(123));
console.log(cmmFunc.getType(false));
console.log(cmmFunc.getType(null));
console.log(cmmFunc.getType({}));
console.log(cmmFunc.getType([]));

console.log(cmmFunc.random());

const ulEl = document.querySelector('ul');
for (let i = 0; i < 3; i++) {
	const li = document.createElement('li');
	li.textContent = `list-${i + 1}`;
	li.addEventListener('click', () => {
		console.log(li.textContent);
	})
	ulEl.appendChild(li);  // innerHTML / insertAdjacentHTML
}

//////////////////////////////////////////////////////////////
// 즉시실행함수 : IIFE(Immediately-Invoked Function Expression
//////////////////////////////////////////////////////////////
(function sum(x, y){
	console.log(x + y);
}(10,20));

(function sum(x, y){
	console.log(x + y);
})(1,2);

((x, y) => {
	console.log(x + y);
})(100,200);

///////////////////////////////////////////////////////
// timer function
///////////////////////////////////////////////////////
const timer = setTimeout(() => {
	console.log('setTimeout 5 sec');
}, 5000);

const h1El = document.querySelector('h1');
h1El.addEventListener('click', ()=>{
	clearTimeout(timer);
	console.log('clearTimeout');
});

const interval = setInterval(() => {
	console.log('setInterval 1 sec');
}, 1000);

const h2El = document.querySelector('h1');
h2El.addEventListener('click', ()=>{
	clearInterval(interval);
	console.log('clearInterval');
});

///////////////////////////////////////////////////////
// callback
///////////////////////////////////////////////////////
function timeout(callback){
	setTimeout(() => {
		console.log('setTimeout 3 sec');
		callback();
	}, 3000);
}

timeout(()=>{
	console.log('timeout end!');
})
