// 6. 다음을 좀 더 적절하게 바꿔보세요. 타입 별칭을 쓰면 좋겠네요!
type Language = 'ko' | 'en' | 'au';
interface Person {
  name: string;
  age: number;
  language: Language[];
}

const isKorean = (person: Person) => {
  if (person.language) {
    if (person.language.includes('ko')) return true;
  }
  return false;
};
