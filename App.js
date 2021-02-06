import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createAppContainer,createSwitchNavigator} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-tabs"
import ReadStoryScreen from "./screens/ReadStoryScreen"
import WriteStoryScreen from "./screens/WriteStoryScreen"
import loginScreen from "./screens/loginScreen"

export default class App extends React.Component {
  render(){
    return(
      <AppContainer/>
    )
  }
}

const TabNavigator = createBottomTabNavigator({
  Write : {screen:WriteStoryScreen},
  Read  : {screen:ReadStoryScreen}
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:()=>{
      const routeName = navigation.state.routeName
      if(routeName === "Write"){
        return(
          <Image source={require("./assets/write.png")} style={{width:45,height:45}}/>
        )
      }else if(routeName === "Read"){
        return(
          <Image source={require("./assets/read.png")} style={{width:45,height:45}}/>
        )
      }
    }
  })
}
)

const switchNavigator = createSwitchNavigator({
  loginScreen : {screen:loginScreen},
  TabNavigator : {screen:TabNavigator}
})


const AppContainer = createAppContainer(switchNavigator)