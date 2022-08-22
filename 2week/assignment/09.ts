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

const myOrder : Menu = {
  coffee: 'latte',
  bread: 'toast',
};

order(myOrder);

// 1. 에러가 나는 이유는 타입스크립트는 모든 경우를 파악하여 타입을 추론하기 때문에 myOrder의 coffee, bread를 string으로 추론하기 때문이다. 
// 2. string는 Coffee, Bread 타입에 비해 큰 집합이기 때문에 할당할 수 없습니다. 따라서 myOrder가 Menu 타입임을 명시해줘야 합니다. 
// 3. 하나의 타입 구문만을 넣는 것이 조건이었기 때문에 myOrder에 Menu 타입을 선언하였습니다.
