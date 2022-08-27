// 3. 다음을 오류가 없도록 해주세요.
type Size = 'Small' | 'Medium' | 'Large';
interface Coffee{
  name: string;
  price:number;
  size: Size;
}
const mycoffee = {
  name: 'mocha',
} as Coffee;
mycoffee.price = 6000;
mycoffee.size = 'Large';

//--------------- 책에서는 객체를 한번에 선언하는 방법이 좋다고 하였는데 더 좋은 방법은 아래처럼 선언하는 방식을 사용해야 할까요?

const mycoffe: Coffee {
 name: 'mocha',
 price: 6000,
 size: 'Large'
}
  
