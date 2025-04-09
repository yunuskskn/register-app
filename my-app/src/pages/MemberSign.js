import React, { useState } from "react";
import {SafeAreaView, StyleSheet, Text, View, Alert} from "react-native";

import Input from "../components/input"
import Button from "../components/Button";

function MemberSign({navigation}){

    const [userName, setUserName] = useState(null);
    const [userSurname, setUserSurname] = useState(null);
    const [userEmail, setEmail] = useState(null);
    const [userPassword, setPassword] = useState(null);

    function handleSubmit(){
    
        if(!userName || !userSurname || !userEmail || !userPassword){
            Alert.alert("YUNUS OTO", "Bilgiler boş bırakılamaz!")
            return
        }

        const user = {
            userName,
            userSurname,
            userEmail,
            userPassword
        }
        
        navigation.navigate("MemberResultScreen", {user} )
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Üye Kayıt</Text>
            <Input label="Üye Adı" placeholder="Üye adını giriniz..." onChangeText={setUserName}/>
            <Input label="Üye Soyadı" placeholder="Üye soyadını giriniz..." onChangeText={setUserSurname}/>
            <Input label="Üye Email" placeholder="Üye emailini giriniz..." onChangeText={setEmail}/>
            <Input label="Üye Şifre" placeholder="Üye şifreni giriniz..." onChangeText={setPassword}/>
            <Button text="Kaydı Tamamla" onPress={handleSubmit}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold",
        margin: 10

    }
})

export default MemberSign;