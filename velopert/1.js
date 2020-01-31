// 변수와상수,데이터타입,산술,대입연산자


/* 변수(let)
바뀔수있는값,같은 이름으로 선언할수없다.

let value = 1; 
// console.log(value);

// let value2 = 5;
// console.log(value2);
*/

/* 상수(const)
값이 고정적이다

const a = "hello"; 
const b = "javascript";
*/

/* 데이터타입
+ 숫자(number)
+ 문자(string)
+ 참거짓(Boolean)

/* null(없다)과 undefiend(확인되지않았다.) 

let friend = null;
let criminal;

console.log(criminal);
*/


/* 산술연산자

let a = 1;
console.log(a++);
console.log(a);
console.log(++a);

console.log(a--);
console.log(a);
console.log(--a);
console.log(++a);
console.log(a)
console.log(a++)
console.log(a);
console.log(++a);
console.log(a--);
console.log(a); */

/* 대입연산자

let a = 1;
a += 3;
a -= 3;
a *= 15;
a /=3;

console.log(a); */


//논리 연산자

// NOT AND OR순서로 우선 처리한다

// NOT !
//const a =!true;
//console.log(a)
//값을 반전시킨다

// AND &&
//const a = true && false;
//두개다 트루일경우만 트루

// OR ||
//const a =false || true;
//console.log(a);
//둘중 하나가 트루면 트루

// const value = !((true && false) || (true && false) || !false);

// console.log(value);


//비교 연산자
// const a = null;
// const b = undefined;
// const equals = a === b;
// // ==면 타입을 검사하지않는다 ===이 정확하다
// console.log(equals);

// const a = 'a';
// const b = 'b';
// const notEquals = a !== b;
// // 3 글자로 분석
// console.log(notEquals);


// const a =10;
// const b =15;
// const c =15;

// console.log(a < b);
// console.log(b > a);
// console.log(b >= a);
// console.log(a <=c);
// console.log(b < c);
// =이 뒤에온다

//문자열붙이기
// const a = '안녕';
// const b = '하세요';

// console.log(a+b);



//--------------  삼항연산자

// const array = [];
// let text = array.length === 0 ?
// '배열이 비어있습니다.' 
// : '배열이 비어있지 않습니다.';
// console.log(text);