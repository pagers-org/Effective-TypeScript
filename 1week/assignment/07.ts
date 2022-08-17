/**
 * 아래의 코드 중 Cylinder 타입을 유지하기 위한 코드를 작성해주세요.
 */

 class Cylinder {
  radius=1;
  height=1
}

function calculateVolumne(shape: unknown) {    // volume 오타
  if (shape instanceof Cylinder) {
    shape.radius;
  }
}

// 클래스를 타입으로 사용
