// 6. 다음을 좀 더 적절하게 바꿔보세요. 타입 별칭을 쓰면 좋겠네요!
type Language = 'ko' | 'en' | 'au';
const KO: Language = 'ko';
interface Person {
  name: string;
  age: number;
  language: Language[];
}

const isaurean = (person: Person) => {
  if (person.language.includes(KO)) return true;
  return false;
};
