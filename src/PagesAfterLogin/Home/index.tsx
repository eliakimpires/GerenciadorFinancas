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
                    <Text style={styles.title}>Bem-vindo de volta fulano!</Text>
                    
                    <TouchableOpacity onPress={ () => navigation.navigate('Profile') }>
                        <Ionicons name="person-circle-outline" color="#434949" size={50} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subTitle}>O que você deseja fazer?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Gerenciar Custos',{nome: 'João'})} style={styles.button}><Text style={styles.textButton}>Gerenciar custos</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Gerenciar Faturamento',{nome: 'João'})} style={styles.button}><Text style={styles.textButton}>Gerenciar faturamento</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('DRE',{nome: 'João'})} style={styles.button}><Text style={styles.textButton}>Gerar DRE</Text ></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    headerContainer: {
        padding: 20 ,
        paddingTop: Platform.OS == 'android' ? 50 : 0
    },
    title: {
        fontSize: 22,
        fontWeight: "500",
        color: "#BABABA",
        flex: 1,
        marginTop: -50,
        marginLeft: 25,
        
        
    },
    subTitle: {
        fontSize: 16,
        fontWeight: "400",
        color: "#717F7F",
        paddingTop: 12,
        paddingBottom: 50,
        alignSelf: 'center'
    },
    button: {
        alignSelf: "center",
        borderRadius: 5,
        backgroundColor: "#5CC6BA",
        margin: 10,
        padding: 10,
        width: 270,
        alignItems: 'center',

    },
    inputArea:{
        flexDirection: 'row',
        width: '100%',
        paddingTop: 20,
    },
    icon:{
        paddingLeft: 0,
        marginTop: -60, 
        marginRight: -20,        
    },
    textButton:{
        fontSize: 18,
        color: '#fff',
    }    
});