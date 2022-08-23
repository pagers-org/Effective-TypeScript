// 6. 다음을 좀 더 적절하게 바꿔보세요. 타입 별칭을 쓰면 좋겠네요!

type LanguageType = 'ko' | 'en' | 'au';
type PersonType = {
  name: string;
  age: number;
  language: LanguageType[];
}

const isKorean = (person: PersonType) => {
  if (person.language) {
    if (person.language.includes('ko')) return true;
  }
  return false;
};
