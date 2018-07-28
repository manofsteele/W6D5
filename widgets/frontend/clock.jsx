import React from 'react';

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      time: new Date()
    };
  }

  tick(){
    this.setState({
      time: new Date()
    });
  }


  render(){
    let options = {year: 'numeric', month: 'long', day: 'numeric'};
    return (

      <div className="clock">
        <div className="time">
          <label>Current Time</label>
          <p className="clock-right">{this.state.time.toLocaleTimeString('it-IT')}</p>
        </div>
        <br></br>
        <div>
          <label>Today's Date</label>
          <p className="clock-right">{this.state.time.toLocaleDateString('en-US', options)}</p>
        </div>

      </div>
    );
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }
}

export default Clock;
