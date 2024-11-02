import React from 'react';
import {ScrollView,StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirebaseLogin from './src/firebase-login/FirebaseLogin';
import FirebaseRecuperarCuenta from './src/firebase-login/FirebaseRecuperarCuenta';
import FirebaseCrearCuenta from './src/firebase-login/FirebaseCrearCuenta';



const Stack = createNativeStackNavigator();

const App = () =>{
  return (
    //<ScrollView>
      // {/* <BasicComponents></BasicComponents>*/}
      // {/* <TextComponents></TextComponents>*/}
      // {/* <TextInputComponents></TextInputComponents>*/}
      // {/*<ListNotasComponents></ListNotasComponents>*/}
       <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="FirebaseLogin" component={FirebaseLogin}/>
            <Stack.Screen name="FirebaseRecuperarCuenta" component={FirebaseRecuperarCuenta}/>
            <Stack.Screen name="FirebaseCrearCuenta" component={FirebaseCrearCuenta}/>
          </Stack.Navigator>
       </NavigationContainer>
   // </ScrollView>

  );
}
const styles = StyleSheet.create({
});

export default App;