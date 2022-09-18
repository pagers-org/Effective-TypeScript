/**
 * 문제3
 * 스탑워치 구현을 보고 ui 상태 interface 설계를 개선해주세요.
 * https://online-stopwatch.ko.downloadastro.com/tools/
 * */

// 예시 인터페이스이고, 본인이 생각하는 더 나은 인터페이스로 바꾸셔도 됩니다.
type Color = 'red' | 'green' | 'blue' | 'yellow';
interface ButtonStyle {
  color: Color;
}

interface StopWatchTimeForm {
    timeFormStart: string;
    timeFormLastLap: string;
}

interface StopWatchReadyState extends StopWatchTimeForm{
    state: 'ready';
    startButton: {
      icon: 'startButton';
      style: ButtonStyle;
    };
  timeFormStart: '00:00:00:000';
  timeFormLastLap: '00:00:00:000';
}

interface StopWatchRunningState extends StopWatchTimeForm{
    state: 'running';
    pauseButton: {
      icon: 'pauseButton';
      style: ButtonStyle;
    };
    addLapButton: {
      icon: 'addLapButton';
      style: ButtonStyle;
    };
  lappedTimeList?: string[];
}

interface StopWatchStoppedState extends StopWatchTimeForm{
    state: 'stopped';
    startButton: {
      icon: 'startButton';
      style: ButtonStyle;
    };
    resetButton: {
      icon: 'resetButton';
      style: ButtonStyle;
    };
    lappedTimeList?: string[];
}

type StopWatchState = StopWatchReadyState | StopWatchRunningState | StopWatchStoppedState;
