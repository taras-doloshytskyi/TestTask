import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  View,
  TextInput,
} from 'react-native';

const CustomTextInput = props => {
  const [value, setValue] = useState();
  const {children, style, label} = props;
  console.log('prp',props)
  const changeValue = value => {
    console.log('fffff',value)
    onChangeHandler(value);
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
      <TextInput
        value={value}
        onChangeText={(value)=>setValue(value)}
        onPress={() => {
          setValue();
        }}
        style={styles.input}
      />
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {},
  input: {
    paddingHorizontal: 10,
    width: 300,
    height: 38,
    backgroundColor: '#fff',
    borderRadius: 3,
    marginBottom: 13,
  },
  label: {
    marginBottom: 7,
    color: '#fff',
    fontSize: 16,
  },
  touchableOpacity: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  disabled: {
    opacity: 0.6,
  },
});
