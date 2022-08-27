// 6. 다음을 좀 더 적절하게 바꿔보세요. 타입 별칭을 쓰면 좋겠네요!
type Language = 'ko' | 'en' | 'au';
interface Person2 {
  name: string;
  age: number;
  language: Language[];
}

const isKorean = (person: Person2) => {
  const { language } = person;
  if (language) {
    if (language.includes('ko')) return true;
  }
  return false;
};
