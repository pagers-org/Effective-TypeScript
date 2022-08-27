// 3. 다음을 오류가 없도록 해주세요.
interface Coffee {
  name: string;
  price: number;
  size: string
}

const mycoffee = {
  name: 'mocha',
} as Coffee;

mycoffee.price = 6000;
mycoffee.size = 'Large';

// 객체는 한번에 만드는 것이 좋지만 나눠서 만들어야하면 타입 단언문(as)을 사용해 타입 체커 통과
