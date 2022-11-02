import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {translate} from './src/front-end/src/i18n/i18n';
import {colors} from './src/front-end/src/libs';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translate.Hello}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'gray',
  },
  title: {
    fontSize: 32,
    color: colors.white,
    fontFamily: 'OpenSans-Italic',
    textAlign: 'center',
  },
});

export default App;
