/**
 * never, unknown, any 타입에 대해 정리하여 최대한 상세하게 적어주세요.
 */

/**
 * 1) never : type 을 값들의 집합으로 보았을때 공집합에 해당
    - 모든 타입의 하위타입 -> 모든 타입의 변수에 할당 가능
    - 반대로 never type 의 변수에는 어떤 타입의 변수도 할당 불가능 (any 도 불가능)
 * 2) unknown : type 을 값들의 집합으로 보았을때 전체집합에 해당
    - 모든 타입의 상위타입 
    - any 의 type-safe 버젼
 * 3) any: 타입스크립트가 타입체커를 하지 않음
    - 지양해야하는 타입
    - 단 javascript 에서 typescript 로 migration 하는 경우라면 사용 가능
 */
