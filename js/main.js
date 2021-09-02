//////////////////////////////////////////////////////////////
// 생성자 함수 & prototype
//////////////////////////////////////////////////////////////

// 매번 신규 생성 : Pascal case로 생성
function User(first, last) {
	this.firstName = first;
	this.lastName = last;
}
// 한번만 생성
User.prototype.getFullName = function(){
	return `${this.firstName} ${this.lastName}`
}

User.prototype.getFullName2 = ()=>{
	return `${this.firstName} ${this.lastName}`
}

const aamy = new User('Amy', 'Clarke');
const nneo = new User('Neo', 'Smith');

console.log(aamy);
console.log(nneo.getFullName());
console.log(nneo.getFullName2());
console.log('###################################');

//////////////////////////////////////////////////////////////////
// this
// 일반함수 : 호출되는 위치에서 결정
// arrow : 자신이 선언된(만들어진) 위치의 함수 범위내에서 결정(함수가 만들어지는 범위)
//////////////////////////////////////////////////////////////////

const amy = {
	name: 'Amy',
	normal: function(){
		console.log(`function this`, this);
		console.log(this.name);
	},
	arrow: () => {
		console.log(`arrow this`, this);
		console.log(this.name);
	}
}
amy.normal();
amy.arrow();
console.log('````````````````````');
const amy2 = {
	name: 'Amy2',
	normal: amy.normal,
	arrow: amy.arrow
}
amy2.normal();
amy2.arrow();

// setTimeout의 내부에서 callback으로 호출 this를 사용하려면 .bind(this) 사용
// arrow 함수를 써야 timeout 함수의 this
const timer = {
	name: 'Timer',
	timeout: function() {

		setTimeout(function() {
			console.log('>>>>>>>' + this.name);
		}.bind(this), 3000);

		setTimeout(() => {
			console.log('>>>>>>>' + this.name);
		}, 3000);
	}
}
timer.timeout();


class Person {
	constructor(first, last) {
		this.firstName = first;
		this.lastName = last;
	}
	getFullName = function(){
		return `${this.firstName} ${this.lastName}`
	}
}

const p1 = new Person('Amy', 'Clarke');
const p2 = new Person('Neo', 'Smith');
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log(p1);
console.log(p2.getFullName());
