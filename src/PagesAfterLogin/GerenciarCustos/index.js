import { View, Text, StyleSheet, SafeAreaView, Platform, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons'

export default function GerenciarCustos({navigation}){
    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.inputArea}>
                    <Text style={styles.title}>Gerencie seus custos aqui, escolha abaixo qual custo deseja adicionar ou modificar!</Text>
                    <TouchableOpacity onPress={ () => navigation.navigate('Profile') }>
                        <Ionicons name="person-circle-outline" color="a1a1a1" size={30} style={styles.icon}/>
                    </TouchableOpacity>
                </View>
                <Text style={styles.subTitle}>O que você deseja fazer?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Investimento fixo',{nome: 'João'})} style={styles.button}><Text style={styles.buttonText}>Investimento fixo</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Custo fixo',{nome: 'João'})} style={styles.button}><Text style={styles.buttonText}>Custo fixo</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Custos com mão de obra',{nome: 'João'})} style={styles.button}><Text style={styles.buttonText}>Custos com mão de obra</Text></TouchableOpacity>
                <TouchableOpacity onPress={()=> navigation.navigate('Custos variáveis',{nome: 'João'})} style={styles.button}><Text style={styles.buttonText}>Custos variáveis</Text></TouchableOpacity>
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
        fontWeight: "500",
        color: "344422",
        textAlign: 'justify',
        marginTop: -55,
    },
    subTitle: {
        fontSize: 18,
        fontWeight: "400",
        color: "300022",
        paddingTop: 20,
        paddingBottom: 20,
        paddingHorizontal: 6,
        textAlign: "center",
        
        
    },
    button: {
        alignSelf: "center",
        borderRadius: 5,
        backgroundColor: "#5CC6BA",
        margin: 10,
        padding: 10,
        width: 300,
        alignItems: 'center',
    },
    inputArea:{
        flexDirection: 'row',
        width: '100%',
        paddingTop: 20,
    },
    icon:{
        paddingLeft: 20,
    },
    buttonText:{
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: "bolder"
    }
});