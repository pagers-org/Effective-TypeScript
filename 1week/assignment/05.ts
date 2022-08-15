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

type DeepReadOnly<T extends object> = {
  readonly [K in keyof T]: T[K] extends object ? DeepReadOnly<T[K]> : T[K];
};

// 1. Type 수준에서 제어하기

const Bob: DeepReadOnly<HumanProps> = {
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

// 2. 런타임에서 제어하기

const Bob2: HumanProps = {
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

Object.freeze(Bob2);

Bob2.firstName = 'Steven';
// console.log(Bob2.firstName) => Bob


type Test1 = {
  steven1: [true, false],
  steven2: string,
}

const test1: DeepReadOnly<Test1> = {
  steven1: [true, false],
  steven2: "hello world"
}
