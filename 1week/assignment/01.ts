/**
 * 아래의 객체들을 동일하게 선언할 수 있는 타입을 작성해주세요.
 */
type FirstLast = {first: number; last: string}
type Name = string | FirstLast
type Sex = 'male' | 'female' | '남자' | '여자'
type BirthDeath = Date | '옛날 옛적에' | null

type Person = {
  name: Name,
  age: string | number,
  sex: Sex,
  birth: BirthDeath,
  death?: BirthDeath
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
