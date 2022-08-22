// 5. 다음에서 isFish를 완성해 보세요.
type Fish = { swim: () => void };
type Bird = { fly: () => void };

declare function getSmallPet(): Fish | Bird;

// fish인지 판별 할 커스텀 함수를 작성해주세요.

function isFish__UN_SAFE(pet: Fish | Bird): pet is Fish {
  return 'swim' in pet;
}

const move__UN_SAFE = (pet: Fish | Bird) => {
  if (isFish__UN_SAFE(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
};

function isFish__SAFE(pet: Fish | Bird): pet is Fish {
  return Object.prototype.hasOwnProperty.call(pet, 'swim');
}
const move__SAFE = (pet: Fish | Bird) => {
  if (isFish__SAFE(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
};

const fish: Fish = {
  swim() {
    console.log('swimming')
  }
}

const bird: Bird = {
  fly() {
    console.log('fly')
  }
}

Object.setPrototypeOf(bird, fish);

move__SAFE(bird)
move__UN_SAFE(bird)
