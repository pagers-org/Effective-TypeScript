/**
 * 문제1
 * 다음의 파파고 번역 api 명세를 확인하고
 * 파라미터에 필요한 source 와 target 을 좁혀주세요.
 * @description: 링크: https://developers.naver.com/docs/papago/papago-nmt-api-reference.md
 * */

 interface KoSourceCode {
  source: 'ko',
  target: 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id' | 'th' | 'de' |'ru' | 'es' | 'it' | 'fr',
}
interface KoTargetCode {
  source: 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id' | 'th' | 'de' |'ru' | 'es' | 'it' | 'fr',
  target: 'ko',
}

interface EnSourceCode {
  source: 'en',
  target: 'ja' | 'fr' | 'zh-CN' | 'zh-TW', 
}

interface EnTargetCode {
  source: 'ja' | 'fr' | 'zh-CN' | 'zh-TW', 
  target: 'en',
}

interface JaSourceCode {
  source: 'js',
  target: 'zh-CN' | 'zh-TW', 
}

interface JaTargetCode {
  source: 'zh-CN' | 'zh-TW', 
  target: 'js',
}

interface ZhSourceCode {
  source: 'zh-CN',
  target: 'zh-TW'
}

interface ZhTargetCode {
  source: 'zh-TW'
  target: 'zh-CN',
}

type PapagoParamsCode = KoSourceCode | KoTargetCode | EnSourceCode | EnTargetCode | JaSourceCode | JaTargetCode | ZhSourceCode | ZhTargetCode;

type PapagoParams = PapagoParamsCode & { text: string }

// 잘못된 조합방지를 위해 인터페이스의 유니온으로 구현
