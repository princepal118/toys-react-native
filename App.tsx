import React from 'react';
import MainScreen from './views/components/mainscreen';
import {StatusBar, StyleSheet, View} from 'react-native';
import BottomBarContainer from './views/components/navigation';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appContent} />
      <StatusBar backgroundColor="#FF5733" barStyle="light-content" />
      <MainScreen />
      <BottomBarContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  appContent: {
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
