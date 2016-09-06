const React = require('react');
const Pancake = require('./Pancake');

class Game extends React.Component {

  // TODO: create a componentWillMount() which will set the current time

  setCurrentTime() {
    this.setState({ time: new Date(Date.now())});
  }

  addPancake() {
    this.setState({
      pancakes: this.state.pancakes.concat(Date.now())
    });
  }

  takeItOff(id, status) {
    const { pancakes, cooked, burnt, raw } = this.state;
    this.setState({
      pancakes: pancakes.filter(pancake => !(pancake === id)),
      cooked: status === 'cooked' ? cooked + 1 : cooked,
      burnt: status === 'burnt' ? burnt + 1 : burnt,
      raw: status === 'raw' ? raw + 1 : raw
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      time: undefined,
      pancakes: [],
      cooked: 0,
      burnt: 0,
      raw: 0
    };
    this.addPancake = this.addPancake.bind(this);
    this.takeItOff = this.takeItOff.bind(this);
  }

  render() {
    const { pancakes, burnt, cooked, raw } = this.state;
    const pans = pancakes.map((pancake, index) => <Pancake key={index} id={pancake} takeItOff={this.takeItOff} />);
    return (
      <div>
        Start date: {`${this.state.time}`}
        <button onClick={this.addPancake}>Pancake me!</button>
        {pans}
        <p>Cooked: {cooked}</p>
        <p>Burnt: {burnt}</p>
        <p>Raw: {raw}</p>
      </div>
    )
  }
}

module.exports = Game;
