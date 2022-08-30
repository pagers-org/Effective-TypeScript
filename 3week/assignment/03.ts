/**
 * 문제3
 * 스탑워치 구현을 보고 ui 상태 interface 설계를 개선해주세요.
 * https://online-stopwatch.ko.downloadastro.com/tools/
 * */

// 예시 인터페이스이고, 본인이 생각하는 더 나은 인터페이스로 바꾸셔도 됩니다.
interface ButtonStyle {
  color: string;
}

interface ReadyStopWatch {
  state : "ready";
  startButton: {
    icon : "startButton";
    style: ButtonStyle;
  }
}

interface RunningStopWatch {
  state : "running";
  pauseButton: {
    icon: 'pauseButton';
    style: ButtonStyle;
  };
  addLapButton: {
    icon: 'addLapButton';
    style: ButtonStyle;
  };
}

interface StoppedStopWatch {
  state : "ready";
  startButton: {
    icon: 'startButton';
    style: ButtonStyle;
  };
  resetButton: {
    icon: 'resetButton';
    style: ButtonStyle;
  };

}



interface StopWatchState {
  stopWatchState : ReadyStopWatch | RunningStopWatch | StoppedStopWatch;
  lappedTimeList?: string[];
  timeFormStart: string;
  timeFormLastLap: string;
}

// 1. 스탑워치를 확인했을 때, 시작 전에는 시작 버튼 / 시작 후에는 랩타임 추가와 정지 버튼 / 정지 중에는 리셋 버튼과 시작 버튼이 노출되는 것을 확인했습니다. 
// 2. 각 상태가 옵셔널을 이용해서 따로 관리가 되어버리면 시작하기 전이지만 정지버튼이 오거나 리셋버튼이 오는 등 불명확한 상황이 생기기 때문에 이를 분리해야한다고 생각했습니다.
// 3. 나머지 랩 타임 리스트나, 시작 시간, 마지막 랩 기록 시간 등은 계속 노출되고 있어도 상관 없기 때문에 상태에 따라 분리하지 않았습니다. 