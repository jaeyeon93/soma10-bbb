## Project 소개
* 'To Do List' 만들기

## 사용 기술
* Express
* HTML / CSS / JavaScript
* MongoDB

## Package
* Nodemon
* Babel

## 코딩 컨벤션
* 들여쓰기 : Tab(4)

* 변수명 규칙 : CamelCase

* 상수 : 대문자_밑줄

* 세미콜론 : 전부 붙여주기.

* 할당 연산자 : 비교 연산식 괄호로 감싸 주기.
    ~~~
    var isBaby = (age < 10);
    ~~~
    
* 동등 연산자 : '===' / '!=='

* 괄호 : 여는 괄호 다음과, 닫는 괄호 이전에 공백 없음.
    ~~~
    // 나쁜 예
    var isBaby = ( age < 10 );
    
    // 좋은 예
    var isBaby = (age < 10);
    ~~~
    
* 기본 리터럴
    * 문자열은 "큰 따옴표"
    * 숫자는 10진수 정수 / 지수 표현법을 이용한 정수 / 16진수 정수 / 부동 소수점을 이용한 정수
    ~~~
    // 나쁜 예
    var name = 'tripleB';
    
    // 좋은 예
    var name = "tripleB";
    
    // 나쁜 예
    var num = 10.;
    var num = .1;
    var num = 010;  // 8진수
    
    // 좋은 예
    var num = 10;
    var num = 10.0;
    var num = 0.1;
    var num = 0xB2;
    var num = 3e1;
    ~~~
    
* 객체 리터럴
    * 값이 함수라면, '프로퍼티 명' 다음 줄에 공백을 넣어준다.
    * 닫는 중괄호는 텍스트와 함께 두지 않으며, 끝에 세미콜론 을 붙여준다.
    ~~~
    // 나쁜 예
    var person = {
        name: "park",
        age: 26,
        getAge: function() {
            return this.age;
        }
    };
    
    // 좋은 예
    var person = {
        name: "kim",
        age: 20,
        
        getName: function() {
            return this.name;
        }
    };
    ~~~
    
* 변수 선언
    * 여러 변수 선언 시, _var_ 을 이용해 함수의 맨 윗줄에 선언
    ~~~
    var name = "park",
        age  = 29,
        home = "Guro";
    ~~~
    
    * 초기화 된 변수는 반드시 초기화 되지 않은 변수보다 앞에 위치 시킨다.
    ~~~
    // 좋은 예
    var name = "park",
        age;
        
    // 나쁜 예
    var name,
        age = 29;
    ~~~
    
* 함수 선언 : 함수 표현식 사용.
    ~~~
    // 함수 선언식
    function func1(a, b) {
    return a+b;
    }
    
    // 함수 표현식
    let sum = function (a,b) {
    return a+b;
    }
    
    // 람다식 (화살표 함수)
    let sum2 = (a, b) => { return a + b;}
    ~~~


> 참고 : https://itmining.tistory.com/72

## 프로젝트 실행
~~~
 1. npm install
 2. DEBUG=[project_name]:* npm start
~~~


## 역할 분담

* 성연 - 인덱스 페이지  
<img src="https://user-images.githubusercontent.com/20623970/59214271-bb769200-8bf1-11e9-840b-3d61a498a5ed.jpeg" width="80%">

    * 사용자 별로 URI 달리해서 리스트 페이지에 접근 할 수 있도록 구현.
    * 부트스트랩 사용해서 가운데 정렬.   
    * 2차적으로 로그인 구현.


* 재연 - 목록 페이지  
<img src="https://user-images.githubusercontent.com/20623970/59214272-bb769200-8bf1-11e9-86e6-c694025064ea.jpeg" width="80%">

    * '순서', '제목', '날짜' 별로 보여준다.
    * pagination 없이 진행 후 pagination 구현. 


* 영환 - 입력 폼 페이지  
<img src="https://user-images.githubusercontent.com/20623970/59214273-bb769200-8bf1-11e9-9dee-cbbb4b285ddf.jpeg" width="80%">

    * '제목', '내용' 입력 받고, '날짜' 를 hidden 으로 넘겨 받는다.
    * 등록 시, index 에 대한 계산이 필요.


* test
