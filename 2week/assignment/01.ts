// 1. 타입스크립트가 다음을 타입추론 할 수 있게 바꿔주세요.

{
    const person = {
      name: 'Joe',
      age: 10,
      country: 'ko',
      sex: 'male',
    };
    
    type Person = {
      [T in keyof typeof person] : typeof person[T]
    }

    const person2 : Person = {
      name: "elie",
      age: 12,
      country: "en",
      sex: "male"      
    }

}



// 1. 문제에서 타입 추론을 할 수 있도록 해달라고 했기 때문에 "추론" 이 이뤄지도록 타입 선언부를 없앴습니다.
// 2. person 객체의 경우에 간단한 구조이기 때문에 타입스크립트가 자연스럽게 추론해도 문제가 없다고 생각이 들었고, 객체를 이용해 타입을 만들어 줄 수도 있었습니다.
