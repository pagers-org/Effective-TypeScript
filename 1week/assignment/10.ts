/**
 * never, unknown, any 타입에 대해 정리하여 최대한 상세하게 적어주세요.
 */

// 1. any
// - 말 그대로 any value를 지칭합니다
// - 타입스크립트 세계에서 할당할 수 있는 값의 범위가 가장 넓습니다.
// - any type으로 지정된 값에 대해서 어떠한 연산도 할 수 있으며, 어떠한 메서드도 실행할 수 있습니다. 런타임에 오류가 나기 딱 좋습니다
// - any 타입으로 지정된 값에 대해서는 AutoComplete를 지원하지 않습니다.

// - keyof any는 string | number \ symbol입니다. 왜냐하면 객체에 할당할 수 있는 프로퍼티 키는 문자열, 숫자, 심볼 타입이어야 하기 때문입니다.
//   이를 통해 인덱스 타입은 string | number | symbol임을 알 수 있습니다.
let k: any;
k['hi'] = 'hello';
k[1] = 'world';
k[Symbol('steven')] = 'Steven';
// k[{}] = 'steven';
// k[new Map<string>()] = 'steven2';
// ...

// 오래전부터 TS를 지원하는 상태관리 라이브러리들은 any를 쓰는 것 같습니다.

// 2. unknown
// - any와 같이 any value를 지칭하며, 할당할 수 있는 값의 범위가 가장 넓습니다.
//   - 추가로 any but unknown value 라는 추가적인 문구가 들어갑니다.
// - 비교 연산자를 제외한 모든 연산이나 특정 메서드를 사용하기 위해서는 타입을 한 번 정제해주어야 합니다.
// - keyof unknown은 never타입을 가리킵니다.
//  - 속성 접근자(property accessor) 역시 연산자에 해당합니다.
//  - 앞서 언급 하였듯 unknown 타입은 비교 연산자를 제외한 모든 연산에 대해 타입을 한 번 정제해 주어야 합니다.
//  - 정제하지 않은 타입에 프로퍼티 접근이라는 연산을 할 수 없으므로 never 타입이 할당됩니다.

let v2: keyof unknown;
// - 제네릭의 기본 타입은 unknown 입니다 (from version 3.5)

// 3. never
// - none of values(= not any values)를 가리키는 용어입니다. 할당할 수 있는 값의 범위가 없습니다.
// - 이 타입을 가진 (매개)변수에는 어떠한 값도 할당될 수 없습니다.
// - 아직 완성되지 않은 API에 접근하는 것을 차단하기 위해 사용할 수도 있습니다.
