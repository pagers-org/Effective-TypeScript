/**
 * 아래의 코드 중 Cylinder 타입을 유지하기 위한 코드를 작성해주세요.
 */

interface Cylinder {
  radius: number;
  height: number;
}

class Cylinder {
  constructor(public radius: number, public height: number) {}
}

function calculateVolumne(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape.radius;
  }
}

export {}