/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { bold } from 'ansi-colors';


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      contador: 0
    }
  }

  contar = (acao) => {
    if (acao == '+'){
      this.setState({
        contador: this.state.contador+1
      })
    }else if(acao == '-'){
      this.setState({
        contador: this.state.contador === 0
        ? 0
        : this.state.contador-1 
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=> {this.contar('+')}}>
          <Text style={styles.botao}>Incrementar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {this.contar('-')}}>
          <Text style={styles.botao}>Decrementar</Text>
        </TouchableOpacity>
        <Text style={styles.contador}>
          {this.state.contador !== 0 
            ? this.state.contador 
            : 0}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 20
  },
  botao: {
    fontWeight: 'bold',
    padding: 10,
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
    backgroundColor: '#ff1'
  },
  contador: {
    fontSize: 40,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
