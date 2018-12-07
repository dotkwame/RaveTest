# RaveTest

A sample app with react-native-rave integration.

1. `npm install`
2. `npm start`

If you get the error `@providesModule naming collision: Duplicate module name: react-native` you may need to delete the react-native folder in the node-modules folder of react-native-rave.

Probably another bug that may need resolving.

# Environment:

**OS**: macOS High Sierra 10.14
**Node**: 10.12
**npm**: 6.4.1
**watchman**: 4.9.0
**iOS SDK**: iOS 12.0
**expo-cli**: 2.6.0
**iPhone Simulator**: 5s

1. Initial view when `Make Payment` button is clicked on the intial screen
   ![initial view](/initial_view.png)

2. When Vodafone is selected, the screen cannot scroll to show the Pay button to be pressed
   ![vodafone screen](/vodafone_selected.png)

3. When the card is selected an error is thrown
   ![on error selected](/error_on_select_card.png)
