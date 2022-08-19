/**
 * 아래의 함수가 정상적으로 동작하기 위해 어떤 타입을 활용하면 될까요?
 */
function prettyPrint<T>(x: T ): string {
  if (typeof x === 'string') return `"${x}"`;

  if (typeof x === 'number') return String(x);

  if (Array.isArray(x)) return '[' + x.map(prettyPrint).join(', ') + ']';

  if (typeof x === 'object' && x !== null) return Object.keys(x).join(', ');

  return 'etc.';
}
