/**
 * 문제3
 * 스탑워치 구현을 보고 ui 상태 interface 설계를 개선해주세요.
 * https://online-stopwatch.ko.downloadastro.com/tools/
 * */

// 예시 인터페이스이고, 본인이 생각하는 더 나은 인터페이스로 바꾸셔도 됩니다.
interface ButtonStyle {
  color: string;
}

interface StopWatchState {
  state: 'ready' | 'running' | 'stopped';
  startButton?: {
    icon: 'startButton';
    style: ButtonStyle;
  };
  pauseButton?: {
    icon: 'pauseButton';
    style: ButtonStyle;
  };
  resetButton?: {
    icon: 'resetButton';
    style: ButtonStyle;
  };
  addLapButton?: {
    icon: 'addLapButton';
    style: ButtonStyle;
  };
  lappedTimeList?: string[];
  timeFormStart: string;
  timeFormLastLap: string;
}
