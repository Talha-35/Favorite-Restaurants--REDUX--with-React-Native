import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {reducer , initialState} from './context'
import {Restaurant, Favorites, RestaurantDetails} from './pages';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const store = createStore(reducer , initialState);

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="restaurant" component={Restaurant} />
      <Stack.Screen name="details" component={RestaurantDetails} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <Provider store = {store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="main"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'favorites') {
                iconName = 'gratipay';
              } else if (route.name === 'main') {
                iconName = 'cutlery';
              }
              // You can return any component that you like here!
              return (
                <Icon
                  name={iconName}
                  size={size}
                  style={{marginTop: 35, marginRight: 160}}
                  color="#ad1457"
                />
              );
            },
          })}
          tabBarOptions={{
            activeTintColor: 'white',
            // Seçili olan sayfanın icon ve yazıların rengini değiştirir
            inactiveTintColor: 'black',
            // Seçili olmayan sayfanın icon ve yazıların rengini değiştirir
            activeBackgroundColor: '#455a64',
            // bu şekilde arka plan rengi verilebilir
            inactiveBackgroundColor: '#eceff1',

            // bu şekilde de bottom daki sayfa adına style vs verilebilir.
            labelStyle: {
              fontSize: 20,
              borderRadius: 10,
              bottom: 8,
              fontWeight: 'bold',
              paddingLeft: 15,
            },
          }}>
          <Tab.Screen
            name="main"
            component={Main}
            options={{title: 'Restaurant'}}
          />
          <Tab.Screen
            name="favorites"
            component={Favorites}
            options={{title: 'Favorites'}}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
