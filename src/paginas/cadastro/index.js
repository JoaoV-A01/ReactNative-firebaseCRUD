import { Component } from "react";
import { Text,View, Button, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native";


export default class Cadastro extends React.Component {
    render() {
      return (
        <View style={styles.container}>
          <View>
            <Text style={styles.header}>Cadastro</Text>
            <ScrollView>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nome"
                    maxLength={50}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nota 1"
                    maxLength={5}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nota 2"
                    maxLength={5}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Nota 3"
                    maxLength={5}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                    style={styles.textInput}
                    placeholder="Foto de Perfil"
                    maxLength={100}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity
                        style={styles.saveButton}
                    >
                        <Text style={styles.saveButtonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
          </View>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      backgroundColor: '#F5FCFF',
    },
    header: {
      fontSize: 25,
      textAlign: 'center',
      margin: 10,
      fontWeight: 'bold'
    }, 
    inputContainer: {
        paddingTop: 15
      },
      textInput: {
        borderColor: '#CCCCCC',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 50,
        fontSize: 25,
        paddingLeft: 20,
        paddingRight: 20
      },
      saveButton: {
        borderWidth: 1,
        borderColor: '#007BFF',
        backgroundColor: '#007BFF',
        padding: 15,
        margin: 5
      },
      saveButtonText: {
        color: '#FFFFFF',
        fontSize: 20,
        textAlign: 'center'
      }
  });
