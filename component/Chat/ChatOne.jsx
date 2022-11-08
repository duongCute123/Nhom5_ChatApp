import React from "react";
import { Component } from "react";
import { StyleSheet } from "react-native-web";
import { useState } from "react";
import { firebase } from "../../database/firebase";
import { View, Text, TextInput, Image, Button } from "react-native";
const DangXuat = () => {
    const [uid, setUid] = ''
    const [displayName, setdisplayName] = ''
    const signOut = () => {
        firebase.auth().signOut().then(() => {
            navigation.navigate('Login')
        })
            .catch(error => ({ errorMessage: error.message }))
    }
    return (
        <View>
            return (
            <View style={{}}>
                <Button
                    color="#3740FE"
                    title="Logout"
                    onPress={signOut}
                />
            </View>
            );
        </View>
    )
}
const ChatvsFriend = () => {

}
const ChatOne = () => {
    return (
        <View style={{ flex: 1, width: "100%", height: "100%", backgroundColor: "white", marginTop: 40 }}>
            <View style={{}}>
                <Text style={{ color: "red", fontSize: "60", textAlign: "center", alignItems: "center" }}>Chat App Nhóm 5</Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <TextInput style={{ width: 300, height: 30 }} placeholder="Nhập bạn bè cần tìm"></TextInput>
                    <Button title="Tìm Kiếm" color={"red"}></Button>
                </View>
            </View>
            <View style={{}}>
                <Text style={{ color: "black", fontSize: "40" }}>Danh sách bạn bè</Text>
                <View>
                    <ChatvsFriend />
                </View>
            </View>
        </View>
    )
}
export default ChatOne