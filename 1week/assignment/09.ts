/**
 * 아래의 함수가 정상적으로 동작하기 위해 어떤 타입을 활용하면 될까요?
 */ 

function prettyPrint<T>(x: T extends null ? never : T ):string {
  if (typeof x === 'string') return `"${x}"`;

  if (typeof x === 'number') return String(x);

  if (Array.isArray(x)) return '[' + x.map(prettyPrint).join(', ') + ']';

  if (typeof x === 'object') return Object.keys(x).join(', ');

  return 'etc.';
}

// 1. typeof x === "object" 를 하더라도 null에 대해서는 체크가 되지 않아서 x의 경우에 에러가 표시되는 것을 알 수 있었습니다.
// 2. null을 사용자가 넣을 수 없도록 하기 위해서 제네릭을 이용하되 T가 null 인 경우에는 never 타입을 이용해서 에러가 표시되도록 했습니다.
// 3. 맞는 방법인지는 모르겠지만 이를 통해서 제네릭을 이용해서 제한을 더 걸 수 있다는 점이 인상 깊었습니다.