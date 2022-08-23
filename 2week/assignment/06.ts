// 6. 다음을 좀 더 적절하게 바꿔보세요. 타입 별칭을 쓰면 좋겠네요!
type Language = 'ko' | 'en' | 'au';
interface Person {
  name: string;
  age: number;
  language: Language[];
}

const isKorean = (person: Person) => {
  const { language } = person;
  if (language) {
    if (language.includes('ko')) return true;
  }

  return false;
};

console.log(isKorean({
  name: 'John',
  age: 33,
  language: ['ko', 'en'],
}))

// 객체 비구조화 할당을 사용해 중복을 제거하고, 타입을 추론
