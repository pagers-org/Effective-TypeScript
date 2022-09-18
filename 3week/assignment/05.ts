/**
 * 문제5
 * 회원가입 form을 만들어야합니다.
 * 아이디, 비밀번호, 비밀번호 확인 text input
 * 추가 정보입력 checkbox
 * (추가정보입력을 체크하면)
 * 주소, 전화번호 text input 을 구현하려고 합니다.
 * 타입을 좀 더 좁게 관리할 수 있도록 개선해주세요.
 * */

interface AdditionalInputAgreementSignUpData extends Omit<SignUpData, "additionalInputAgreement"> {
  // additionalInputAgreement: true;
  address: string;
  phone: string;
}

interface SignUpData {
  id: string;
  password: string;
  confirmPassword: string;
  // additionalInputAgreement:false;
}

const isAdditionalInput = (formData: SignUpData | AdditionalInputAgreementSignUpData) : formData is AdditionalInputAgreementSignUpData   => {
  return Object(formData).hasOwnProperty("address") && Object(formData).hasOwnProperty("phone");

  
}

declare function postSignUpToV1(signupForm: { id: string; password: string; confirmPassword: string }): void;
declare function postSignUpToV2(signupForm: {
  id: string;
  password: string;
  confirmPassword: string;
  address: string;
  phone: string;
}): void;

const sendSignup = (formData: SignUpData | AdditionalInputAgreementSignUpData) => {
  if (isAdditionalInput(formData)) {
    postSignUpToV2(formData);
  } else {
    postSignUpToV1(formData);
  }
};

// 1. additionalInputAgreement가 true인 경우에는 address와 phone가 함께 들어와야 합니다ㅣ. 하지만 지금의 구조는 그렇지 않습니다. 
// 2. 그렇기 때문에, AdditionalInputAgreementSignUpData 라는 SignUpData를 확장한 타입을 만들어서 formData에 유니온 타입으로 넣어줬습니다. 
// 3. 이를 통해서 if 안의 조건을 통과한 경우에는 address와 phone가 옵셔널이 아닌 필수 값이 되므로 에러를 방지하고 타입도 좁힐 수 있었습니다.