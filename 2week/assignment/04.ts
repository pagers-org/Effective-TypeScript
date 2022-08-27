// 4. 다음은 잘못된 타입 좁히기의 예시입니다. 올바르게 고쳐주세요.

const isNull = <T>(x: T | null): x is null => {
  return x === null;
};

function print(strs: string | string[] | null) {
  if (!isNull(strs)) {
    if (typeof strs === "object") {
      for (const s of strs) {
        console.log(s);
      }
    } else {
      console.log(strs);
    }
  }
}
