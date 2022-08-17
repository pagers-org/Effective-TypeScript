/**
 * 아래의 객체를 변경 불가능하게 만들어주세요.
 */

type ReadonlyHumanProps = Readonly<{
  firstName: string;
  surname: string;
  profile: Readonly<{
    rating: string;
    school: string;
    education: Readonly<{
      first: string;
      second: string;
      third?: string;
    }>;
  }>;
}>;

const Bob: ReadonlyHumanProps = {
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
