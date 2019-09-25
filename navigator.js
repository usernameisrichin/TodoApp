import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import HomeScreen from './home'
import AddTodo from './addtodo'
import { Icon } from 'native-base';



const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    path: '/',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarLabel: 'Home', 
      // tabBarIcon:({tintColor})=>(  
      //   <Icon name="ios-home" color={tintColor} size={25}/>  
      // )  
    }),
  },
  Add: {
    screen: AddTodo,
    path: '/',
    navigationOptions: ({navigation}) => ({
        tabBarLabel: 'Add',
        // tabBarIcon:({tintColor})=>(  
        //       <Icon name="ios-add" color={tintColor} size={25}/>  
        //   )  
      }),
  },
},
{
    tabBarOptions:{
      activeBackgroundColor:'#EEFFC4',
      activeTintColor:'rgba(0, 0, 0,0.5)',
      inactiveBackgroundColor:'#FFFFFF',
      indicatorStyle:{
        backgroundColor:'#EEFFC4',
        paddingBottom:3,
      },
      style:{
        backgroundColor:'#FFFFFF',
      },
      labelStyle:{
        color:"#11137C",
        fontSize:16,
        marginBottom: 10
      },
      tabStyle:{
        padding:0,
        height:50,
      },
      showLabel:true,
      showIcon:true,
    },
  }
);

const StacksOverTabs = createStackNavigator({
  Root: TabNavigator
})


export default createAppContainer(StacksOverTabs);