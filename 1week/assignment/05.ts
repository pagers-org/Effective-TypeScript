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
  };
};

const Bob: Readonly<HumanProps> = {
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
};
// 그냥 ReadOnly유틸타입 쓰면 한댑스만 imutable하다.
Bob.firstName = 'a'; // Attempt to assign to const or readonly variable
Bob.profile.rating = 'a'; // 타입체킹이 안된다.

type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown> ? DeepReadonly<T[P]> : T[P];
};

const Bob2: DeepReadonly<HumanProps> = {
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
};
// DeepReadonly라는 유틸타입을 만들어서 쓴다면 깊은 타입 적용이 가능해진다.
Bob2.profile.education.second = 'a'; // Attempt to assign to const or readonly variable
