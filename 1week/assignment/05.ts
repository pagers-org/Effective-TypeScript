/**
 * 아래의 객체를 변경 불가능하게 만들어주세요.
 */

type HumanProps = {
  readonly firstName: string;
  readonly surname: string;
  readonly profile: {
    readonly rating: string;
    readonly school: string;
    readonly education: {
      readonly first: string;
      readonly second: string;
      readonly third?: string;
    };
  };
};

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
