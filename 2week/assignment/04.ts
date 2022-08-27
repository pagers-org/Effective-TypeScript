// 4. 다음은 잘못된 타입 좁히기의 예시입니다. 올바르게 고쳐주세요.
function print(strs: string | string[] | null) {
  if(!strs) {
    console.log('str is null')
  };
  if (strs && Array.isArray(strs)) { //string[]
      for (const s of strs) {
        console.log(s);
      }
    } else if(typeof strs === 'string'){ //string
      console.log(strs);
    }
}
