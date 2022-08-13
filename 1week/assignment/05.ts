/**
 * 아래의 객체를 변경 불가능하게 만들어주세요.
 */

type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

type HumanProps = DeepReadonly<{
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
}>;

const Bob: HumanProps = {
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

Bob.profile.education = '';
