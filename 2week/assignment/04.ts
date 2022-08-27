// 4. 다음은 잘못된 타입 좁히기의 예시입니다. 올바르게 고쳐주세요.
function print(strs: string | string[]) {
  if (strs) {
    const strsData = Array.isArray(strs) ? strs : [strs];
    strsData.map(str => console.log(str))
  }
}

// null 은 if문에서 걸러지고, 내장 함수인 isArray로 스트링과 스트링[] 를 구별합니다.
// strs가 string일때에 만일 특정 문자열로 나뉘어 온다면 예 ('a,b,c')split로 처리하면 더욱 좋을 것 같습니다.