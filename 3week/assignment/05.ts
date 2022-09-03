/**
 * 문제5
 * 회원가입 form을 만들어야합니다.
 * 아이디, 비밀번호, 비밀번호 확인 text input
 * 추가 정보입력 checkbox
 * (추가정보입력을 체크하면)
 * 주소, 전화번호 text input 을 구현하려고 합니다.
 * 타입을 좀 더 좁게 관리할 수 있도록 개선해주세요.
 * */

type SignUpData =
  | {
      id: string;
      password: string;
      confirmPassword: string;
    } & (
      | ({ additionalInputAgreement: true } & additionalSignUpData)
      | { additionalInputAgreement: false }
    );

interface additionalSignUpData {
  address: string;
  phone: string;
}

declare function postSignUp(signupForm: SignUpData): void;

declare function postSignUpToV1(signupForm: {
  id: string;
  password: string;
  confirmPassword: string;
}): void;

declare function postSignUpToV2(signupForm: {
  id: string;
  password: string;
  confirmPassword: string;
  address: string;
  phone: string;
}): void;

const sendSignup = (formData: SignUpData) => {
  postSignUp(formData);
};
