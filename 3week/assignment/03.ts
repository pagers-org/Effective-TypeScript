/**
 * 문제3
 * 스탑워치 구현을 보고 ui 상태 interface 설계를 개선해주세요.
 * https://online-stopwatch.ko.downloadastro.com/tools/
 * */

// 예시 인터페이스이고, 본인이 생각하는 더 나은 인터페이스로 바꾸셔도 됩니다.

const StartButton = { icon: 'startButton', color: 'green' } as const;
const ResetButton = { icon: 'resetButton', color: 'red' } as const;
const PauseButton = { icon: 'pauseButton', color: 'yellow' } as const;
const AddLapButton = { icon: 'addlapButton', color: 'blue' } as const;

type StopWatchButton = typeof StartButton | typeof ResetButton | typeof PauseButton | typeof AddLapButton;

type StopWatchState = {
  state: 'ready' | 'running' | 'stopped';
  button: StopWatchButton;
  lappedTimeList?: string[];
  timeFormStart: string;
  timeFormLastLap: string;
}