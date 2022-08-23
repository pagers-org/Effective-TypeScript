// 3. 다음을 오류가 없도록 해주세요.

type Coffee = {
  name: string;
  price: number;
  size: string;
};

const mycoffee = {
  name: "mocha",
} as Coffee;
mycoffee.price = 6000;
mycoffee.size = "Large";
