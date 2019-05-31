import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Program from '../component/Program';
import Icon from '@expo/vector-icons/Ionicons';

const ProgramStack = createStackNavigator({
    Program: {
        screen: Program,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: 'Programme',
                headerLeft: (
                    <Icon style={{paddingLeft: 10}}
                onPress={() => navigation.openDrawer()}
                name="md-menu" size={30} />
                ),
                headerStyle: { backgroundColor: 'red' }
            }
        }
    }
})

export default ProgramStack;