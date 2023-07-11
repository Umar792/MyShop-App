import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [name,setName] = useState("");

  const datasubmit = ()=>{
    if(!name){
      return alert("Enter UserName")
    }
    else{
      console.warn(name)
    }
  }
  return (
    <View style={styles.container}>
      <TextInput type='text' placeholder='Enter Your User Name' value={name} onChangeText={(text)=> setName(text)}/>
      <Button title='Submit' onPress={datasubmit}/>
      <StatusBar backgroundColor='white' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
