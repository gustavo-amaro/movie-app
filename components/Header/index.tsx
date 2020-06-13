import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Header() {
    const styles = StyleSheet.create({
        linearGradient: {
            flex: 1,
            height: '40%',
            width: '100%',
            position: 'absolute',
            top: 0,
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
            alignItems: 'center',
            justifyContent: 'center'
        },
        icon: {
            marginBottom: 170
        }
    });
    return (
        <LinearGradient colors={['#6732a8','#3258a8']} style={styles.linearGradient} >
            <Icon name="film" color="#fff" size={85} style={styles.icon}/>
        </LinearGradient>
  );
}