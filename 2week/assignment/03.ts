// 3. 다음을 오류가 없도록 해주세요.
{
  type Coffee = {
    name: string;
    price?: number;
    size?: "Large" | "Medium" | "Small";
  }

  const mycoffee : Coffee = {
    name: 'mocha',
  };

  mycoffee.price = 6000;
  mycoffee.size = 'Large';

  type Coffee2 = {
    name: string;
    price: number;
    size: "Large" | "Medium" | "Small";
  }

  const mycoffee2 = {
    name: "mocha"
  } as Coffee2

  mycoffee2.price = 6000;
  mycoffee2.size = 'Large';
}

// 1. 오류가 없도록 하기 위해서 Coffee 타입을 선언을 하고 mycoffee 선언 시에 함께 선언하는 방법이 있습니다.(옵셔널 이용)
// 2. 두 번째로는 타입 단언을 통해서 처리할 수 있습니다. (옵셔널 사용하지 않아도 에러 피할 수 있습니다.)


{
  type Coffee3 = {
    name: string;
    price: number;
    size: "Large" | "Medium" | "Small";
  }
  
  const mycoffee3 : Coffee3 = {
    name: "mocha",
    price: 6000,
    size: "Large"
  }
}

// 3. 객체를 선언하는 경우에는 한 번에 하는 것이 잉여 속성 검사도 잘 이용할 수 있어서 좋습니다!


