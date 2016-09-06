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

  takeItOff(id) {
    this.setState({
      pancakes: this.state.pancakes.filter(pancake => !(pancake === id))
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      time: undefined,
      pancakes: []
    };
    this.addPancake = this.addPancake.bind(this);
    this.takeItOff = this.takeItOff.bind(this);
  }

  render() {
    const pancakes = this.state.pancakes.map((pancake, index) => <Pancake key={index} id={pancake} takeItOff={this.takeItOff} />);
    return (
      <div>
        Start date: {`${this.state.time}`}
        <button onClick={this.addPancake}>Pancake me!</button>
        {pancakes}
      </div>
    )
  }
}

module.exports = Game;
