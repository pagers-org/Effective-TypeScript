/**
 * 아래의 코드 중 Cylinder 타입을 유지하기 위한 코드를 작성해주세요.
 */

interface Cylinder {
  radius: number;
  height: number;
}

function calculateVolumne(shape: Cylinder) {
  if ('radius' in shape) {
    shape.radius;
  }
}
