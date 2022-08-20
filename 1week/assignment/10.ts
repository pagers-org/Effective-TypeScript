/**
 * never, unknown, any 타입에 대해 정리하여 최대한 상세하게 적어주세요.
 */

/**
 * 1. never
 - type 값들의 집합으로 보았을 때, 공집합을 의미
 - 반대로 never type 의 변수에는 어떤 타입의 변수도 할당 불가능 (any 도 불가능)

 * 2. unknown
 - type 값들의 집합으로 보았을 때, 전체 집합을 의미
 - any 의 type-safe 버젼

 * 3 any
 - 타입스크립트가 타입체커를 하지 않음
 - 지양해야하는 타입
 - 단 javascript 에서 typescript 로 migration 하는 경우라면 임시적으로 사용(그러나 추후에 제거)
 */
