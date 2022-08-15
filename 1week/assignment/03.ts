/**
 * 아래의 userRole이 가진 리터럴 타입을 제거하여 UserInformation을 유연하게 만드려면 어떻게 할까요?
 */
// type UserInformation = {
//   userId: string;
//   userName: string;
//   userRole: UserRole;
//   password: string;
// };
type UserInformationKeys = 'userId' | 'userName' | 'userRole' | 'password';
type UserRole = 'normal' | 'vip' | 'admin';

type UserInformation = {
  [key in UserInformationKeys]: key extends 'userRole' ? UserRole : string;
};
