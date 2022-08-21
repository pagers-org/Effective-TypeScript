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

const myOrder = {
  coffee: 'latte',
  bread: 'toast',
};

order(myOrder);
