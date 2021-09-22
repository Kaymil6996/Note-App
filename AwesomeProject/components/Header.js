import React from 'react';
import {View, StyleSheet, FlatList,Text,Alert} from 'react-native';



const Header = () => {

 
 




  

  return (
    <View style={styles.header}>
      
      <Text style={styles.text}>My Items</Text>
    
        
    </View>
  );
};

const styles = StyleSheet.create({
        header: {
        backgroundColor: '#101010',
            height:70,
       
    },
    
    text: {
        paddingTop:15,
         color: 'white',
        textAlign: 'center',
        fontSize: 30,
        letterSpacing: 3,
        
    }
 
})


export default Header;