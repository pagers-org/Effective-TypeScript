/**
 * 아래의 객체를 변경 불가능하게 만들어주세요.
 */

type HumanProps = {
   firstName: string;
   surname: string;
   profile: {
    rating: string;
    school: string;
    education: {
      first: string;
      second: string;
      third?: string;
    };
  } 
}

// => 인덱스 시그니처 만으로 readonly를 만들수있다는 취지
// deep readonly - option1. 외부 library / 2. as const

const Bob = {
  firstName: 'Bob',
  surname: 'Keel',
  profile: {
    rating: 'medium',
    school: 'Harvard University',
    education: {
      first: 'Master',
      second: 'Doctor',
    },
  },
} as const;