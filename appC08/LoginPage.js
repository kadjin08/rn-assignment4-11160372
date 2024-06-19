import React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';

function Login({ navigation }) {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* header */}
            <Text style={{
                marginTop: 100, fontSize: 30, fontWeight: 'bold', color: "#356899", marginBottom: 15
            }}>Jobizz</Text>
            <Text style={{ fontSize: 28, fontWeight: '500', marginBottom: 10 }}>Welcome Back</Text>
            <Text style={{ marginBottom: 20 }}>Let's log in. Apply to jobs!</Text>

            {/* input */}
            <View>
                <TextInput placeholder="Name" style={{ borderWidth: 0.5, borderColor: '#AFB0B6', padding: 10, marginTop: 20, borderRadius: 10 }} />

                <TextInput placeholder="Email" style={{ borderWidth: 0.5, borderColor: '#AFB0B6', padding: 10, marginTop: 20, marginBottom: 20, borderRadius: 10 }} />

                <TouchableOpacity
                    onPress={() => navigation.navigate('Home')}
                    style={{
                        backgroundColor: '#356899',
                        height: 45,
                        padding: 10,
                        marginTop: 5,
                        borderRadius: 5,
                        alignItems: 'center',
                    }}
                >
                    <Text style={{ color: '#FFFFFF' }}>Log in</Text>
                </TouchableOpacity>
            </View>

            {/* footer */}
            <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: 5, marginTop: 30 }}>
                <View style={{ flex: 1, height: 1, backgroundColor: '#AFB0B6' }} />
                <Text style={{ paddingHorizontal: 10, textAlign: "center" }}>Or continue with</Text>
                <View style={{ flex: 1, height: 1, backgroundColor: '#AFB0B6' }} />
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50, }}>

            <TouchableOpacity style={{padding: 10}}>
                <Image source={require('./assets/apple.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{padding: 10}}>
                <Image source={require('./assets/Goggle2.png')}></Image>
            </TouchableOpacity>
                <TouchableOpacity style={{padding: 10}}>
                <Image source={require('./assets/Facebook3.png')}></Image>
            </TouchableOpacity>

            </View>

            <Text style={{ justifyContent: "center", textAlign: "center" }}>Haven't an account? Sign up now!</Text>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
    },
});

export default Login;



