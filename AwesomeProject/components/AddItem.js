import React,{useState} from 'react';
import {View, StyleSheet,Text,TextInput, TouchableOpacity, DatePickerIOS} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const AddItem = ({addItem,getApiData}) => {
    const [item, setItems] = useState('');

const onChange = textValue => setItems(textValue);

  return (
      <View style={styles.view}>
          <TextInput placeholder="Add Item..." placeholderTextColor="#fff" style={styles.input} value={item} onChangeText={onChange }/>
          <TouchableOpacity style={styles.btn} onPress={() => {
              addItem(item);
    
               
          setItems('');
        }}>
              <Text style={styles.btnText}>
                  <Icon name="plus" size={20} /> Add Item </Text>
          </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16,
        color:'white',
        
    },
    view: {
        color: 'white',
        backgroundColor:'#101010'
    },
    
    btn: {
        backgroundColor: 'black',
        padding: 9,
        margin: 5,
        borderColor:'#21ebff'
    },
    btnText: {
        color: '#21ebff',
        fontSize: 20,
        textAlign: 'center',
     
    },
})


export default AddItem;