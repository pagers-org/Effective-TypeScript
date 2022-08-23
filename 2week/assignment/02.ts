// 2. 타입구문을 명확하게 지정해주세요.
// - 사용하는 tickle 타입에 맞게 interface Toy 타입을 수정하는 것이
// - '타입구문'을 명확하게 한다는 의미일까??

interface Toy {
  name: string;
  id: string;
  price: number;
}

const showToy = (toy: Toy) => {
  return toy.name;
};

const tickle = {
  name: 'Tickle',
  id: '1100',
  price: 140,
};

showToy(tickle);
