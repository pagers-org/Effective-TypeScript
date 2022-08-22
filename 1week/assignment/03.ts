/**
 * 아래의 userRole이 가진 리터럴 타입을 제거하여 UserInformation을 유연하게 만드려면 어떻게 할까요?
 */

const USER_ROLE = {
  NORMAL: 'normal',
  VIP: 'vip',
  ADMIN: 'admin',
} as const;

/**
 * typescript 에서 타입 코드 내부에서 typeof 는 값에서 타입을 뽑아내는 역할을 한다.
 * key 값이 이미 정해져 있으므로 index signature 는 사용하지 못한다.
 */

type UserInformation = {
  userId: string;
  userName: string;
  userRole: typeof USER_ROLE[keyof typeof USER_ROLE];
  password: string;
};

const user1: UserInformation = {
  userId: '123',
  userName: '김동현',
  password: '1234',
  userRole: USER_ROLE.ADMIN,
};
