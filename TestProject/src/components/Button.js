import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from 'react-native';


const MuiButton = props => {
  const {children, style} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      {...props}
      style={[
        styles.touchableOpacity,
        // props.disabled && styles.disabled,
        // style,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

export default MuiButton;

const styles = StyleSheet.create({
  touchableOpacity: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: 236,
    height:43,
    borderRadius:50,
    backgroundColor:"#fff",
    marginBottom:15
  },
  disabled: {
    opacity: 0.6,
  },
});
