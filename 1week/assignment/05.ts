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

// readOnly는 얕게 동작하므로 제귀로 돌며 모든 key에 readOnly를 할당
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

type ReadOnlyHumanProps = DeepReadonly<HumanProps>;

const Bob: ReadOnlyHumanProps = {
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
