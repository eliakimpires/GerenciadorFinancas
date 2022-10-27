import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";

import firebase from "../../../config";
import Select from "./Select";
import { SafeAreaView } from "react-native";
import { categorias } from "./Select/categorias";

  

const AddUserScreen = (props) => {
  const initalState = {
    name: "",
    email: "",
    phone: "",
    //dataHoje: "",
  };
  
  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };
  
  const saveNewUser = async () => {
    if (state.name == "") {
      alert("please provide a name");
    } else {
      
     // setState({ ...state, [dataHoje]:new Date()})

      try {
        await firebase.db.collection("users").add({
          name: state.name,
          email: state.email,
          phone: state.phone,
          //dataHoje: state.dataHoje,
        });

        props.navigation.navigate("UsersList");
      } catch (error) {
        console.log(error)
      }
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Name Input */}
      <SafeAreaView>
          <Select 
          options={categorias} 
          onChangeSelect={(id)=> handleChangeText(id, "name")} 
          text="Selecione uma categoria"
          label="Categoria:"
          value={state.name}         
          />
      </SafeAreaView>
      

      {/* Email Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Descrição"
          multiline={true}
          numberOfLines={4}
          onChangeText={(value) => handleChangeText(value, "email")}
          value={state.email}
        />
      </View>

      {/* Input */}
      <View style={styles.inputGroup}>
        <TextInput
          placeholder="Valor"
          onChangeText={(value) => handleChangeText(value, "phone")}
          value={state.phone}
        />
      </View>

      <View style={styles.button}>
        <TouchableOpacity 
        onPress={()=> saveNewUser()} style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: '#fff',
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    padding: 0,
    margin: 8,
    alignItems: 'center',
    backgroundColor: "#5CC6BA",
    borderRadius: 10,
    width: 250,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText:{
    fontSize: 20,
    color: '#fff',
    
  }
});

export default AddUserScreen;