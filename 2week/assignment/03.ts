// 3. 다음을 오류가 없도록 해주세요.

type MyCoffee = {
  name: string,
  price?: number,
  size?: string,
}

const myCoffee: MyCoffee = {
  name: 'mocha',
};

// 밑에 오류를 제거하기 위한 목적이면 옵셔널링을 사용하는 것이 맞는 것 같습니다.
myCoffee.price = 6000;
myCoffee.size = 'Large';


/**
 * 추가 적으로 제 생각에는 MyCoffee 타입에 처음 부터 price, size를 명시한 뒤,
 * 변수를 선언할 때 바로 타입에 맞게 값을 할당하면 좋지 않을 까요???
 * type MyCoffee = {
 *   name: string,
 *   price: number,
 *   size: number
 * }
 *
 * const myeCoffee: MyCoffee = {
 *   name: 'mocha',
 *   price: 6000,
 *   size: 'Large'
 * }
 *
 *
 */
