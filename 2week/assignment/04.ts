// 4. 다음은 잘못된 타입 좁히기의 예시입니다. 올바르게 고쳐주세요.
function print(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}
