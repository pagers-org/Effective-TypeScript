// 8. 다음 함수에서 매개 변수의 타입이 추론되도록 문맥을 만들어주세요.

type CallBackFn = (a:string, b:string) => string;

const callBackFn : CallBackFn = (a, b) => {
  return `These are ${a} and ${b}`;
};

const someFn = (callback: CallBackFn) => {
  return callback('apple', 'banana');
};

// 1. 함수 시그니처를 이용해서 콜백의 타입을 선언할 수 있습니다. 