// 3. 다음을 오류가 없도록 해주세요.

type MyCoffee = {
  name: string,
  price?: number,
  size?: string,
}

const myCoffee: MyCoffee = {
  name: 'mocha',
};

myCoffee.price = 6000;
myCoffee.size = 'Large';
