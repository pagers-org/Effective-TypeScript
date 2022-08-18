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

type Actions = typeof savingAction | typeof savedAction;