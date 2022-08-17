/**
 * 아래의 코드 중 Cylinder 타입을 유지하기 위한 코드를 작성해주세요.
 */

interface Cylinder {
  radius: number;
  height: number;
}

class Cylinder implements Cylinder {
  constructor(radius: number, height: number){
    this.height = height;
    this.radius = radius;
  }
}

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    console.log(shape.radius);
  }
}
const cylinder = new Cylinder(1,3);
calculateVolume(cylinder)
