/**
 * 문제4
 * 요구사항: naver나 kakao 로그인(Oauth2.0)하기 기능 이용해
 * 유저의 이름, 닉네임, 프로필 사진을 얻어와 출력하려고 합니다.
 *
 * 카카오  사용자 정보 가져오기 api 명세세
 * https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#req-user-info
 * 카카오 profile 객체 스키마
 * https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#profile
 *
 * 네이버 프로필 API 호출하기 명세
 * https://developers.naver.com/docs/login/devguide/devguide.md#3-4-5-%EC%A0%91%EA%B7%BC-%ED%86%A0%ED%81%B0%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-%ED%94%84%EB%A1%9C%ED%95%84-api-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0
 *
 * 위의 명세를 참고하여 다음과 같은 타입을 정의했습니다.
 * */

interface KakaoUserProfile {
  nickname: string;
  profile_image_url: string;
}

interface KakaoUser {
  name: string;
  profile: KakaoUserProfile;
}

interface NaverUser {
  nickname: string;
  name: string;
  profile_image: string;
}

declare function getUser(userId: string): NaverUser | KakaoUser;

// 다음 오류를 해결하기위해 할 수 있는 모든 대안을 적용해주세요.
function renderUserProfile(userId: string) {
  const app = document.querySelector('#app')!;
  const user = getUser(userId);
  app.innerHTML = `
   <div>
       <span>이름: ${user.name}</span>
       <span>닉네임: ${user?.profile?.nickname || user.nickname}</span>
       <img src="${user?.profile?.profile_image_url || user.profile_image}"></img>
    </div>
    `;
}
