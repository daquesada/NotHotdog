import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Made by daquesada</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 'auto',
    marginBottom: 5,
  },
  footerText: {
    fontSize: 8,
    textAlign: 'center',
  },
});
