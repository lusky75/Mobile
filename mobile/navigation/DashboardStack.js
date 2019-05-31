import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Dashboard from '../component/Dashboard';
import Icon from '@expo/vector-icons/Ionicons';

const DashboardStack = createStackNavigator({
    Dashboard: {
        screen: Dashboard,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Dashboard',
                headerLeft: (
                    <Icon style={{paddingLeft: 10}}
                onPress={() => navigation.openDrawer()}
                name="md-menu" size={30} />
                ),
                headerStyle: { backgroundColor: '#2b7ce5' }
            }
        }
    }
})

export default DashboardStack;