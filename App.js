import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {createStackNavigator, createAppContainer} from "react-navigation";
import PayInvoice from './src/MakePaymentScreen';

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Make Payment"
          onPress={() => this.props.navigation.navigate("Pay")}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const AppNavigator = createStackNavigator({
  Home: App,
  Pay: PayInvoice
}, {initialRouteName: "Home"});

export default createAppContainer(AppNavigator);