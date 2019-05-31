import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {Button,} from 'react-native-elements'

class Map extends React.Component {
    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Géolocalisation</Text>
            </View>
        );
    }
}

export default Map;