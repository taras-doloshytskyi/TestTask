import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MuiButton from '../components/Button';
import * as yup from 'yup';
import {Formik} from 'formik';
import {TextInput, Button, Alert} from 'react-native';
import Images from '../theme';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {NavigationRouteNames} from '../routes/ScreenNames';
const SignIn = () => {
  const navigation = useNavigation();

  const handleLogWithEmail = () => {
    navigation.navigate('signUpWithEmail');
  };
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgb(243,196,66)', 'rgb(250,119,69)']}>
      <View style={styles.betaContainer}>
        <Text style={styles.betaTitle}>Beta Version</Text>
      </View>
      <View style={{display: 'flex', alignItems: 'center'}}>
        <Image
          source={Images.logo3}
          style={{width: 71, height: 84, marginBottom: 14}}
        />
        <Text style={styles.foodStyles}>FoodStyles</Text>
      </View>
      <View style={{marginBottom: 30}}>
        <Text style={{color: '#fff', textAlign: 'center', fontSize: 18}}>
          Sign in to be able to save your preferences and settings.
        </Text>
      </View>
      <MuiButton>
        <Text style={styles.textButton}>Sign in with Apple</Text>
      </MuiButton>
      <MuiButton>
        <Text style={styles.textButton}>Sign in with Facebook</Text>
      </MuiButton>
      <MuiButton>
        <Text style={styles.textButton}>Sign in with Google</Text>
      </MuiButton>
      <MuiButton onPress={handleLogWithEmail}>
        <Text style={styles.textButton}>Sign up with Email</Text>
      </MuiButton>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.logEmail}>Log in with Email</Text>
      </TouchableOpacity>

      <View style={styles.policy}>
        <Text style={styles.policyText}>
          By signing in you accept{'\n'} the{' '}
          <Text style={{textDecorationLine: 'underline'}}>General Terms</Text>{' '}
          and{' '}
          <Text style={{textDecorationLine: 'underline'}}>Privacy Policy</Text>
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgb(250, 119, 69)',
    paddingHorizontal: 70,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
  },
  textButton: {
    fontSize: 16,
    // textButton: 'center',
    lineHeight: 18,
  },
  foodStyles: {
    fontSize: 26,
    color: '#fff',
    marginBottom: 32,
  },
  logEmail: {
    color: '#fff',
    fontSize: 16,
  },
  policy: {
    position: 'absolute',
    bottom: 0,
    paddingBottom: 22,
  },
  policyText: {
    fontSize: 13,
    textAlign: 'center',
    color: '#fff',
  },
  betaContainer: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: 275,
    height: 40,
    backgroundColor: '#F13838',
    color: '#fff',
    top: 60,
    left: -50,
    transform: [{rotate: '-32deg'}],
  },
  betaTitle: {
    fontSize: 20,
    color: '#fff',
    // fontFamily: 'ProximaNovaAlt-Regular',
  },
});

export default SignIn;
