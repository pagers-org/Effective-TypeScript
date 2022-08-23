// 3. 다음을 오류가 없도록 해주세요.
type Coffee = {
  name: string;
  price: number;
  size: 'Large' | 'Medium' | 'Small';
};

const mycoffee: Coffee = {
  name: 'mocha',
  price: 6000,
  size: 'Large',
};
