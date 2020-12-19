import React from "react";

export interface TimerProps {

}

export interface TimerState {
  seconds: number
}

class Timer extends React.Component<TimerProps, TimerState> {
  interval: any;
  constructor(props: TimerProps) {
    super(props);
    this.state = { seconds: 0 };
  }
  render() {
    return (
      <h1>Timer : {this.state.seconds}</h1>
    );
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1,
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default Timer;