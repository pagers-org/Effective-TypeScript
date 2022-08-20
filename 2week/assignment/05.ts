// 5. 다음에서 isFish를 완성해 보세요.
type Fish = { swim: () => void };
type Bird = { fly: () => void };

declare function getSmallPet(): Fish | Bird;

// fish인지 판별 할 커스텀 함수를 작성해주세요.
function isFish(pet) {}

const pet = getSmallPet();

const move = (pet: Fish | Bird) => {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
};
