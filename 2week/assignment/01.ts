// 1. 타입스크립트가 다음을 타입추론 할 수 있게 바꿔주세요.
interface IPerson {
  name: string;
  age: number;
  country: string;
  sex: 'male' | 'female';
}

const person: IPerson = {
  name: 'Joe',
  age: 10,
  country: 'ko',
  sex: 'male',
};
