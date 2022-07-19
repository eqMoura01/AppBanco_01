import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Transactions from './Transactions'


const list = [
    //Tipo 0 = Entradas, tipo 1 = Saidas
    {
        id: 1,
        label: 'Robozinho do Pix',
        value: '150,00',
        date: '15/07/2022',
        type: 0
    },
    {
        id: 2,
        label: 'Boleto de Luz',
        value: '-450,00',
        date: '17/07/2022',
        type: 1
    },
    {
        id: 3,
        label: 'Robozinho do Pix',
        value: '350,00',
        date: '17/07/2022',
        type: 0
    },
    {
        id: 4,
        label: 'Pix de Oscar',
        value: '1.700,00',
        date: '18/07/2022',
        type: 0
    },
    {
        id: 5,
        label: 'SSD XRAY 1TB',
        value: '-320,51',
        date: '18/07/2022',
        type: 1
    },

]

export default function LastTransactions() {
    return (
        <View>
            <Text style={styles.title}> Últimas movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Transactions data={item}/>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        paddingStart: 14,
        paddingTop: 11,
        fontWeight: '600'
    },
    list: {
        marginStart: 25,
        marginEnd: 25
    }
})

