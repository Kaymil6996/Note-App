import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text, Alert, NativeModules } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem'
import AddItem from './components/AddItem';

import axios from './axios';
import { render } from 'react-dom';
import { LinearGradient } from 'expo-linear-gradient';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: []
    }

  }



  componentDidMount() {
    this.getApiData()
  }

  async getApiData() {
    let res = await axios.get('/notes')

    this.setState({ data: res.data })
  }






  async deleteItem(id) {

    const datas = [...this.state.data].filter(item => item._id !== id);

    await axios.delete(`/notes/${id}`);
    this.getApiData()

    this.setState({ datas })

  }

  async addItem(item) {
    if (!item) {
      Alert.alert('error', 'Please enter an item');
    } else {
      const datas = [...this.state.data];

      const res = await axios.post('/notes', { item });
      const items = res.data



      this.getApiData()
      datas.push(items);

      this.setState({ datas })


    }
  }


  renderItem = ({ item }) => <ListItem key={item._id} item={item} id={item._id} deleteItem={(id) => this.deleteItem(id)} />

  render() {

    return (
      <View style={styles.container}>

        <Header />
        <AddItem addItem={(text) => this.addItem(text)} />


        <FlatList
          renderItem={this.renderItem}
          data={this.state.data}
          keyExtractor={item => item._id}

        />


      </View>
    );
  };

};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2a2a2a',
    flex: 1,

  },

})


export default App;