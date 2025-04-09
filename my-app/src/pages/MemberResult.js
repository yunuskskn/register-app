import React from "react";
import {SafeAreaView, View, Text, StyleSheet} from "react-native"
import Button from "../components/Button";

function MemberResult({route, navigation}){
    
    const {user} = route.params

    function goToHomeScreen(){
        navigation.navigate("WelcomeScreen")
    }

    return(
    <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Kayıt Tamamlandı!</Text>
        <View style={styles.text_container}>
        <Text style={styles.text}>Üye Adı: {user.userName} </Text>
        <Text style={styles.text}>Üye Soyadı: {user.userSurname} </Text>
        <Text style={styles.text}>Üye Email: {user.userEmail} </Text>
        <Text style={styles.text}>Üye Şifre: {user.userPassword} </Text>
        </View>
        <View style={styles.button}>
        <Button text="Ana Sayfaya Dön" onPress={goToHomeScreen}/>
        </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
    header: {
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        flex: 1,
        justifyContent: "flex-end"
    },
    text_container: {
        flex: 1,
        justifyContent: "center"
    }
})

export default MemberResult;