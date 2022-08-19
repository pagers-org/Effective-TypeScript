/**
 * 아래의 코드 중 타입 별칭을 제거하여 동일한 결과를 내도록 작성해주세요.
 */
type SaveType = 'saving' | 'saved';

interface Save {
    type : SaveType,
    payload ?: string[]
}


const savingAction: Save = {
  type: 'saving',
  payload: ['Apple', 'Banana', 'Strawberry'],
};


const savedAction: Save = {
  type: 'saved',
};
