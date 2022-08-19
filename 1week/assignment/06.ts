/**
 * 아래의 코드 중 타입 별칭을 제거하여 동일한 결과를 내도록 작성해주세요.
 */

type SavingAction = {
  type: 'saving';

};

type SavedAction = {
  type: 'saved';
};

type Actions = {
  type: SavingAction['type'] | SavedAction['type'],
  payload?: string[];
}

const savingAction: Actions = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};


const savedAction: Actions = {
  type: 'saved',
};


