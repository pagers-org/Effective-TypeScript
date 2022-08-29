/**
 * 문제1
 * 다음의 파파고 번역 api 명세를 확인하고
 * 파라미터에 필요한 source 와 target 을 좁혀주세요.
 * @description: 링크: https://developers.naver.com/docs/papago/papago-nmt-api-reference.md
 * */
type PapagoParamsSource = "ko" | "en" | "ja" | "zh-CN" | "zh-TW" | "vi" | "id" | "th" | "de" | "ru" | "es" | "it" | "fr";
type PapagoParamsTarget = PapagoParamsSource;

// 1. 파파고 api 명세를 확인했을 때 언어코드에 적힌 내용이 Source와 Target에 들어갈 것으로 보입니다. 
// 2. 따라서 둘은 언어 코드의 유니온으로 이루어진 타입으로 좁힐 수 있다고 생각했습니다.