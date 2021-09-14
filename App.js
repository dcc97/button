import React, {Component} from 'react';
import {Button, View, Text } from 'react-native';

class RedButton extends Component {
  displayAlert = ()=>{
    alert("This is an alert");
  }
  render(){
    return(
      <Button title = "Click Me" color="red" onPress={this.displayAlert}/>
    );
  }
}

export default class App extends Component {
  render() { //display/render output
    return (
      <View style = {{marginTop:200}}>
        <RedButton/>
        <Text> My React Component</Text>
      </View>
    );
  }
}