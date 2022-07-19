import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header'
import Balance from '../components/Balance'
import LastTransactions, {} from '../components/LastTransactions'
import { AntDesing } from '@expo/vector-icons'

export default function Home() {
    return (
        <View>
            <Header name="Victor Mora"/>
            <Balance saldo="3497,51" gastos="387,58"/>
            <LastTransactions/>
        </View>
    );
}

const styles = StyleSheet.create({

})