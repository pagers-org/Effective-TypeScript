/**
 * 아래의 함수가 정상적으로 동작하기 위해 어떤 타입을 활용하면 될까요?
 */

type ExtractNull<T> = { [P in keyof T]: T[P] extends null ? never : T[P] };
// 제네릭 타입 T 에서 null 을 제외합니다.
// TODO: 타입을 'type ExtractNull<T> = T extends null ? never : T' 로 작성하니 null이 필터링 되지 않는다. 이유가 뭘까.

function prettyPrint(x: ExtractNull<unknown>): string {
  if (typeof x === 'string') return `"${x}"`;

  if (typeof x === 'number') return String(x);

  if (Array.isArray(x)) return '[' + x.map(prettyPrint).join(', ') + ']';

  // null도 object여서 해당 조건문을 통과해 에러 발생
  // 해당 함수의 정상 동작이 요구사항이기에, 함수는 수정하지 않고 해당 함수가 null을 받을 수 없어야 한다고 판단함
  if (typeof x === 'object') return Object.keys(x).join(', ');

  return 'etc.';
}
