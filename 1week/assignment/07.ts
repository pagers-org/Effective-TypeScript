/**
 * 아래의 코드 중 Cylinder 타입을 유지하기 위한 코드를 작성해주세요.
 */

interface CylinderProps {
  radius: number;
  height: number;
}

class Cylinder {
  public radius: number;
  public height: number;

  constructor({ radius, height }: { radius: number; height: number }) {
    this.radius = radius;
    this.height = height;
  }
}

function calculateVolumne(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape.radius;
  }
}
