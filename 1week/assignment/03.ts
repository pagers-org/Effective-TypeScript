/**
 * 아래의 userRole이 가진 리터럴 타입을 제거하여 UserInformation을 유연하게 만드려면 어떻게 할까요?
 */

// 이문제도 의도를 잘 모르겠습니다.
type UserInformation = {
  userId: string;
  userName: string;
  userRole: 'normal' | 'vip' | 'admin';
  password: string;
};
