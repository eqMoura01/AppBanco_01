import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons'

export default function Buttons() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

            <TouchableOpacity style={styles.actionBtn}>

                <View style={styles.button}>
                    <AntDesign style={styles.btnButton} name="addfolder" size={40} color={'black'} />
                </View>
                <Text style={styles.txtBtn}>Entradas</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.actionBtn}>

                <View style={styles.button}>
                    <AntDesign name="tagso" size={40} color={'black'} />
                </View>
                <Text style={styles.txtBtn}>Compras</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.actionBtn}>

                <View style={styles.button}>
                    <AntDesign name="creditcard" size={40} color={'black'} />
                </View>
                <Text style={styles.txtBtn}>Cartões</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.actionBtn}>

                <View style={styles.button}>
                    <AntDesign name="barschart" size={40} color={'black'} />
                </View>
                <Text style={styles.txtBtn}>Investimentos</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.actionBtn}>

                <View style={styles.button}>
                    <AntDesign name="barcode" size={40} color={'black'} />
                </View>
                <Text style={styles.txtBtn}>Boletos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionBtn}>

                <View style={styles.button}>
                    <AntDesign name="addusergroup" size={40} color={'black'} />
                </View>
                <Text style={styles.txtBtn}>Convidar amigos</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.actionBtn}>

                <View style={styles.button}>
                    <AntDesign name="setting" size={40} color={'black'} />
                </View>
                <Text style={styles.txtBtn}>Configurações</Text>
            </TouchableOpacity>



        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 5,
        flexDirection: 'row'
    },
    actionBtn: {
        marginRight: 20,
        marginTop: 10,
        width: 100,
        height: 100,
        alignItems: 'center'
    },
    button: {
        width: 70,
        height: 70,
        opacity: 0.7,
        borderRadius: 70 / 2,
        backgroundColor: '#DADADA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtBtn: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '500'
    }
})