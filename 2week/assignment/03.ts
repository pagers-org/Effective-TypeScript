// 3. 다음을 오류가 없도록 해주세요.
export {};

type SizeOfCoffee = "Small" | 'Medium' | 'Large'

type Coffee = {
  name:string;
  price:number;
  size:SizeOfCoffee;
}

const myCoffee = {
  name: 'mocha',
} as Coffee;

myCoffee.price = 6000;
myCoffee.size = 'Large';
