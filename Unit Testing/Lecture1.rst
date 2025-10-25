REACT NATIVE ARCHITECTURE

Unit testing in React Native refers to testing individual, small parts of your application (usually functions, components, or modules) in isolation to ensure they work as expected.

Here’s a breakdown 👇

🔹 Definition

Unit testing is a software testing technique where each unit (the smallest testable part of an app) is tested independently.
In React Native, a “unit” might be:

A pure JavaScript function (e.g., a utility that formats dates)

A React component (e.g., a Button or custom component)

A hook or helper method

🔹 Goal

The main goal is to:

Catch bugs early in development

Ensure changes don’t break existing behavior

Make your codebase more maintainable and predictable

🔹 Common Tools

React Native uses the same testing ecosystem as React:

Jest – The most popular testing framework (bundled with React Native by default)

React Native Testing Library (RNTL) – Helps test React Native components in a way that mimics how users interact with them

🔹 Example

Here’s a simple unit test using Jest:

// utils/sum.js
export const sum = (a, b) => a + b;

// __tests__/sum.test.js
import { sum } from '../utils/sum';

test('adds two numbers correctly', () => {
  expect(sum(2, 3)).toBe(5);
});


Or for a component:

// components/Greeting.js
import React from 'react';
import { Text } from 'react-native';

export const Greeting = ({ name }) => <Text>Hello, {name}!</Text>;

// __tests__/Greeting.test.js
import React from 'react';
import { render } from '@testing-library/react-native';
import { Greeting } from '../components/Greeting';

test('renders greeting correctly', () => {
  const { getByText } = render(<Greeting name="John" />);
  expect(getByText('Hello, John!')).toBeTruthy();
});


⚙️ 1. Unit Testing

Scope:
Tests a single piece of functionality (like a function, hook, or component) in isolation.

Goal:
To ensure each unit works as expected on its own.

Example:
Testing if a button component calls onPress when tapped.

test('calls onPress when button is pressed', () => {
  const onPressMock = jest.fn();
  const { getByText } = render(<Button title="Click" onPress={onPressMock} />);
  fireEvent.press(getByText('Click'));
  expect(onPressMock).toHaveBeenCalled();
});


Tools:

Jest

React Native Testing Library (RNTL)

🔗 2. Integration Testing

Scope:
Tests how multiple units work together — for example, how a component interacts with a hook, state, or API layer.

Goal:
To verify that combined parts of the app behave correctly when integrated.

Example:
Testing if pressing a button updates a list fetched from an API.

Tools:

Jest (still works fine here)

React Native Testing Library (for UI + logic integration)

🌐 3. End-to-End (E2E) Testing

Scope:
Tests the entire app flow — from user input to UI output — as if a real user is using it on a device.

Goal:
To ensure that the app works correctly as a whole, in a real-world scenario.

Example:
Launching the app → logging in → navigating to a profile screen → verifying the profile data shows up.

Tools:

Detox (the most popular E2E testing framework for React Native)

Appium (less common, but also possible)


(a) FLAT ARCHITECTURE
usually for small architecture
