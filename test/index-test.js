import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';

import Game from '../src/components/Game';
import Pancake from '../src/components/Pancake';

describe('Game', () => {
  it('sets the initial time when the game was started in componentWillMount', () => {
    const wrapper = mount(<Game />);
    expect(wrapper.state('time')).to.not.equal('undefined');
  });
});

describe('Pancake', () => {
  it('sets up the interval updating the cooking time every second', () => {
    const wrapper = mount(<Pancake />);
    expect(wrapper.node.interval._idleTimeout).to.equal(1000);
  });

  it('cleans up the interval when the component is destroyed', () => {
    const wrapper = mount(<Pancake />);
    wrapper.unmount()
    expect(wrapper.node.interval._idleTimeout).to.equal(-1);
  });
});
