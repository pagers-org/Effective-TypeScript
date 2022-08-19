/**
 * 아래의 코드 중 타입 별칭을 제거하여 동일한 결과를 내도록 작성해주세요.
 */

/*
type SavingAction = {
  type: 'saving';
  payload: string[];
};

const savingAction: SavingAction = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};
*/
const savingAction : {[key:string] : string|string[]} = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};

/*
type SavedAction = {
  type: 'saved';
};
*/

const savedAction:  {type : string}= {
  type: 'saved',
};

type Actions = typeof savingAction | typeof savedAction;
