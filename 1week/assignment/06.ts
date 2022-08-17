/**
 * 아래의 코드 중 타입 별칭을 제거하여 동일한 결과를 내도록 작성해주세요.
 * 문제의 의도: discriminated union, typeof Value in type scope.
 */

const savingAction = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};



const savedAction = {
  type: 'saved',
};

type Actions = typeof savedAction | typeof savingAction;

// 객체의 프로퍼티는 변경될 수 있기 때문에 literal 타입이 넓혀지는 사이드 이펙트가 생길 수 있다.
// 따라서 아래의 변수는 할당된다.

/**
 * 
 * const steven: Actions = {
 *   type: steven
 * }
 */
