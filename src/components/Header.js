import React from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import Buttons from './Buttons'

export default function Header({name}) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.userName} > {name}</Text>
                
                <TouchableOpacity activeOpacity={0.5} style={styles.userIcon}>
                    <Feather name="user" color="white" size={27} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const statusBarHigh = StatusBar.currentHeight ? StatusBar.currentHeight + 24 : 64;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHigh,
        height: 200,
        paddingStart: 16,
        paddingEnd: 16,
        flexDirection: 'row',
        paddingBottom: 44
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1
    },
    userName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    userIcon: {
        backgroundColor: 'rgba(255,255,255,0.3)',
        width: 44,
        height: 44,
        borderRadius: 44 / 2,
        justifyContent: 'center',
        alignItems: 'center'
    }
})