/**
 * 아래의 코드 중 Cylinder 타입을 유지하기 위한 코드를 작성해주세요.
 */


class Cylinder  {
  constructor(public radius:number, public height:number) {
  }
}



function calculateVolumne(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape.radius;
  }
}

// 1. 타입은 런타임에서 사라지기 때문에 유효한 값으로 사용할 수 있도록 class로 변경하였습니다.
