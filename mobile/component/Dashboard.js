import React, {Component} from 'react';
import {Switch, Text, View, Image, StyleSheet, Picker} from 'react-native';
import Icon from '@expo/vector-icons/Ionicons';
import ProgressCircle from 'react-native-progress-circle'

const message1 = "Pour la longévité de vos batteries la charge conseillée est de 80%";
const message2 = "En choisissant le mode optimisé qoVoltis prépare votre"
+ "véhicule pour votre heure de départ et gère les horaires de"
+ "recharge pour vous faire bénéficier du meilleur tarif possible."
+ "Vous contribuez à l'utilisation raisonnée des sources d'énergie"
+ "tout en allégeant votre facture";
const message3 = "qoVoltis sollicitera votre participation au programme"
+ "d'économie d'énergie en fonction de l'état du réseau et de"
+ "l'état de charge de votre batterie";

class Dashboard extends React.Component {
    constructor() {
        super();
        this.state = {
            battery: 70,
            percent: 0,
            charge: false,
            likeEarth: false,
        }
    }

    setCharge = (value) => {
        this.setState({charge: value})
    }

    setLikeEarth = (value) => {
        this.setState({likeEarth: value})
    }

    setPercent = (value) => {
        this.setState({percent: value})
    }

    render() {
        return (
            <View>
                <View style={styles.containerInfo}>
                    <Image source={require('../assets/icone-bornecharge.jpg')}
                            style={styles.borne} />
                    <View>
                        <Text style={styles.borneInfo}>Borne 05 </Text>
                        <Text style={styles.borneInfo}>17, rue Jean Jaures 92120 MONTROUGE</Text>
                    </View>
                </View>

                <View style={styles.containerInfo}>
                    <ProgressCircle
                        percent={this.state.battery}
                        radius={50}
                        borderWidth={8}
                        color="#3399FF"
                        shadowColor="#999"
                        bgColor="#fff">
                        <Text style={{ fontSize: 18 }}>{this.state.battery + '%'}</Text>
                    </ProgressCircle>
                    <View>
                        <View>
                        <Text style={{paddingLeft: 10}}>Mon besoin minimum</Text>
                        <Picker
                        selectedValue={this.state.percent}
                        onValueChange={this.setPercent} >
                            <Picker.Item label='40%' value='40' />
                            <Picker.Item label='50%' value='50' />
                            <Picker.Item label='60%' value='60' />
                            <Picker.Item label='70%' value='70' />
                            <Picker.Item label='80%' value='80' />
                            <Picker.Item label='90%' value='90' />
                        </Picker>
                        </View>
                        <Text style={{paddingLeft: 10}}>Je dois partir à</Text>
                    </View>
                </View>

                <View style={styles.containerInfo}>
                    <Text style={{paddingBottom: 50}}>{message1}</Text>
                </View>

                <View style={styles.containerInfo}>
                    <Text style={styles.productName}>Charge rapide</Text>
                    <Switch 
                        trackColor={{ true: 'blue', false: 'grey'}}
                        style= {{transform: [{ scaleX: 2}, { scaleY: 2 }], paddingLeft: 30}}
                        value={this.state.charge}
                        onValueChange = {this.setCharge} />
                    <Text style={styles.optimise}>Optimisé</Text>
                </View>

                <View style={styles.containerInfo}>
                    <Icon name="md-information-circle-outline" color="#2b7ce5" size={30}
                          onPress={() => alert('info 1')}/>
                    <Text style={{fontSize:14, paddingRight: 40, paddingLeft: 15}}>
                        {message2}
                    </Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, color:'grey'}}>J'aime ma planète !</Text>
                    <Switch 
                        trackColor={{ true: 'blue', false: 'grey'}}
                        style= {{transform: [{ scaleX: 2}, { scaleY: 2 }], paddingTop: 20}}
                        value={this.state.likeEarth}
                        onValueChange = {this.setLikeEarth} />
                </View>
                <View style={styles.containerInfo}>
                    <Icon name="md-information-circle-outline" color="#2b7ce5" size={30}
                          onPress={()=> alert('info 2')}/>
                    <Text style={{fontSize:14, paddingRight: 40, paddingLeft: 15}}>
                        {message3}
                    </Text>
                </View>

            </View>
        );
    }
}

export default Dashboard;

const styles = StyleSheet.create({
    productName: {
        alignSelf: 'flex-start',
        paddingLeft: 30
    },
    optimise: {
        paddingLeft: 30
    },
    containerInfo:{
        paddingTop:15,
        flexDirection:'row',
        paddingLeft: 15,
    },
    borneInfo:{
        paddingLeft: 15,
    },
    borne: {
        width: 80,
        height: 80,
        justifyContent: 'flex-end',
    },
})

