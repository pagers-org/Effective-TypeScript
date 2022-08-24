// 5. 다음에서 isFish를 완성해 보세요.
type Fish = { swim: () => void };
type Bird = { fly: () => void };

type SmallPet = Fish | Bird;
declare function getSmallPet(): SmallPet

// fish인지 판별 할 커스텀 함수를 작성해주세요.
function isFish(pet: SmallPet): pet is Fish{
  return "swim" in pet;
}

const pet = getSmallPet();

const move = (pet: SmallPet) => {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
};
