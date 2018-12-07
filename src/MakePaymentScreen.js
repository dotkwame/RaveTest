import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Rave from 'react-native-rave';

export default class PayInvoice extends React.Component {
  onSuccess = (data) => {
    console.log("PayInvoice: success", data);

  };

  onFailure = (data) => {
    console.log("PayInvoice: error", data);
  };

  render() {
    return (<Rave
      amount={"150"}
      country="GH"
      currency="GHS"
      email={"test@emailer.com"}
      firstname={"Fname"}
      lastname={"Lname"}
      publickey={""}
      secretkey={""}
      paymenttype="both"
      page="mobilemoneygh"
      meta={[{
        metaname: 'taskInvoiceId',
        metavalue: `${new Date().getTime()}`
      }
    ]}
      production={false}
      onSuccess={res => this.onSuccess(res)}
      onFailure={e => this.onFailure(e)}/>);
  }
}