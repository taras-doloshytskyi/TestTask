import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Button,
  Text,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MuiButton from '../components/Button';
import CustomTextInput from '../components/CustomTextInput';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Images from '../theme';
MIcon.loadFont();
const LoginWithEmail = () => {
  const navigation = useNavigation();
  const signIn = () => {
    console.log('item');
     navigation.navigate('home');
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgb(243,196,66)', 'rgb(250,119,69)']}>
      <TouchableOpacity style={{position:'absolute',top:37,left:20}} onPress={() => navigation.goBack()}>
        <Image style={{width:50,height:50}} source={Images.goBack} />
      </TouchableOpacity>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={{marginBottom: 57}}>
            <Text style={{fontSize: 20, color: '#fff'}}>
              Sign Up with Email
            </Text>
          </View>
          <CustomTextInput label="Your name" />

          <CustomTextInput label="Email" />
          <CustomTextInput label="Password ( min 6 characters)" />
          <View style={styles.containerButton}>
            <TouchableOpacity onPress={signIn}>
              <Button
                style={{borderRadius: 30}}
                color="#fff"
                title="sign Up"></Button>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  containerButton: {
    marginTop: 26,
    width: 151,
    height: 43,
    backgroundColor: 'rgb(17 ,206 ,144)',
    color: '#fff',
    borderRadius: 10,
  },
});

export default LoginWithEmail;
