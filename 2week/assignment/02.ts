export {} 
// 2. 타입구문을 명확하게 지정해주세요.
interface Toy {
  name: string;
  id: number;
  price: number;
}

const tickle: Toy = {
  name: 'Tickle',
  id: '1100',
  price: 140,
};

const showToy = (toy: Toy) => {
  return toy.name;
};

showToy(tickle);

// 타입 구문을 지정하여 오류를 발생시켰습니다.