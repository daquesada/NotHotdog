import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Header = () => {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Not Hotdog</Text>
      <Text style={styles.subtitle}>Seafood startup!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
  },
  titleContainer: {
    marginLeft: 40,
    marginTop: 80,
  },
});
