export {} 
// 8. 다음 함수에서 매개 변수의 타입이 추론되도록 문맥을 만들어주세요.

type CallbackFu = (a: string, b: string) => string;

const callBackFn: CallbackFu = (a, b) => {
  return `These are ${a} and ${b}`;
};

const someFn = (callback: CallbackFu) => {
  return callback('apple', 'banana');
};

someFn(callBackFn)

// someFn에 전달할 callbackFn의 타입을 callback의 타입 구문으로 지정하였습니다.