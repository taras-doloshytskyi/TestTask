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
import Images from '../theme/index'
const Login = () => {
  const navigation = useNavigation();

  const signUp = errors => {
    console.log(errors);
    if (!errors.length) {
      navigation.navigate('home');
    }
  };

  const [mutateFunction, {data, loading, error}] = useMutation(SignIn);
 
  if(!loading){
      console.log('ssssss',data);
  }
  return (
    <LinearGradient
      style={styles.container}
      colors={['rgb(243,196,66)', 'rgb(250,119,69)']}>
      <TouchableOpacity
        style={{position: 'absolute', top: 37, left: 20}}
        onPress={() => navigation.goBack()}>
        <Image style={{width: 50, height: 50}} source={Images.goBack} />
      </TouchableOpacity>
      <View>
        <Text style={{fontSize: 20, marginBottom: 40, color: '#fff'}}>
          Log in
        </Text>
      </View>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => Alert.alert(JSON.stringify(values))}
        validationSchema={yup.object().shape({
          email: yup.string().email().required(),
          password: yup
            .string()
            .min(4)
            .max(10, 'Password should not excced 10 chars.')
            .required(),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <View style={styles.formContainer}>
            {console.log('va', values)}
            <Text style={{color: '#fff', fontSize: 16, marginBottom: 7}}>
              Email
            </Text>
            <TextInput
              style={{
                width: 300,
                height: 35,
                backgroundColor: '#fff',
                borderRadius: 3,
                padding: 10,
                marginBottom: 10,
              }}
              onChangeText={handleChange('email')}
              value={values.email}
            />
            {errors.email && (
              <View style={styles.errorContainer}>
                <Text
                  style={{fontSize: 16, color: '#fff', textAlign: 'center'}}>
                  {errors.email}
                </Text>
              </View>
            )}
            <Text style={{color: '#fff', fontSize: 16, marginBottom: 7}}>
              Password
            </Text>
            {console.log(errors)}
            <TextInput
              style={{
                width: 300,
                height: 35,
                backgroundColor: '#fff',
                borderRadius: 3,
                padding: 10,
                marginBottom: 10,
              }}
              onChangeText={handleChange('password')}
              value={values.password}
            />
            {errors.password && (
              <View style={styles.errorContainer}>
                <Text
                  style={{fontSize: 16, color: '#fff', textAlign: 'center'}}>
                  {errors.password}
                </Text>
              </View>
            )}
            <View style={{display: 'flex', alignItems: 'center'}}>
              <View style={styles.containerButton}>
                <TouchableOpacity>
                  <Button
                    onPress={() => signUp(errors)}
                    style={{borderRadius: 30}}
                    color="#fff"
                    title="sign Up"></Button>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </Formik>
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
    height: 28.5,
    backgroundColor: '#F13838',
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 15,
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
