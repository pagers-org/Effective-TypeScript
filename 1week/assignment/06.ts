/**
 * 아래의 코드 중 타입 별칭을 제거하여 동일한 결과를 내도록 작성해주세요.
 */

const savingAction = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};

const savedAction = {
  type: 'saved',
};

// TODO: union을 type을 제거하고 어떻게 표현 할 수 있을까?
type Actions = typeof savingAction | typeof savedAction;
