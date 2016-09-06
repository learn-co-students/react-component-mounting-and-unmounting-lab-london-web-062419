# React: Component Mounting and Unmounting

## Objectives

1. Describe what happens in the mounting phase of a React component's lifecycle
2. Describe what happens in the unmounting phase of a React component's
   lifecycle
3. Practice performing setup and teardown actions at the appropriate point in
   the React component lifecycle.

## Overview

You are a pancake chef in a fancy pancake restaurant. There are many customers waiting so you need to get those pancakes out quick! Pancaked need to be cooked on either side and taken off the pan at the right moment before they burn.

The current settings are that if a pancake is cooked for exactly 2 seconds on either side, it's cooked. If it's cooked for more than 2 seconds on either side it will be burnt and otherwise it will be raw. You can change these settings in the `Pancake.js`!

The code for your pancake factory is very nearly there, with just a few key bits missing!

## Pancake needs a timer!

Firstly, we need a timer on each pancake so we could record how long it's been cooking. Look in `Pancake.js` - the `startInterval()` bethod is already there. All you need to do it add a lifecycle method in `Pancake.js` at `componentDidMount()` (that's the point at which the pancake component gets added to the page) which will start the counter.


## Tidy up the timer

Now that we've set up a timer, we need to make sure we also remove it as soon as it's not needed anymore. It's important to always do these these two in pairs. As you can see, a `cleanUpInterval()` function is all set up for you so all you need to do it call it just before the component gets unmouned from the page. That will be in the `componentWillUnmount()` method.


## Resources

- [React: Component Specs and Lifecycle](https://facebook.github.io/react/docs/component-specs.html)
