/**
 * 아래의 코드 중 Cylinder 타입을 유지하기 위한 코드를 작성해주세요.
 */

interface Cylinder {
  radius: number;
  height: number;
}

function isCylinder(value: unknown): value is Cylinder {
  return (
    typeof value === 'object' &&
    value !== null &&
    'radius' in value &&
    'height' in value
  );
}

function calculateVolumne(shape: unknown) {
  if (isCylinder(shape)) {
    shape.radius;
  }
}
