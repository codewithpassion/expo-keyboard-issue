import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Expo, { Constants } from 'expo';


export default class App extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      text: '',
      selection: { start: 0, end: 0 },
    };
  }



  render() {
    const self = this;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.paragraph}
          multiline={true}
          blurOnSubmit={true}
          onChangeText={function (text) { self.setState({ text }); }}
          value={this.state.value}
        />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    height: 300,
    width: 300,
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#34495e',
    backgroundColor: '#fff',
  },
});
Expo.registerRootComponent(App);
