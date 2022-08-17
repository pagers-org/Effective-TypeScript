/**
 * 아래의 객체들을 동일하게 선언할 수 있는 타입을 작성해주세요.
 */

type DateType = string | Date | null;

type Person = {
  name: string | {first: number, last : string}
  age : string | number;
  sex: string;
  birth?: DateType;
  death?: DateType;
};

const personA: Person = {
  name: 'Alan Turing',
  age: 32,
  sex: 'male',
  birth: new Date('1912/06/23'),
  death: new Date('1954/06/07'),
};

const personB: Person = {
  name: '홍길동',
  age: '23',
  sex: '남자',
  birth: '옛날 옛적에',
};

const personC: Person = {
  name: { first: 22, last: 'minx' },
  age: 'sixteen',
  sex: 'female',
  birth: null,
  death: new Date('1954/06/07'),
};

// 1. 데이터의 형태를 보고 짜맞추는게 아닌 방법은 없을까?
// 2. personD가 약간 또 다른 형태로 나타나면 어떻게 할 것인가? 

