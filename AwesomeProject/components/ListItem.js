import React from 'react';
import {View, Text,StyleSheet,TouchableOpacity,TextInput,} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ListItem = ({item,deleteItem,id}) => {

  
  return (
  
    <TouchableOpacity style={styles.listitem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.item}</Text>
        <Icon name="remove" size={20} color="firebrick" onPress={()=>deleteItem(id) }/>
     </View>
    </TouchableOpacity>
  );

};

const styles = StyleSheet.create({
  listitem: {
    padding: 15,
    backgroundColor: 'black',
    borderBottomWidth: 1,
    borderColor: '#eee',
    
  },


  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  listItemText: {
    fontSize: 18,
    color:'white'
  }
});

export default ListItem;