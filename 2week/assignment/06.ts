// 6. 다음을 좀 더 적절하게 바꿔보세요. 타입 별칭을 쓰면 좋겠네요!
type Language = 'ko' | 'en' | 'au';
interface Person {
  name: string;
  age: number;
  language: Language[];
}

const isKorean = (person: Person) => {
  // 별칭을 이용할때 구조분해할당을 이용하여 이름을 변경시킬수도 있음.
  const { language: lan } = person;
  if (lan) {
    // 더 안전하게 쓰고 싶다면 복사 후 정제를 쓸수 있을거에요.
    // const newLan = [...lan]
    // newLan 객체 자체를 조작하는 함수 ex pop, splice 등 을 쓴다면 원본데이터가 망가지기 때문입니다.
    if (lan.includes('ko')) return true;
  }
  return false;
};
