/**
 * 아래의 코드 중 타입 별칭을 제거하여 동일한 결과를 내도록 작성해주세요.
 */

interface SavingAction {
  type: 'saving';
  payload: string[];
}

const savingAction: SavingAction = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};

interface SavedAction {
  type: 'saved';
}

const savedAction: SavedAction = {
  type: 'saved',
};

// TODO: union을 type을 제거하고 어떻게 표현 할 수 있을까?
type Actions = SavingAction | SavedAction;
