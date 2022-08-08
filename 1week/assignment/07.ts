/**
 * 아래의 코드 중 Cylinder 타입을 유지하기 위한 코드를 작성해주세요.
 */


class Cylinder  {
  #radius: number;
  #height: number;

  constructor(radius:number, height:number) {
    this.#radius = radius;
    this.#height = height;
  }

  get radius () {
    return this.#radius;
  }

  get height(){
    return this.#height;
  }

}



function calculateVolumne(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape.radius;
  }
}

// 1. 타입은 런타임에서 사라지기 때문에 유효한 값으로 사용할 수 있도록 class로 변경하였습니다.
