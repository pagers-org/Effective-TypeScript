export {} 
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

const myOrder: Menu = {
  coffee: 'latte',
  bread: 'toast',
};

order(myOrder);

// myOrder객체의 타입 구문을 넣어주었습니다.
