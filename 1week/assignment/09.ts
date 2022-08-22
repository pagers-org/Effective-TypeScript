/**
 * 아래의 함수가 정상적으로 동작하기 위해 어떤 타입을 활용하면 될까요?
 */

/**
 * 결국 이런 식으로 타입을 하나하나 확인하는 것은
 * 정말로 뭐가 들어올지는 모르겠는 상황이라는 것
 * 따라서 unknown 을 배치하는 것이 제일 좋아보인다.
 */

function prettyPrint(x: unknown): string {
  if (typeof x === 'string') return `"${x}"`;

  if (typeof x === 'number') return String(x);

  if (Array.isArray(x)) return '[' + x.map(prettyPrint).join(', ') + ']';

  if (typeof x === 'object' && x !== null) return Object.keys(x).join(', ');

  return 'etc.';
}
