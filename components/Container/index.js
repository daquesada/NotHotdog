import React, {useState} from 'react';
import {Text} from 'react-native';
import {StyleSheet, SafeAreaView, Image, View} from 'react-native';
import {Footer} from '../Footer';
import {Header as HeaderComponent} from '../Header';
import {ImagePickerComponent as ImagePicker} from '../ImagePicker';

export const Container = () => {
  const [reconigtion, setReconigtion] = useState(undefined);
  const [source, setSource] = useState(undefined);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />
      <View style={styles.outputContainer}>
        {reconigtion ? (
          <View>
            <Image source={source} style={styles.hotdogImage} />
            <Text style={styles.outputText}>
              {`${reconigtion['label']} - ${(
                reconigtion['confidence'] * 100
              ).toFixed(0)}%`}
            </Text>
          </View>
        ) : (
          <Image
            source={require('../../assets/hotdog.png')}
            style={styles.hotdogImage}
          />
        )}
      </View>
      <ImagePicker setReconigtion={setReconigtion} setSource={setSource} />
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8',
  },
  outputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hotdogImage: {
    width: 250,
    height: 250,
  },
  outputText: {
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
  },
});
