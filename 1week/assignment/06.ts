/**
 * 아래의 코드 중 타입 별칭을 제거하여 동일한 결과를 내도록 작성해주세요.
 */

// ??? 타입별칭을 제거하여 어디에 Type Actions 와 동일한 결과를 내도록 작성해라?
// 질문의 의도를 모르겠어요 ㅠㅠ
const savingAction = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};

const savedAction = {
  type: 'saved',
};

type Actions = typeof savingAction | typeof savedAction;
