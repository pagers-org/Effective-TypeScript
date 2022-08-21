// 4. 다음은 잘못된 타입 좁히기의 예시입니다. 올바르게 고쳐주세요.

const isString = (s: unknown): s is string => typeof s === 'string';
function print(strs: string | string[] | null) {
  if (strs === null) {
    console.log('it is null');
  }
  // 좀 과하다 싶기도 하지만 일단 string[]라는 조건을 강하게 제한하고 싶어서...
  // strs가 object[]로 받을수도 있기 때문에!
  if (Array.isArray(strs) && strs.every(isString)) {
    for (const s of strs) {
      console.log(s);
    }
  }
  if (isString(strs)) {
    console.log(strs);
  }
  // return 타입이 void이기 때문에 경고메시지정도로 개발자에게 알려주는방식으로 느슨하게 관리하였지만
  // return 타입이 명확하게 정해져있다면 throw new Error()나, default 리턴값을 정해서 제어해야한다 생각합니다.
  console.warn('기대한 타입이 아닙니다.');
}
print('1');
print(['1', '2']);
print(null);

// 아래 두경우는 런타임시점에서 들어올 수 있는 경우를 예시로 든것
// 불가능하지 않은 경우이므로 방어적 코딩을 고려해야합니다.
const weirdStrs1 = undefined as unknown as null;
print(weirdStrs1);
const weirdStrs2 = [{ id: 1 }, { id: 2 }] as unknown as string[];
print(weirdStrs2);
