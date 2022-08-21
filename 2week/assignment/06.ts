// 6. 다음을 좀 더 적절하게 바꿔보세요. 타입 별칭을 쓰면 좋겠네요!
type Language = 'ko' | 'en' | 'au';
interface Person {
  name: string;
  age: number;
  language: Language[];
}

const isKorean = (person: Person) => {
  console.log(person)
  console.log(person.language)
  if (person.language) {
    if (person.language.includes('ko')) return true;
  }
  return false;
};

const GIL_DONG: Person = {
  name: 'dd',
  age: 33,
  language: ['ko', 'en'],
}

console.log(isKorean(GIL_DONG))

// 할당 시점에 타입을 추론하기 때문에 타입 선언을 추가
