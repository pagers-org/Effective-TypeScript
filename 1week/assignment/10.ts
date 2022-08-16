/**
 * never, unknown, any 타입에 대해 정리하여 최대한 상세하게 적어주세요.
 never : any type조차 할당할 수 없는 절때 할당되서는 안되는 타입. 에러처리를 할 때 never type을 반환시켜서, 반환값이 never type인지를 검증하는 방식으로 활용
 any : 어떠한 type이던지, ??? -> any -> othertype형태로 typecasting이 가능함. ts -> js 변환 과정에서 type check를 무사히 동과시키기 때문에 문제가 발생할 수 있으나, 이러한 리스크를 감수하고 사용한다고 볼 수 있음
 unknown : 어떤 타입일지 모르는 상태. any와 유사하나, 해당 unknown 변수의 property 또는 연산자를 사용할 때 unknown type은 문제를 발생시킬 수 있다고 컴파일 에러를 유발한다.
 */
