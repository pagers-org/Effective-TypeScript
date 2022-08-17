/**
 * 아래의 코드 중 타입 별칭을 제거하여 동일한 결과를 내도록 작성해주세요.
 */

/**
 * 무얼 의도한건지 도저히 모르겠습니다.
 */

type SavingAction = {
  type: 'saving';
  payload: string[];
};

const savingAction: SavingAction = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};

type SavedAction = {
  type: 'saved';
};

const savedAction: SavedAction = {
  type: 'saved',
};

type Actions = SavingAction | SavedAction;
