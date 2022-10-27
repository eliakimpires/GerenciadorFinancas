import React, { useState, useEffect } from "react";
import { Button, StyleSheet,TouchableOpacity,Text } from "react-native";
import { ListItem, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import firebase from "../../../config";
const UserScreen = (props) => {
  const [users, setUsers] = useState([]);


  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, phone, } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          phone,       
        });
      });
      setUsers(users);
    });
  }, []);



  return (
    <ScrollView>
      
        
        <TouchableOpacity onPress={()=> props.navigation.navigate('CreateUserScreen')} style={styles.button}><Text style={styles.buttonText}>Cadastrar Novo</Text></TouchableOpacity>

      
      {users.map((user) => {
        return (
          
          <ListItem
            key={user.id}
            bottomDivider
            onPress={() => {
              props.navigation.navigate("UserDetailScreen", {
                userId: user.id,
              });
            }}
          >
            <ListItem.Content>
              <ListItem.Title>{user.name}</ListItem.Title>
              <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
              <ListItem.Subtitle>{user.phone}</ListItem.Subtitle>

            </ListItem.Content>
          </ListItem>
        );
      })}
    </ScrollView>
  );
};




const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#5CC6BA",
    borderRadius: 2,
    padding: 10,
  },
  buttonText: { 
    fontSize: 20,
    color: "#fff",
    fontWeight: "600",
  }
})

export default UserScreen;