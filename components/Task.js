import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

const Task = (props) => {
    return (
        <View style={styles.items}>
        <View style={styles.itemsleft}>
        <View style={styles.square}>
        
        <Image source={require('../assets/completed.png')}
            style={{height:30,width:30}}
        />
        
        </View>
        <Text style={styles.itemstext}>{props.text}</Text>
        </View>
            <View style={styles.circular}></View>
        </View>
    )
}
const styles = StyleSheet.create({
    items:{
        padding:15,
        backgroundColor:"#FFF",
        borderRadius:20,
        opacity:0.8,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        marginTop:20,
        marginHorizontal:15,
    },
    itemsleft:{
        flexDirection:"row",
        alignItems:"center",
        flexWrap:"wrap"

    },
    square:{
        alignItems:"center",
        justifyContent:"center",
        width:30,
        height:30,
        marginRight:15,
    },
    itemstext:{
        maxWidth:"80%",
    },
    circular:{
        width:12,
        height:12,
        borderRadius:5,
        borderColor:"#55BCF6",
        borderWidth:2,
    }
})

export default Task;


