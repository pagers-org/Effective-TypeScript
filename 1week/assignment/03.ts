/**
 * 아래의 userRole이 가진 리터럴 타입을 제거하여 UserInformation을 유연하게 만드려면 어떻게 할까요?
 */

type Role = 'normal' | 'vip' | 'admin';

type UserInformation = {
  userId: string;
  userName: string;
  userRole: Role;
  password: string;
};

const kayInformation: UserInformation = {
  userId: '1004',
  userName: 'Kay',
  userRole: 'vip',
  password: '12341234',
};

console.log(kayInformation);

// 참고
// https://toss.tech/article/template-literal-types
