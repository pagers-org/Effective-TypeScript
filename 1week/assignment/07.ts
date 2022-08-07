/**
 * 아래의 코드 중 Cylinder 타입을 유지하기 위한 코드를 작성해주세요.
 */

interface Cylinder {
  radius: number;
  height: number;
}

const isCylinder = (arg: unknown): arg is Cylinder => 'radius' in (arg as Cylinder) && 'height' in (arg as Cylinder);
function calculateVolumne(shape: unknown) {
  if (isCylinder(shape)) {
    shape.radius;
  }
}
