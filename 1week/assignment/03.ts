/**
 * 아래의 userRole이 가진 리터럴 타입을 제거하여 UserInformation을 유연하게 만드려면 어떻게 할까요?
 */

/*
 * 1. userRole 자체를 string으로 만든다.
 * 2. userRole이 필요 없을 수도 있으므로 optional하게 바꾸어준다.
 */
type UserInformation = {
  userId: string;
  userName: string;
  // userRole: 'normal' | 'vip' | 'admin';
  userRole?: string;
  password: string;
};
