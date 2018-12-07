import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Rave from 'react-native-rave';

export default class App extends React.Component {

  onSuccess = (data) => {
    console.log("PayInvoice: success", data);

  };

  onFailure = (data) => {
    console.log("PayInvoice: error", data);
  };

  render() {
    return (<Rave
      amount="10"
      country="GH"
      currency="GHS"
      email="test@mail.com"
      firstname="Oluwole"
      lastname="Adebiyi"
      publickey="FLWPUBK-**************************-X"
      secretkey="FLWSECK-**************************-X"
      paymenttype="both"
      page="mobilemoneygh"
      meta={[
      {
        metaname: "color",
        metavalue: "red"
      }, {
        metaname: "storelocation",
        metavalue: "ikeja"
      }
    ]}
      production={false}
      onSuccess={res => this.onSuccess(res)}
      onFailure={e => this.onFailure(e)}/>);
  }
}