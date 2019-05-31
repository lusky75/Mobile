import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Profile from '../component/Profile';
import Details from '../component/Details';
import Icon from '@expo/vector-icons/Ionicons';

const ProfileStack = createStackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Profile',
                headerLeft: (
                    <Icon style={{paddingLeft: 10}}
                    onPress={() => navigation.openDrawer()}
                    name="md-menu" size={30} />
                ),
                headerRight: ( 
                    <Icon style={{paddingRight: 10}}
                    onPress={() => alert('More options...')}
                    name="md-camera" size={25}
                    />),
                headerStyle: { backgroundColor: 'green' }
            }
        }
    },
    Details : {screen: Details, 
        navigationOptions: {headerTitle:'Details'}}
})

export default ProfileStack;