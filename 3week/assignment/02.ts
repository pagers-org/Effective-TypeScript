/**
 * 문제2
 * 위의  PapagoParamsSource와 PapagoParamsTarget 를 조합하여 명세에서 언급하는
 * "번역할 수 있는 원본 언어와 목적 언어는 다음과 같습니다." 의 제약조건을 참고하여 PapagoParams 인터페이스를 개선해 주세요.
 * */

type startKo = {
  source: 'ko',
  target: 'en' | 'ja' | 'zh-CN' | 'zh-TW' | 'vi' | 'id' | 'th' | 'de' | 'ru' | 'es' | 'it' | 'fr';
}

type startEn = {
  source: 'en',
  target: 'ko' | 'ja' | 'fr';
}

type startJa = {
  source: 'ja',
  target: 'ko' | 'zh-CN' | 'zh-TW'
}

type startZhCN = {
  source: 'zh-CN',
  target: 'ko' | 'zh-TW' | 'en' | 'ja' | 'zh-CN'
}

type startZhTW = {
  source: 'zh-TW',
  target: 'ko' | 'en',
}

type startVi = { source: 'vi', target: 'ko' };
type startId = { source: 'id', target: 'ko' };
type startTh = { source: 'th', target: 'ko' };
type startDe = { source: 'de', target: 'ko' };
type startRu = { source: 'ru', target: 'ko' };
type startEs = { source: 'es', target: 'ko' };
type startIt = { source: 'it', target: 'ko' };
type startFr = { source: 'fr', target: 'ko' };

type PapagoParams = { text: string } & (
  startKo | startEn | startJa | startZhCN | startZhTW | startVi | startId | startTh | startDe | startRu | startEn | startId | startFr
)