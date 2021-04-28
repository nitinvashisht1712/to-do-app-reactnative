import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import Task from './components/Task';

export default function App() {
  const [task,setTask]= useState();
  const [taskItems,setTaskItems] = useState([]);
  const handleAddTask = () =>{
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);

  }
  const completeTask = (index) =>{
let itemsCopy = [...taskItems];
itemsCopy.splice(index,1);
setTaskItems(itemsCopy);
  }
 
  return(
  
    <LinearGradient colors={["#F53844","#42378F"]} style={styles.container}>
    <View style={styles.headerview}>
    <Text style={styles.headertext}>Tasks for Today</Text>
    </View>
    <ScrollView style={{width:"100%", flex:1}} showsVerticalScrollIndicator={false}>
      { 
        taskItems.map((item, index) =>{
        return (
         
          <TouchableOpacity key={index} onPress={() => completeTask(index)}>
          <Task  text={item}/>
          </TouchableOpacity>
          
        )
      })
      }
      </ScrollView>





    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={styles.textinput}>

    <TextInput style={styles.input} placeholder={"Write a Task"}
      value={task}
      onChangeText={text => setTask(text)}
    />
    <TouchableOpacity onPress = {()=> handleAddTask()}>
    <View style={styles.addbutton}>
      <Text style={styles.addText}>+</Text>
    </View>

    </TouchableOpacity>
    
    </KeyboardAvoidingView>
     </LinearGradient>
     




  )   
    

}

const styles = StyleSheet.create({
  container:{
   flex:1,
   paddingTop:15,
   
  },
  headerview:{
    alignItems:"center",
    justifyContent:"center",
    marginVertical:10,
    height:80,
    
    
  },
  headertext:{
    fontSize:30,
    fontWeight:"bold",
    color:"#FFF",
    },
  textinput:{
   marginVertical:10,
   width:"100%",
   flexDirection:"row",
   justifyContent:"space-around",
   alignItems:"center",
  },
  input:{
    borderColor:"#828282",
    borderWidth:2,
    paddingHorizontal:15,
    paddingVertical:10,
    width:250,
    backgroundColor:"#FFF",
    borderRadius:60,
    marginHorizontal:12,

  },
  addbutton:{
    borderColor:"#828282",
    borderWidth:2,
    padding:10,
    alignItems:"center",
    justifyContent:"center",
    height:60,
    width:60,
    backgroundColor:"#FFF",
    borderRadius:30,
  },
  addText:{
    color:"#505050",
  fontSize:30,
  },

})
