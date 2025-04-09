import React from "react";
import {Text, View, TextInput} from "react-native"
import styles from "./input.style"


function Input({label, onChangeText, placeholder}){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.input_container}>
            <TextInput placeholder={placeholder} onChangeText={onChangeText}/>
            </View>
        </View>
    )
}

export default Input;