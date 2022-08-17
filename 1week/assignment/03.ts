/**
 * 아래의 userRole이 가진 리터럴 타입을 제거하여 UserInformation을 유연하게 만드려면 어떻게 할까요?
 */

// 1번 방법
 type UserRole = 'normal' | 'vip' | 'admin';

type UserInformation<T extends string> = {
  userId: string;
  userName: string;
  password: string;
  userRole : T;
};

const user : UserInformation<UserRole> = {
  userId: "asd122",
  userName: "klay",
  password: "qwer1234",
  userRole:"admin",
}

// 1. UserInformation을 선언할 때 제네릭을 사용해서 userRole을 유연하게 조정할 수 있도록 했습니다. 
// 2. 이 때, UserRole을 따로 선언해서 반복해서 작성하지 않도록 했습니다. 
// 3. string으로 선언한 경우에는 쓰는 곳에서 어떤 값을 입력해도 가능하겠지만, 자동 완성이 되지 않아서 이렇게 사용했는데, 상수로 userRole을 만들고 적용해보는 방법도 있을 것 같습니다. 


// 2번 방법
const USER_ROLE = {
  NORMAL: "normal",
  VIP: "vip",
  ADMIN: "admin",
} as const

type UserInformation2 = {
  userId: string;
  userName: string;
  password: string;
  userRole: typeof USER_ROLE[keyof typeof USER_ROLE];
}

const user2 : UserInformation2 = {
  userId: "asd123",
  userName: "dawn",
  password: "qwer1234",
  userRole: "vip",
}

// 4. 상수를 사용해서 관련된 값들을 관리하면서도 이를 타입 선언에 이용해서 자동완성을 제공해줄 수 있을 것 같습니다.  