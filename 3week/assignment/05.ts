/**
 * 문제5
 * 회원가입 form을 만들어야합니다.
 * 아이디, 비밀번호, 비밀번호 확인 text input
 * 추가 정보입력 checkbox
 * (추가정보입력을 체크하면)
 * 주소, 전화번호 text input 을 구현하려고 합니다.
 * 타입을 좀 더 좁게 관리할 수 있도록 개선해주세요.
 * */

 interface SignupDataBasic {
  id: string;
	password: string;
	confirmPassword: string;
	additionalInputAgreement: false;
}

interface SignupDataWithAdditionalInput {
  id: string;
	password: string;
	confirmPassword: string;
	additionalInputAgreement: true;
  address: string;
  phone: string;
}

type SignupData = SignupDataBasic | SignupDataWithAdditionalInput;

// type SignupDataOptions<T> = T extends { addtionalInputAgreement : false } ? SignupDataBasic : SignupDataWithAdditionalInput;

declare function postSignupToV1(signupForm: {
	id: string;
	password: string;
	confirmPassword: string;
}): void;

declare function postSignupToV2(signupForm: {
	id: string;
	password: string;
	confirmPassword: string;
	address: string;
	phone: string;
}): void;

declare function isAdditionalInputAgreement (data: SignupData): data is SignupDataWithAdditionalInput;

// 타입 추론
const sendSignup1 = (formData: SignupData) => {
	if (formData.additionalInputAgreement) {
    const { additionalInputAgreement, ...restFormData} = formData;
		postSignupToV2(restFormData);
	} else {
    const { additionalInputAgreement, ...restFormData} = formData;
		postSignupToV1(restFormData);
	}
};

// 타입 가드
const sendSignup2 = (formData: SignupData) => {
	if (isAdditionalInputAgreement(formData)) {
    const { additionalInputAgreement, ...restFormData} = formData;
		postSignupToV2(restFormData);
	} else {
    const { additionalInputAgreement, ...restFormData} = formData;
		postSignupToV1(restFormData);
	}
};
