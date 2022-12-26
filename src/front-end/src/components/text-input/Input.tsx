import {Text, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {styles} from './Input.styles';

const Input = () => {
  return (
    <View style={styles.container}>
      <Icons name="clear-all" />
      <Text>Input</Text>
    </View>
  );
};

export default Input;
