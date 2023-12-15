import React from 'react';
import {StyleSheet, View} from 'react-native';
import ToyStoreApp from '../toys-component/index';

function MainScreen() {
  return (
    <View style={styles.container}>
      <ToyStoreApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default MainScreen;
