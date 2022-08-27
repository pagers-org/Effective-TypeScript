export {}


// 1. 타입스크립트가 다음을 타입추론 할 수 있게 바꿔주세요.

type Sex = "male" | "female"

interface Person {
  name: string;
  age: number;
  country: string;
  sex: Sex;
}

const person:Person = {
  name: 'Joe',
  age: 10,
  country: 'ko',
  sex: 'male',
};
