const React = require('react');
const ReactDOM = require('react-dom');
const { shallow, mount } = require('enzyme');
const { spyOn } = require('expect');

const Game = require('../components/Game');

describe('Game', () => {
  it('sets the initial time when the game was started in componentWillMount', () => {
    const spy = expect.spyOn(Game.prototype, 'setCurrentTime');
    const wrapper = mount(<Game />);
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(1);
    Game.prototype.setCurrentTime.restore();
  });

  it('sets up the interval updating the timer every second', () => {
    const spy = expect.spyOn(Game.prototype, 'startInterval');
    const wrapper = mount(<Game />);
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(1);
    Game.prototype.startInterval.restore();
  });

  it('cleans up the interval when the component is destroyed', () => {
    const spy = expect.spyOn(Game.prototype, 'cleanUpInterval');
    const wrapper = mount(<Game />);
    wrapper.unmount();
    expect(spy).toHaveBeenCalled();
    expect(spy.calls.length).toEqual(1);
    Game.prototype.cleanUpInterval.restore();
  });
});


