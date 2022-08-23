// 2. 타입구문을 명확하게 지정해주세요.

// id를 사용하는 타입을 기준으로 명시하는 것이 옳은지 잘 모르겠습니다.
interface Toy {
  name: string;
  id: number | string;
  price: number;
}

const showToy = (toy: Toy) => {
  return toy.name;
};

const tickle: Toy = {
  name: 'Tickle',
  id: '1100',
  price: 140,
};

showToy(tickle);
