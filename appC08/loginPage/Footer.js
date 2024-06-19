import { StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'

function Footer(){
    return(
        <>
        <View style={styles.footer}>
            <View style={styles.line}></View>
            <Text style={styles.footerText}>Or continue with</Text>
            <View style={styles.line}></View>
        </View>

        <View style={styles.icons}>
            <TouchableOpacity style={styles.apple}>
                <Image source={require('../assets/apple.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.google}>
                <Image source={require('../assets/Goggle2.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebook}>
                <Image source={require('../assets/Facebook3.png')}></Image>
            </TouchableOpacity>
        </View>
        
        <View>
            <Text style={styles.registerText}>Haven't an account? <Text style={styles.register}>Register</Text></Text>
        </View>
        </>

    )
}
