/**
 * 아래의 객체를 변경 불가능하게 만들어주세요.
 */

type Education = {
  first: string;
  second: string;
  third?: string;
};
type Profile = {
    rating: string;
    school: string;
    education: Readonly<Education>;
};
type HumanProps = {
  firstName: string;
  surname: string;
  profile: Readonly<Profile>;
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
