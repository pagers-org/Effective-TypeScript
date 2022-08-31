/**
 * 문제2
 * 위의  PapagoParamsSource와 PapagoParamsTarget 를 조합하여 명세에서 언급하는
 * "번역할 수 있는 원본 언어와 목적 언어는 다음과 같습니다." 의 제약조건을 참고하여 PapagoParams 인터페이스를 개선해 주세요.
 * */
type OtherLanguageCode =  'vi' | 'id' | 'th'| 'de' | 'ru' |'es' | 'it';
type LanguageCode = 'ko' | 'en' |  'ja' | 'zh-CN' | 'zh-TW' | 'fr' | OtherLanguageCode;

type EnPapagoParamsTarget = 'ja' | 'zh-CN' | 'zj-TW' | 'fr' | 'ko';
type JaPapagoParamsTarget = 'zh-CN' | 'zh-TW' | 'ko' | 'en';
type ZH_CNPapagoParamsTarget = 'zh-TW' | 'ko' | 'en' | 'ja';
type ZH_TWPapagoParamsTarget = 'zh-CN' |'ko' | 'en' | 'ja';
type FrPapagoParamsTarget = 'ko' | 'en';

interface KoPapagoParams {
  source: 'ko';
  target: Exclude<LanguageCode, 'ko'>;
}

interface EnPapagoParams {
  source: 'en';
  target: EnPapagoParamsTarget;
}

interface JaPapagoParams {
  source: 'ja';
  target: JaPapagoParamsTarget;
}

interface ZH_CNPapagoParams {
  source: 'zh-CN';
  target: ZH_CNPapagoParamsTarget;
}

interface ZH_TWPapagoParams {
  source: 'zh-TW';
  target: ZH_TWPapagoParamsTarget;
}

interface FrPapagoParams {
  source: 'fr';
  target: FrPapagoParamsTarget;
}

interface OtherLangPapagoParams {
    source: OtherLanguageCode;
    target: 'ko';
}


type PapagoParams = KoPapagoParams | EnPapagoParams | JaPapagoParams | ZH_CNPapagoParams | ZH_TWPapagoParams | FrPapagoParams | OtherLangPapagoParams;

