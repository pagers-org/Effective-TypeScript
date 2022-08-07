/**
 * 아래의 함수가 정상적으로 동작하기 위해 어떤 타입을 활용하면 될까요?
 */

// 답변코드가...너무 산으로 간거같은데...
// '정상적으로 동작' 의 의미를 명확하게 주시면 문제푸는데 더 수월할거같아요.
// '정상적으로 동작'의 의미는 런타임에서 발생할 수 있는 오류를 컴파일상황에서 잡을 수 있도록 수정하라는 뜻으로 해석했을 때는 다음과 같은 답변을 할 수 있습니다.
// params x 타입이 any 였을 때 Object.keys(x) 에서 런타임상황에서 에러가 나올 수 있다는 부분에서 x를 unknown 으로 바꿀경우 타입체커의 도움을 받아 type이 object일 때 null인 상황도 고려해 준다는 점에서
// x의 타입을 any 에서 unknown으로 바꾼다. 라고 대답하겠습니다.

// 하지만 '정상적으로 동작' 의 의미를 함수의 부족한 부분을 완성하라는 의도로 받아들인다면 저같이 투머치 함수를 구현하게 될거같아요...ㅠㅠ
// 제가 이해한게 맞는지는 모르겠지만 문제의 의도를 정확하게 파악하기 힘든거같습니다 흑흑.
function prettyPrint(x: unknown, index = 1): string {
  if (typeof x === 'string') return `"${x}"`;

  if (typeof x === 'number') return String(x);

  if (Array.isArray(x)) return '[' + x.map(prettyPrint).join(', ') + ']';

  // x 타입을 unknown 으로 바꾸면  && x !== null 널체크를 해야만 타입체크가 통과된다.
  if (typeof x === 'object' && x !== null) {
    if (Object.keys(x).length === 0) {
      return '{}';
    }
    return (
        `{` +
        `\n${Array(index).fill(' ').join('')}` +
        `${Object.entries(x)
            .map(([key, value]) => `${key}:${prettyPrint(value, index + 1)}`)
            .join(`,\n${Array(index).fill(' ').join('')}`)}` +
        `\n${Array(index).fill(' ').join('')}` +
        `}`
    );
  }

  return 'etc.';
}

console.log(prettyPrint(1));
console.log(prettyPrint('1'));
console.log(prettyPrint(undefined));
console.log(prettyPrint(null));
console.log(prettyPrint({}));
console.log(prettyPrint({ a: [1, 2, 3], b: { v: { d: { e: 1 } }, c: {} } }));
