export {} 
// 1. 타입스크립트가 다음을 타입추론 할 수 있게 바꿔주세요.

const person = {
  name: 'Joe',
  age: 10,
  country: 'ko',
  sex: 'male',
};

const { name: name_redclare, age, country, sex} = person;

// 명시적으로 타입을 선언해주지 않아도 위에 객체를 통해 타입 추론이 가능하기에 타입 별칭을 지워주었습니다.