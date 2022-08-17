/**
 * 아래의 코드 중 타입 별칭을 제거하여 동일한 결과를 내도록 작성해주세요.
 */

// type SavingAction = {
//   type: 'saving';
//   payload: string[];
// };

interface SavingAction {
  type: 'saving';
  payload: string[];
}

const savingAction: SavingAction = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};

// type SavedAction = {
//   type: 'saved';
// };

interface SavedAction {
  type: 'saved';
}

const savedAction: SavedAction = {
  type: 'saved',
};

type Actions = SavingAction | SavedAction;
