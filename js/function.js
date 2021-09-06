let str = 'Hello world';
//           01234567890
console.log(str.slice(6, 11));

str = 'thesecond@gmail.com';
console.log(str.match(/.+(?=@)/)[0]);

let arr = [5, 12, 8, 130, 44];
console.log(arr.find(e => e > 10));

console.log(arr.concat(['aaa', 'bbb']));  // 새로운 배열 생성하여 return

const fruits = ['Apple', 'Banana', 'Orange'];
fruits.forEach((item, idx, array) =>{
	console.log(item, idx, array);
});

console.log(
	fruits.map((item, idx, array)=>
		({
			id: idx,
			name: item
		}))
);

console.log(
	fruits.filter(item => item === 'Apple')
);

console.log(
	fruits.find(item => /^O/.test(item))
);

console.log(
	fruits.findIndex(item => /^O/.test(item))
);

console.log(
	fruits.includes('Apple')
);

let numbers = [5, 12, 8, 130, 44];

//////////////////////////////////////
// 원본 변경
//////////////////////////////////////
// 추가
numbers.push(55);
console.log(numbers);

numbers.unshift(3);
console.log(numbers);

numbers.reverse();
console.log(numbers);

numbers.splice(5,2);   // numbers.splice(5);  이후 삭제
console.log(numbers);
numbers.splice(3,0);
console.log(numbers);
numbers.splice(3,1, 999);		// 교체
console.log(numbers);
numbers.splice(3,0, 99999);   // 삽입
console.log(numbers);

////////////////////////////////////////
// Object
////////////////////////////////////////
const userAge = {
	name: 'Mark',
	age: 38
}
const userEmail = {
	name: 'Anna',
	email: 'a@b.com'
}

const tgt = Object.assign({}, userAge, userEmail);
console.log(tgt);

const target = Object.assign(userAge, userEmail);
console.log('target :: ', target, '\nuserAge :: ', userAge, target === userAge);

console.log(Object.keys(target));
console.log(Object.keys(target).map(k => target[k]));

////////////////////////////////////////
// 구조분해 할당
////////////////////////////////////////
const user = {
	name: 'Mark',
	age: 85,
	email: 'ddd@b.com'
}

// 이름 재할당( nm = name) & 기본값 설정 가능
const {name: nm, age, email, address = 'Korea'} = user;

const fruits2 = ['Apple', 'Banana', 'Cherry'];
const [a, b, c, d = 'Orange'] = fruits2;
console.log(a, b, c, d);
const [, , bb] = fruits2;
console.log(bb);