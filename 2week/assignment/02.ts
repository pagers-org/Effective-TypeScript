// 2. 타입구문을 명확하게 지정해주세요.
interface Toy {
  name: string;
  id: number;
  price: number;
}

const tickle:Toy = {
  name: 'Tickle',
  id: 1100,
  price: 140,
};

const showToy = (toy: Toy) => {
  return toy.name;
};

showToy(tickle);

// 1. 타입 구문을 명확하게 지정해달라는 의미를 tickle를 선언할 때 타입 선언도 명확하게 해달라는 의미로 생각하였습니다.
// 2. id 같은 경우에 string으로 잘못 입력 되어 있음을 타입스크립트에서 알려주기 때문에 오류를 방지할 수 있었습니다. 
