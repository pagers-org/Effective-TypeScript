// 1. 타입스크립트가 다음을 타입추론 할 수 있게 바꿔주세요.
interface Person {
  name: string;
  age: number;
  country: string;
}

const person = {
  name: 'Joe',
  age: 10,
  country: 'ko',
  sex: 'male',
};

// 타입 명시를 제거하여 추론하도록 함
