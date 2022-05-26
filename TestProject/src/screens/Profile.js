import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MuiButton from '../components/Button';
import * as yup from 'yup';
import {Formik, useFormik} from 'formik';
import {TextInput, Button, Alert} from 'react-native';
import CustomTextInput from '../components/CustomTextInput';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '@apollo/client';
import {SignIn} from '../api/signin';
const Login = () => {
  const navigation = useNavigation();

  const signUp = errors => {
    console.log(errors);
    if (!errors.length) {
      navigation.navigate('home');
    }
  };

  const [mutateFunction, {data, loading, error}] = useMutation(SignIn);

  if (!loading) {
    console.log('ssssss', data);
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgb(243,196,66)', 'rgb(250,119,69)']}>
      <View>
        <Text style={{fontSize: 20, marginBottom: 40, color: '#fff'}}>
          Log in
        </Text>
      </View>
   
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    alignItems: 'center',
    backgroundColor: 'rgb 250 119 69',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  errorContainer: {
    width: 249,
    height: 28.5,8',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    backgroundColor: '#F1383
    borderRadius: 5,
    padding: 5,
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

export default Login;
