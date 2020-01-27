#  nomadcoders JS

## 20.01.27(월)
~1-10
### 변수(variable)

(생성-초기화-사용)
+ let a = 221 ; 

(변수를 초기화 하거나 생성할때는 선언을 한뒤 변수명을 정한다)

상수선언(const)
+ 안정적이며 바꿀수없다.고정

변수 선언(let)
+ 값이(변수가) 바뀌는걸 허용한다

+ 변수명은 camel case(소대)로 표기

### 데이터타입 

+ string("문자","텍스트")
+ number(숫자)
+ float(소수점(ex55.1))
+ boolean(참true(1),거짓farse(0))

### array(배열) 와 object(객체)

#### array[배열] 
[여러 string 데이터를  묶는다]

+ 리스트를 만들떄 주로 사용(DB list)

~~~
const dayOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
, 54, true, false, whisky];

//호출
console.log(dayOfWeek);
~~~

//배열 안에는 문자 숫자 불리언 변수까지 포함할수있다

### object{객체}
{컬리브라켓}

+ 데이터를 합쳐서 만든다.
~~~
const greennInfo = {
    name:"green",
    age:100,
    gender:"male",
    inHandsome:true,
    favMovies: ["Along the gods", "notebook", "Intime"],
    favFood: [
        {name:"Kimchi", fatty:false}, 
        {name:"burger", fatty:true}
    ]
}


//호출
console.log(greenInfo.favFood[0].fatty)
~~~

//콤마(,) string("") 꼭 확인   
//object(greenInfo) 안에 Array(favFood) 가있고 그안에 Object(name:~~)
