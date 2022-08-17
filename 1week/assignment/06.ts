/**
 * 아래의 코드 중 타입 별칭을 제거하여 동일한 결과를 내도록 작성해주세요.
 */

type SavingAction = {
  type: 'saving';
  payload: string[];
};

type SavedAction = {
  type: 'saved';
};

type Actions = SavingAction | SavedAction;

const savingAction: Actions = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};

const savedAction: Actions = {
  type: 'saved',
};
