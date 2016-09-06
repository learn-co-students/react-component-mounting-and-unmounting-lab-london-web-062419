const React = require('react');

class Game extends React.Component {

  // TODO: create a componentWillMount() which will set the current time
  
  // TODO: create a componentDidMount() which will start the interval to count how long the component has been mounted
  
  // TODO: create a componentWillUnmount() which will clear the interval

  updateCounter() {
    this.setState({
      timeActive: this.state.timeActive + 1
    })
  }

  setCurrentTime() {
    this.setState({ time: new Date(Date.now())});
  }

  startInterval() {
    this.interval = setInterval(this.updateCounter, 1000);
  }

  cleanUpInterval() {
    clearInterval(this.interval);
  }

  constructor(props) {
    super(props);
    this.state = {
      time: undefined,
      timeActive: 0
    };
    this.updateCounter = this.updateCounter.bind(this);
  }

  render() {
    return (
      <div>
        Start date: {`${this.state.time}`}
        Time running: {`${this.state.timeActive}`}
      </div>
    )
  }
}

module.exports = Game;
