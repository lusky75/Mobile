import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button,} from 'react-native-elements'
import Icon from '@expo/vector-icons/Ionicons';

class Profile extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Button title="Plus de détails"
                onPress={() => this.props.navigation.navigate('Details')} />
            </View>
        );
    }
}

export default Profile;