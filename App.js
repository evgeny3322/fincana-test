import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, View} from 'react-native';
import {RadialGradient} from 'react-native-gradients';
import {Logo} from "./src/Logo";
import MyComponent, {Load} from "./src/Loading";

const colorList = [
    {offset: '0%', color: '#11BDFD', opacity: '1'},
    {offset: '100%', color: '#0A83F8', opacity: '1'},
]
export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                {/*<Logo/>*/}
            </View>
            <RadialGradient x="50%" y="50%" rx="50%" ry="50%" colorList={colorList}/>
            <View>
                {/*<Image source={{uri: 'https://assets2.lottiefiles.com/packages/lf20_yn8lqib7.json'}}/>*/}
                <MyComponent  style={styles.loading}/>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'green'
    },
    logo: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        elevation: 1,
    },
    loading: {
        // zIndex: 1,
        // elevation: 1,
    }
});
