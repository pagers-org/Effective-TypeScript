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
