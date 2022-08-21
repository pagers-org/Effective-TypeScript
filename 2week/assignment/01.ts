// 1. 타입스크립트가 다음을 타입추론 할 수 있게 바꿔주세요.
/**
 * 만약 person 객체를 선언할 때 잉여속성체크를 이용하여 의도를 명확하게 하라는 문제였다면 다음과 같이 sex?를 추가할것입니다.
 * */
interface Person {
  name: string;
  age: number;
  country: string;
  sex?: 'male' | 'female';
}
const person: Person = {
  name: 'Joe',
  age: 10,
  country: 'ko',
  sex: 'male',
};

/**
 * 만약 타입스크립트가 다음의 '객체리터럴'의 타입을 추론할 수 있게 해주세요. 라는 의도였다면 Person이라는 인터페이스를 지워도
 * const person 의 타입은 {name: string, age: number, country: string, sex: string} 라고 추론될것입니다.
 */
const person2 = {
  name: 'Joe',
  age: 10,
  country: 'ko',
  sex: 'male',
};
type InferredPerson = typeof person2;

/**
 * 두 방법은 의도가 다른것인데, 첫번째 방법은 먼저 정의한 '타입'에 의존하도록하여 객체리터럴을 제어하는 방식이고, 두번째 방법은 객체리터럴에따라 타입을 동적으로 추론하도록 하는 방식인데
 * 타입의 쓰임이 보통 해당 스코프에 제한되어야하는 타입을 명시하는것이 목적이기 때문에 대부분의 경우에서 첫번째 방법이 더 효과적이라고 생각합니다.
 * 하지만 문제의 의도는 후자에 가까운것같네요. 제가 너무 깊게 생각해서 열려있게 문제를 풀었습니다;큐
 * */
export default {};
