// 9. 다음에서 하나의 타입구문만을 넣어 오류를 해결해보세요.
type Coffee = 'mocha' | 'americano' | 'latte';
type Bread = 'croissant' | 'toast';

interface Menu {
  coffee: Coffee;
  bread: Bread;
}

const order = (menu: Menu) => {
  return `I ordered ${menu.coffee} and ${menu.bread}`;
};


// 1번째 타입 선언
const myOrder1: Menu = {
  coffee: 'latte',
  bread: 'toast',
};

// 2번째 타입 단언
const myOrder2 = {
  coffee: 'latte',
  bread: 'toast',
} as const;


order(myOrder1);
console.log(order(myOrder2))
