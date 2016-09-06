const React = require('react');

class Pancake extends React.Component {
  
  // TODO: create a componentDidMount() which will start the interval to count how long the pancake has been cooking
  
  // TODO: create a componentWillUnmount() which will clear the interval

  updateCounter() {
    this.setState({
      timeCooked: this.state.timeCooked + 1
    })
  }

  startInterval() {
    this.interval = setInterval(this.updateCounter, 1000);
  }

  cleanUpInterval() {
    clearInterval(this.interval);
  }

  flip() {
    this.setState({
      flippedAt: this.state.timeCooked
    })
  }

  takeItOff() {
    const pancakeId = this.props.id;
    this.props.takeItOff(pancakeId);
  }

  constructor(props) {
    super(props);
    this.state = {
      timeCooked: 0,
      flippedAt: undefined
    };
    this.updateCounter = this.updateCounter.bind(this);
    this.flip = this.flip.bind(this);
    this.takeItOff = this.takeItOff.bind(this);
  }

  render() {
    const firstSide = Boolean(this.state.flippedAt === undefined);
    return (
      <div>
        I am a pancake.
        Time cooked on {`${firstSide ? 'first' : 'second'}`} side: {`${firstSide ? this.state.timeCooked : this.state.timeCooked - this.state.flippedAt}`}
        { firstSide ? <button onClick={this.flip}>Flip!</button> : <button onClick={this.takeItOff}>Take it off!</button>}
      </div>
    )
  }
}

module.exports = Pancake;
