/**
 * 문제1
 * 다음의 파파고 번역 api 명세를 확인하고
 * 파라미터에 필요한 source 와 target 을 좁혀주세요.
 * @description: 링크: https://developers.naver.com/docs/papago/papago-nmt-api-reference.md
 * */

type LanguageCode = 'ko' | 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id' | 'th' | 'de' |'ru' | 'es' | 'it' | 'fr';

type PapagoParamsSource = LanguageCode;
type PapagoParamsTarget = LanguageCode;
