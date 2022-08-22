/**
 * 아래의 코드 중 Cylinder 타입을 유지하기 위한 코드를 작성해주세요.
 */

/**
 * 15page -> 런타입에 타입정보 유지하기
 * 1) height 속성이 있는지 확인 (in 사용)
 * 2) 태그 기법
 * 3) 타입과 값을 둘다 사용할 수 있는 Class 나 enum 을 사용
 */

interface Cylinder {
  typename: 'cylinder';
  radius: number;
  height: number;
}

// in 사용
function calculateVolumeByIn(shape: Cylinder) {
  if ('height' in shape) {
    shape.radius;
  }
}

// tag
function calculateVolumeByTag(shape: Cylinder) {
  if (shape.typename === 'cylinder') {
    shape.radius;
  }
}
