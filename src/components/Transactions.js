import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Transactions({ data }) {

  const [showValue, setShowValue] = useState(false)

  return (
    <TouchableOpacity style={styles.container} onPress={() => (setShowValue(!showValue))}>
      <Text style={styles.date}>{data.date}</Text>
      <View style={styles.content}>
        <Text style={styles.txtLabel}> {data.label} </Text>

        {showValue?
        (<Text style={data.type === 0 ?styles.txtValue : styles.txtExepenses}> R${data.value}</Text>)
        :(<View style={styles.blur}></View>)}

        
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 0.8,
    borderBottomColor: '#DADADA',
    marginBottom: 15,
    TouchableOpacity: 0.9
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
    marginBottom: 4
  },
  date: {
    color: '#979696'
  },
  txtLabel: {
    fontSize: 15,
    fontWeight: '400',
    fontStyle: 'italic'
  },
  txtValue: {
    fontSize: 15,
    color: 'green'
  },
  txtExepenses: {
    fontSize: 15,
    color: 'red'
  },
  blur:{
    backgroundColor: '#DADADA',
    width: 100,
    height: 15,
    borderRadius: 3
  }
})