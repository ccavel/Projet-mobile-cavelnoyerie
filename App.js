import React, { Component } from "react";
import { TouchableOpacity, Text, View, ScrollView, Button } from "react-native";

import { createAppContainer } from "react-navigation";
import { createStackNavigator, HeaderTitle } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "./components/HomeScreen";
import PlayScreen from "./components/PlayScreen";
import RandomScreen from "./components/RandomScreen";
import Ex1Screen from "./components/Ex1Screen";
import Ex2Screen from "./components/Ex2Screen";
import MyAccountScreen from "./components/MyAccountScreen";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "Home") {
    iconName = `ios-home`;
  } else if (routeName === "Play") {
    iconName = `logo-game-controller-a`;
  } else if (routeName === "Random") {
    iconName = `ios-shuffle`;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const HomeStack = createStackNavigator({
  Bibi: {
    screen : HomeScreen,
    navigationOptions: {title : "C'est pas de la Kaamelott"},
  },
  Play: PlayScreen,
  Random: RandomScreen,
  MyAccount: {
    screen : MyAccountScreen,
    navigationOptions: {title : "Mon Compte"},
  },
}
);


const PlayStack = createStackNavigator({
  LetsPlayALittleGame: {
    screen : PlayScreen,
    navigationOptions: {title : "PLAY"},
  },
  Ex1 : {
    screen : Ex1Screen,
    navigationOptions: {title : "Jeu n°1"},
  },
  Ex2 : {
    screen : Ex2Screen,
    navigationOptions: {title : "Jeu n°2"},
  }, 
} 
);

const RandomStack = createStackNavigator({
  Random: {
    screen : RandomScreen,
    navigationOptions: {title : "Laissez-vous surprendre ..."},
  },
});


const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeStack,
    Play: PlayStack,
    Random: RandomStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor),
    }),
    tabBarOptions: {
      activeTintColor: "#e91e63",
      inactiveTintColor: "gray",
    },
  }
);

const AppContainer = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
