/**
 * 아래의 객체를 변경 불가능하게 만들어주세요.
 */


type DeepReadonly<T> = {
  readonly [K in keyof T] : DeepReadonly<T[K]>;
}

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

const Bob: DeepReadonly<HumanProps> = {
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

// 1. 보통 deepClone을 할 때 재귀를 이용하는데, 타입에서도 재귀를 이용할 수 있었습니다.
// 2. DeepReadonly라는 유틸 타입을 만들고 이를 이용해서 객체를 깊이 readonly로 만들 수 있어 좋았습니다.

