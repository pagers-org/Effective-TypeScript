/**
 * 아래의 코드 중 Cylinder 타입을 유지하기 위한 코드를 작성해주세요.
 */

class Cylinder {
  constructor(public radius : number, public height : number){
    this.radius = radius;
    this.height = height;
  }
}

class Shape extends Cylinder {
  constructor(public radius : number, public height : number){
    super(radius, height);
  }
}

function calculateVolumne(shape: Shape) {
  if (shape instanceof Cylinder) {
    shape.radius;
  }
}
