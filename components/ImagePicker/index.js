import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Tflite from 'tflite-react-native';

let tflite = new Tflite();
export const ImagePickerComponent = ({setReconigtion, setSource}) => {
  useEffect(() => {
    tflite.loadModel(
      {
        model: 'models/model.tflite',
        labels: 'models/labels.txt',
      },
      (err, res) => {
        if (err) {
          console.log(err);
        } else {
          console.log('res', res);
        }
      },
    );
  }, []);

  const selecImage = () => {
    const options = {};
    ImagePicker.launchImageLibrary(options, (res) => {
      if (res.error) {
        console.log(res.error);
        alert('Sorry, we need camera roll permissions to make this work!');
      } else if (res.didCancel) {
        alert('Select an image!!!');
      } else if (res.customButton) {
        alert('Select an image!');
      } else {
        setSource({uri: res.uri});
        //pre processing image and make predictions faster
        tflite.runModelOnImage(
          {
            path: res.path,
            imageMean: 128,
            imageStd: 128,
            numResults: 2,
            threshold: 0.05,
          },
          (err, response) => {
            if (err) {
              console.log(err);
            } else {
              setReconigtion(response[response.length - 1]);
            }
          },
        );
      }
    });
  };

  const takeImage = () => {
    const options = {};
    ImagePicker.launchCamera(options, (res) => {
      if (res.error) {
        console.log(res.error);
        alert('Sorry, we need camera roll permissions to make this work!');
      } else if (res.didCancel) {
        alert('Select an image!');
      } else if (res.customButton) {
        alert('Select an image!');
      } else {
        setSource({uri: res.uri});
        //pre processing image and make predictions faster
        tflite.runModelOnImage(
          {
            path: res.path,
            imageMean: 128,
            imageStd: 128,
            numResults: 2,
            threshold: 0.05,
          },
          (err, response) => {
            if (err) {
              console.log(err);
            } else {
              setReconigtion(response[response.length - 1]);
            }
          },
        );
      }
    });
  };
  return (
    <View style={styles.buttonContainer}>
      <View style={styles.button}>
        <Button title="Camera Roll" onPress={selecImage} />
      </View>
      <View style={styles.button}>
        <Button title="Take a Photo" onPress={takeImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    paddingBottom: 20,
    alignItems: 'center',
  },
  button: {
    width: 250,
    height: 57,
    borderRadius: 15,
  },
});
