// 5. 다음에서 isFish를 완성해 보세요.
type Fish = { swim: () => void };
type Bird = { fly: () => void };

declare function getSmallPet(): Fish | Bird;

// fish 인지 판별 할 커스텀 함수를 작성해주세요.
function isFish(pet: Fish | Bird): pet is Fish {
  return 'swim' in pet
}

const pet = getSmallPet();

const move = (pet: Fish | Bird) => {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
};

// 타입 가드 : '인자는 x 타입이다'라는 값을 리턴하는 함수
// 참고 : https://radlohead.gitbook.io/typescript-deep-dive/type-system/typeguard
