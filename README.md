# React Native Clean Number Input

React Native Component that removes all non-numeric characters from user input.

![demo](/demo.gif)

## Installation
```
npm install react-native-clean-number-input
```

## Usage

Just import the `NumberInput` Component and render it. When the value of the input changes all non-numeric characters will removed.

```javascript
import NumberInput from 'react-native-clean-number-input';

class App extends React.Component {
  render() {
    return (
      <View>
        <NumberInput value={20} />
      </View>
    );
  }
}
```

## Props

The `NumberInput` Component can accept any prop that `TextInput` accept, but the prop `value` is required. To customize the `TextInput` that is rendered inside the `NumberInput` Component, simply pass props the `TextInput` accepts to the `NumberInput` Component. You can find the props the `TextInput` Component accepts [here](https://facebook.github.io/react-native/docs/textinput.html#props).

Here is an example of how to change the keyboard type to `numeric`.

```javascript
import NumberInput from 'react-native-valid-number-input';

class App extends React.Component {
  render() {
    return (
      <View>
        <NumberInput
          value={20}
          keyboardType={'numeric'}
        />
      </View>
    );
  }
}
```