import React, { Component } from 'react';
import {View, SafeAreaView, ScrollView, Dimensions, Image} from 'react-native';
import Register from './component/Register';
import Login from './component/Login';
import Program from './component/Program';
import Dashboard from './component/Dashboard';
import Profile from './component/Profile';

/*
 * Composants qui contiennent le tiroir de navigation
 *
 */
import ProfileStack from './navigation/ProfileStack';
import DashboardStack from './navigation/DashboardStack';
import ProgramStack from './navigation/ProgramStack';
import MapStack from './navigation/MapStack';

import { createSwitchNavigator,
         createAppContainer,
         createDrawerNavigator, 
         createBottomTabNavigator,
         createStackNavigator,
         DrawerItems
} from 'react-navigation'
import Icon from '@expo/vector-icons/Ionicons';

const HomeBottomNavigation = createBottomTabNavigator(
  {
    DashboardStack:
    { screen: DashboardStack, navigationOptions:
        {title: 'Dashboard', tabBarIcon: 
            ({focused}) => (<Icon name="md-home" color={focused ? '#2b7ce5':'#898e93'} size={25} />)
        }
    },
    ProgramStack:
    { screen: ProgramStack, navigationOptions:
        { title: 'Programme', tabBarIcon: 
            ({focused}) => (<Icon name="ios-add-circle" color={focused ? '#2b7ce5':'#898e93'} size={25} />)
        }
    },
    MapStack: 
    {
      screen: MapStack, navigationOptions:
        { title: 'Map', tabBarIcon:
            ({focused}) => (<Icon name="md-compass" color={focused ? '#2b7ce5': '#898e93'} size={25} />)
        }
    },
    ProfileStack:
    { screen: ProfileStack, navigationOptions:
        {title: 'Profile', tabBarIcon:
         ({focused}) => (<Icon name="md-person" color={focused ? '#2b7ce5':'#898e93'} size={25} />)
        }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      return {
        header: null,
      }
    }
  }
)

const HomeNavigation = createStackNavigator(
    {
        HomeBottomNavigation:HomeBottomNavigation
    }
    
)

const CustomDrawer  = (props) => (
    <SafeAreaView style={{flex: 1}}>
        <View style={{height: 150, backgroundColor: 'white', alignItems: 'center', justifyContent:'center'}}>
        <Image source={require('./assets/icon.png')} 
            style={{height:100, width:100, borderRadius:60}} />
        </View>
        <ScrollView>
            <DrawerItems {...props} />
        </ScrollView>
    </SafeAreaView>
)

const AppDrawerNavigator = createDrawerNavigator({
    Page: {screen: HomeNavigation, navigationOptions:{title: 'Page actuelle' }},
    Dashboard: {screen: Dashboard},
    Program: {screen:Program, navigationOptions: {title: 'Programme'}},
    Profile: {screen: Profile},
    Disconnect: {screen:Login}
}, {
    contentComponent: CustomDrawer
}
)

const AppSwitchNavigator = createSwitchNavigator(
{
  Dashboard : {screen: AppDrawerNavigator},
  Login: {screen: Login},
  Register : {screen: Register}
})

const AppContainer = createAppContainer(AppSwitchNavigator);

export default class Routes extends Component {
    render () {
        return (
            <AppContainer />
        )
    }
}