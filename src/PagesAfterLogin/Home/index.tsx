import { View, Text, StyleSheet, SafeAreaView, Platform, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import SelectBox from 'react-native-multi-selectbox'
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons'


export default function Home({navigation}){


    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.inputArea}>
                    <Text style={styles.title}> Bem-vindo de volta, fulano!</Text>
                    <TouchableOpacity onPress={ () => navigation.navigate('Profile') }>
                        <Ionicons name="person-circle-outline" color="a1a1a1" size={50} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subTitle}>O quê você deseja fazer?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Gerenciar Custos',{nome: 'João'})} style={styles.button}><Text style={styles.buttonText}>Gerenciar custos</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Gerenciar Faturamento',{nome: 'João'})} style={styles.button}><Text>Gerenciar faturamento</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('DRE',{nome: 'João'})} style={styles.button}><Text>Gerar DRE</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "fff",
    },
    headerContainer: {
        padding: 20,
        paddingTop: Platform.OS == 'android' ? 50 : 0
    },
    title: {
        fontSize: 21,
        fontWeight: "500",
        color: "344422",
        marginTop: -58, 
        
        },
    subTitle: {
        fontSize: 16,
        fontWeight: "400",
        color: "300022",
        paddingTop: 12,
        paddingBottom: 20,
        paddingHorizontal: 6,
        textAlign: 'center',
    },
    button: {
        alignSelf: "center",
        borderRadius: 5,
        backgroundColor: "#5CC6BA",
        margin: 10,
        padding: 10,
        width: 300,
        alignItems: 'center'
    },
    inputArea:{
        flexDirection: 'row',
        width: '100%',
        paddingTop: 20,
    },
    icon:{
        paddingLeft: 20,
        marginLeft:5 ,
        marginTop: -70,
    },
    buttonText:{
        fontSize: 22,
        color: "#FFFFFF",
       
    }
});