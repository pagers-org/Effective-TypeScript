/**
 * 문제2
 * 위의  PapagoParamsSource와 PapagoParamsTarget 를 조합하여 명세에서 언급하는
 * "번역할 수 있는 원본 언어와 목적 언어는 다음과 같습니다." 의 제약조건을 참고하여 PapagoParams 인터페이스를 개선해 주세요.
 * */

interface PapagoParamSourceKo {
  source: "ko";
  target: PapagoParamsTarget;
}

interface PapagoParamSourceEn {
  source: "en";
  target: "ja" | "fr" | "zh-CN" | "zh-TW";
}

interface PapagoParamSourceJa {
  source: "ja";
  target: "zh-CN" | "zh-TW" | "en";
}

interface PapagoParamSourceZhCn {
  source: "zh-CN";
  target: "zh-TW" | "ja" | "en";
}

interface PapagoParamSourceZhTw {
  source: "zh-TW";
  target: "en" | "ja" | "zh-CN";
}

interface PapagoParamSourceFr {
  source: "fr";
  target: "en";
}

type PapagoParams = (
  | PapagoParamSourceKo
  | PapagoParamSourceEn
  | PapagoParamSourceFr
  | PapagoParamSourceJa
  | PapagoParamSourceZhTw
  | PapagoParamSourceZhCn
  | {
      source: PapagoParamsSource;
      target: "ko";
    }
) & { text: string };
