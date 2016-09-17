# React: Component Mounting and Unmounting

## Objectives

1. Describe what happens in the mounting phase of a React component's lifecycle
2. Describe what happens in the unmounting phase of a React component's
   lifecycle
3. Practice performing setup and teardown actions at the appropriate point in
   the React component lifecycle.

## Overview

You are a pancake chef in a fancy pancake restaurant. There are many customers waiting so you need to get those
pancakes out quick! Pancakes need to be cooked on either side and taken off the pan at the right moment before
they burn.

Go on and run the game. It doesn't quite work yet, because some essential bits are missing and it's up to you to finish it off!

Pancakes need to be cooked equally on both sides to be yummy. The current settings are that if a pancake is cooked for
exactly 2 seconds on either side, it's considered to be cooked perfectly. If it's cooked for more than 2 seconds on either
side it will be burnt and otherwise it will be raw. You can change these settings in `Pancake.js`!

## Shop needs an opening time
First, you want to record the time your shop was opened. Open `Game.js` and notice a `setCurrentTime()` method already exits,
but it is not yet called. Create a `componentWillMount()` in `Game.js` which will call the `setCurrentTime()` when the
component is first created. If you've done that correctly, you should see the current time at the top of the page.

## Pancake needs a timer!

Now it's time to make your pancakes work. Firstly, we need a timer on each pancake so we could record how long it's
been cooking. Look in `Pancake.js` - the `startInterval()` bethod is already there. All you need to do it add a lifecycle
method in `Pancake.js` at `componentDidMount()` (that's the point at which the pancake component gets added to the page)
which will start the counter.


## Tidy up the timer

Now that we've set up a timer, we need to make sure we also remove it as soon as it's not needed anymore. It's important
to always do these these two in pairs. As you can see, a `cleanUpInterval()` function is all set up for you so all you
need to do it call it just before the component gets unmouned from the page. That will be in the `componentWillUnmount()`
method.

That's it! You've finished off the game! Happy pancake-making!


## Resources

- [React: Component Specs and Lifecycle](https://facebook.github.io/react/docs/component-specs.html)
