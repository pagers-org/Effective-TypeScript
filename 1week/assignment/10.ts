/**
 * never, unknown, any 타입에 대해 정리하여 최대한 상세하게 적어주세요.
 */

//  - never
//  - 특징
//      - 다른 모든 타입들의 서브셋
//      - 값의 공집합
//      - 어떠한 값도 가질 수 없음(any도 불가)
//      - never[] : 내부에 어떤 값도 가지고 있지 않은 빈배열
//      - unknown과 정반대
//  - 활용
//      - 함수가 아무것도 반환하지 않을때
//          - void와 차이 : void는 null 또는 undefined 값의 반환을 허용
//      - 특정 타입 값을 할당받지 못하게 할 때
         
//          ```tsx
//          // string 타입인 경우는 never로 추론하여 string 타입의 값이 할당되지 못하도록 할 수 있음
//          type NonString<T> = T extends string ? never : T;
//          ```
         
// - unknown
//  - 특징
//      - 다른 모든 타입들의 슈퍼셋
//      - 모든 타입 할당 가능
//          - error의 기본 타입
//      - 모든 타입의 공통적인 연산만 가능
//      - 어떤 타입인지 알 수 없는(unknown) 타입이기 때문에 사용할 때 어떤 타입인지 다시 한번 명시를 해주어야 함
         
//          ```tsx
//          let age: number = (myVar as number);
//          ```
         
//      - 타입 검사가 된 후에는 타입을 명시해주지 않아도 됨
// - any
//  - 특징
//      - 타입 검사를 항상 만족
//      - 모든 타입의 연산 가능
//      - 부작용이 있으므로 꼭 필요한 상황에만 사용
// - 참고
//  - [https://ui.toast.com/weekly-pick/ko_20220323](https://ui.toast.com/weekly-pick/ko_20220323)
//  - [https://velog.io/@moonheekim0118/타입스크립트-any-unknown-그리고-never-의-차이점](https://velog.io/@moonheekim0118/%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-any-unknown-%EA%B7%B8%EB%A6%AC%EA%B3%A0-never-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)
//  - [https://xo.dev/typescript-unknown-any-never/](https://xo.dev/typescript-unknown-any-never/)
