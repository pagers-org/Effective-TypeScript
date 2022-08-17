/**
 * 아래의 코드 중 타입 별칭을 제거하여 동일한 결과를 내도록 작성해주세요.
 */

// type SavingAction = {
//   type: 'saving';
//   payload: string[];
// };

const savingAction = {
  type: 'saving' as const,
  payload: ['Apple', 'Banana', 'Strawberry'],
} ;

// type SavedAction = {
//   type: 'saved';
// };

const savedAction = {
  type: 'saved' as const,
};

type Actions = typeof savingAction | typeof savedAction;

const action : Actions = {
  type: "saving",
  payload: ["CJ", "ASAP"]
}

// 1. type 별칭이 타입 선언 쪽이 맞는지 의문이 들었습니다.
// 2. 타입 선언을 따로 하지 않고 typeof와 as const를 이용해서 type 프로퍼티는 리터널 타입으로, payload의 경우에는 string[] 나오도록 했습니다.