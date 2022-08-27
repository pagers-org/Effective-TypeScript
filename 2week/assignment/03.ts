// 3. 다음을 오류가 없도록 해주세요.
type CoffeeItem = {
  name: string;
  price?: number;
  size?: string
}

const mycoffee: CoffeeItem = {
  name: 'mocha',
};
mycoffee.price = 6000;
mycoffee.size = 'Large';
