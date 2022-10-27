import { View, Text, StyleSheet, SafeAreaView, Platform, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons'

export default function GerenciarFaturamento({navigation}){

    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.inputArea}>
                <Text style={styles.title}>Gerencie seus custos aqui! Escolha abaixo faturamento deseja adicionar ou modificar!</Text>
                    <TouchableOpacity onPress={ () => navigation.navigate('Profile') }>
                        <Ionicons name="person-circle-outline" color="#434949" size={50} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subTitle}>O que você deseja fazer?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Vendas de produtos e serviços',{nome: 'João'})} style={styles.button}><Text style={styles.textButton}>Vendas de produtos e serviços</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Vendas a prazo',{nome: 'João'})} style={styles.button}><Text style={styles.textButton}>Vendas a prazo</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Estoque',{nome: 'João'})} style={styles.button}><Text style={styles.textButton}>Estoque</Text></TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    headerContainer: {
        padding: 20,
        paddingTop: Platform.OS == 'android' ? 50 : 0
    },
    title: {
        fontSize: 20,
        fontWeight: "650",
        color: "#BABABA",
        flex: 1,
        marginTop: -60,
        marginLeft: 25,
        textAlign: 'justify',
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "500",
        color: "#717F7F",
        paddingTop: 30,
        paddingBottom: 20,
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
        marginTop: -70, 
        marginRight: -20,  
    },
    textButton:{
        fontSize: 18,
        color: '#fff',
        fontWeight: '450',
    }   
});