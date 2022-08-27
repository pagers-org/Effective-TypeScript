// 6. 다음을 좀 더 적절하게 바꿔보세요. 타입 별칭을 쓰면 좋겠네요!
{
  type Language = 'ko' | 'en' | 'au';

  interface Person {
    name: string;
    age: number;
    language: Language[];
  }
  
  const isKorean = (person: Person) => {
    const {language} = person;

    if (language) {
      if (language.includes('ko')) return true;
    }
    return false;
  };
}

// 1. 타입 별칭을 사용하라는 의미를 별칭(책에서 예시로 brough.location => location이 있었습니다.)을 사용하라는 의미로 생각했습니다. 
// 2. person을 구조분해 할당하여 language라는 별칭을 만든 경우에는 조건문에서 person.language를 사용하지 않고 일관되게 별칭을 사용해야 제대로 타입 추론이 이뤄질 수 있습니다.
// 3. 별칭 language이 만들어 진 후에 person.lanugage를 타입정제한다고 해도 language가 타입 정제 된 것이 아니기 때문입니다. (두 값이 언제나 동일하다고 볼 수 없기 때문입니다.)

