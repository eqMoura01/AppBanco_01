import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Buttons from './Buttons';

export default function Balance({ saldo, gastos }) {
    return (
        <View style={styles.container}>

            <View style={styles.items}>
                <View style={styles.item}>
                    <Text style={styles.titleSaldo}>Saldo</Text>
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={[styles.balance]}>{saldo}</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <Text style={styles.titleSaldo}>Gastos</Text>
                    <View style={styles.content}>
                        <Text style={styles.currencySymbol}>R$</Text>
                        <Text style={styles.expenses}>{gastos}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonsView}>
               <Buttons/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ededed',
        marginTop: -50,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 5,
        height: 250,
        flexDirection: 'column',
    },
    items: {
        paddingTop: 5,
        paddingStart: 15,
        paddingEnd: 15,
        height: '50%',
        flexDirection: 'row',
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonsView: {
        height:'50%',
        width: '100%',
        borderRadius: 5
    },
    titleSaldo: {
        fontSize: 20,
        paddingStart: 0,
        color: 'grey'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    currencySymbol: {
        color: 'grey'
    },
    balance: {
        fontWeight: '700',
        fontSize: 18,
        alignItems: 'center',
        color: 'green'
    },
    currencySymbol: {
        fontSize: 12,
        paddingEnd: 3
    },
    expenses: {
        fontWeight: '700',
        fontSize: 18,
        alignItems: 'center',
        color: '#e74c3c'
    },
    item: {
        paddingStart: 10,
        paddingEnd: 10
    }
})