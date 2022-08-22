// 3. 다음을 오류가 없도록 해주세요.
type Coffee = {
  name: string;
  price: number;
  size: 'Large' | 'Medium' | 'Small';
};

// 타입선언은 변수생성시 한번에 하는것이 좋다!
const mycoffee: Coffee = {
  name: 'mocha',
  price: 6000,
  size: 'Large',
};

export default {};
