// components/signup.js
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ActivityIndicator } from 'react-native';
import { firebase } from '../../database/firebase';
export default class Signup extends Component {

    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            isLoading: false
        }
    }
    updateInputVal = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }
    registerUser = () => {
        if (this.state.email === '' && this.state.password === '') {
            Alert.alert('Vui lòng nhập đầy đủ thông tin đăng ký!')
        } else {
            this.setState({
                isLoading: true,
            })
            // firebase
            //     .auth()
            //     .createUserWithEmailAndPassword(this.state.email, this.state.password)
            //     .then(
            //         () => {
            //             firebase
            //                 .auth()
            //                 .currentUser.sendEmailVerification({
            //                     handleCodeInApp: true,
            //                     url: 'loginreactnative-e75d1.firebaseapp.com',
            //                 })
            //                 .then(() => {
            //                     alert("Vui lòng xem enmail")
            //                 })
            //                 .catch((error) => {
            //                     alert(error.message)
            //                 })
            //                 .then(()=>{
            //                     firebase.firestore().collection()
            //                 })
            //         }
            //     )
            // firebase
            //     .auth()
            //     .currentUser.sendEmailVerification(actionCodeSettings)
            //     .then(() => {
            //         //useState used on my loading (user can cancel this loading and exit               this task
            //         setTextContent('Waiting for verification. Check your email!\nYou can close this verification and came back later');
            //         const unsubscribeOnUserChanged = firebase
            //             .auth()
            //             .onUserChanged(response => {
            //                 const unsubscribeSetInterval = setInterval(() => {//this works as a next in for-like
            //                     firebase.auth().currentUser.reload();
            //                 }, 30000);
            //                 if (response.emailVerified) {
            //                     clearInterval(unsubscribeSetInterval); //stop setInterval
            //                     setLoading(false); //close loading describes above
            //                     navigation.goBack(); //return to parent (in my case to profile)
            //                     return unsubscribeOnUserChanged(); //unsubscribe onUserChanged
            //                 }
            //             });
            //     })
            //     .catch(error => {
            //         setLoading(false);
            //         setError(true);
            //         errorHandle(error);
            //     });
            firebase
                .auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((res) => {
                    firebase
                        .auth()
                        .currentUser.sendEmailVerification({
                            handleCodeInApp: true,
                            url: 'https://loginreactnative-e75d1.firebaseapp.com',
                        })
                        .then(() => {
                            alert("Vui lòng xem email để xác thực")
                        })
                        .catch((error) => {
                            alert(error.message)
                        })
                    res.user.updateProfile({
                        displayName: this.state.displayName
                    })
                    console.log('Tạo tài khoản thành công!')
                    this.setState({
                        isLoading: false,
                        displayName: '',
                        email: '',
                        password: ''
                    })
                    this.props.navigation.navigate('Login')
                })
                .catch(error => this.setState({ errorMessage: error.message }))
        }
    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={styles.preloader}>
                    <ActivityIndicator size="large" color="#9E9E9E" />
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter Name"
                    value={this.state.displayName}
                    onChangeText={(val) => this.updateInputVal(val, 'displayName')}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChangeText={(val) => this.updateInputVal(val, 'email')}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter Password"
                    value={this.state.password}
                    onChangeText={(val) => this.updateInputVal(val, 'password')}
                    maxLength={15}
                    secureTextEntry={true}
                />
                <Button
                    color="#3740FE"
                    title="Signup"
                    onPress={() => this.registerUser()}
                />
                <Text
                    style={styles.loginText}
                    onPress={() => this.props.navigation.navigate('Login')}>
                    Bạn đã có tài khoản? Đăng nhập nó
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 35,
        backgroundColor: '#fff'
    },
    inputStyle: {
        width: '100%',
        marginBottom: 15,
        paddingBottom: 15,
        alignSelf: "center",
        borderColor: "#ccc",
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    loginText: {
        color: '#3740FE',
        marginTop: 25,
        textAlign: 'center'
    },
    preloader: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});