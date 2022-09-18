/**
 * 문제2
 * 위의  PapagoParamsSource와 PapagoParamsTarget 를 조합하여 명세에서 언급하는
 * "번역할 수 있는 원본 언어와 목적 언어는 다음과 같습니다." 의 제약조건을 참고하여 PapagoParams 인터페이스를 개선해 주세요.
 * */

type KoParamsTarget =  "en" | "ja" | "zh-CN" | "zh-TW" | "vi" | "id" | "th" | "de" | "ru" | "es" | "it" | "fr";

type EnParamsTarget = "ko"| "ja" | "fr" | "zh-CN" | "zh-TW" ;

type CnParamsTarget = "ko" |"zh-TW" |  "en" | "ja";

type JaParamsTarget = "ko" |"zh-CN" | "zh-TW" | "en";

type TwParamsTarget = "ko" | "en" | "ja" | "zh-CN";

type ViParamsTarget = "ko";

type IdParamsTarget = "ko";

type ThParamsTarget = "ko";

type DeParamsTarget = "ko";

type RuParamsTarget = "ko";

type EsParamsTarget = "ko";

type ItParamsTarget = "ko";

type FrParamsTarget = "ko" | "en";

interface KoParams {
  source: "ko";
  target: KoParamsTarget;
  text: string;
}

interface EnParams {
  source: "en";
  target: EnParamsTarget;
  text: string;
}

interface CnParams {
  source: "zh-CN";
  target: CnParamsTarget;
  text: string;
}

interface JaParams {
  source: "ja";
  target: JaParamsTarget;
  text: string;
}

interface TwParams {
  source: "zh-TW";
  target: TwParamsTarget;
  text: string;
}

interface ViParams {
  source: "vi";
  target: ViParamsTarget;
  text: string;
}

interface IdParams {
  source: "id";
  target: IdParamsTarget;
  text: string;
}

interface ThParams {
  source: "th";
  target: ThParamsTarget;
  text: string;
}

interface DeParams {
  source: "de";
  target: DeParamsTarget;
  text: string;
}

interface RuParams {
  source: "ru";
  target: RuParamsTarget;
  text: string;
}

interface EsParams {
  source: "es";
  target: EsParamsTarget;
  text: string;
}

interface ItParams {
  source: "it";
  target: ItParamsTarget;
  text: string;
}

interface FrParams {
  source: "fr";
  target: FrParamsTarget;
  text: string;
}


type PapagoParams = KoParams | EnParams | CnParams | JaParams | TwParams | ViParams | IdParams | ThParams | DeParams | RuParams | EsParams | ItParams | FrParams;



// 1. "번역할 수 있는 원본 언어와 목적 언어는 다음과 같습니다" 라는 문구를 봤을 때, 원본 언어마다 번역 가능한 목적 언어가 제한되고 있습니다. 
// 2. 그렇기 때문에 source가 정해졌을 때 특정 목적 언어로 제한되어야 한다고 생각합니다. 
// 3. 구현하는 방법으로는 인터페이스의 유니온을 사용하면 좋을 것 같다는 생각이 들었습니다.
