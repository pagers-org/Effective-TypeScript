// 4. 다음은 잘못된 타입 좁히기의 예시입니다. 올바르게 고쳐주세요.
{
  function print(strs: string | string[] | null) {
    if (strs) {
      if (typeof strs === "object") {
        for (const s of strs) {
          console.log(s);
        }
      } else {
        console.log(strs);
      }
        
    }
  }
}

// 1. 함수의 동작 자체에는 문제가 없어보인다는 생각이 들었습니다. null 의 경우에는 if(strs) 구문을 통해서 타입이 좁혀져서 아래부터는 string | string[]으로 추론되고 있습니다.
// 2. 게다가 for문의 경우 [] 배열이 전달되는 경우라고 해도 console.log가 찍히지 않을 뿐, 동작에는 이상이 없어보입니다. 
// 3. 위에서 null과 string[]이 좁혀졌기 때문에 마지막에는 else if가 아닌 else를 작성해도 제대로 string으로 추론되었습니다. 
// 4. 위의 상황만 보는 경우에는 typeof strs === "object" 를 통해서도 string[]을 구별할 수 있다고 생각하는데(null이 이미 처리 되었기 때문에) 방향성을 잘못 생각한 것인지 궁금합니다!
