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

const showToy = (toy: Toy): string => {
  return toy.name;
};

showToy(tickle);

// 객체 리터럴 정의시 타입을 명시하여 변수가 할당되는 시점에 오류가 표시되도록 함
