// 2. 타입구문을 명확하게 지정해주세요.
interface Toy {
  name: string;
  id: number;
  price: number;
}

const tickle = {
  name: 'Tickle',
  id: '1100',
  price: 140,
};

const showToy = (toy: Toy) => {
  return toy.name;
};

showToy(tickle);
