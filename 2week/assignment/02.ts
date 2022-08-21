// 2. 타입구문을 명확하게 지정해주세요.
interface Toy {
  name: string;
  id: number;
  price: number;
}

// 명시적 타입구문을 이용하여 객체리터럴을 생성할 때 타입을 지정한다면, 해당변수를 선언할때 타입오류를 발견할 수 있어 디버그 할때 편합니다.ㅎㅎ
const tickle: Toy = {
  name: 'Tickle',
  id: 1100,
  price: 140,
};

const showToy = (toy: Toy) => {
  return toy.name;
};

showToy(tickle);
