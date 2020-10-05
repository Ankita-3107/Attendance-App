import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default class Table extends React.Component{
  render(){
    return (
      <View style={styles.grid}>
      <Text style={styles.text}> Roll No.  </Text>
      <Text style={styles.text}>  Name            </Text>
      <Text style={styles.text1}>   Status       </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: "orange",
    fontSize: 15,
    fontWeight: "italic",
    textAlign: "center",
    padding: 10,
  },
  text1: {
    backgroundColor: "orange",
    fontSize: 15,
    fontWeight: "italic",
    textAlign: "center",
    padding: 10,
    //paddingRight: 42,
  },
  grid: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
   }
})