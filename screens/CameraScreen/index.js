import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Image, Text, Platform, TouchableOpacity, ImageEditor } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import styles from './styles';
import axios from '../../utils/axios'

const ImagePreviewView = (props) => {
  const [prediction, setPrediction] = useState('');

  const predict = async () => {
    props.setIsLoading(true);

    axios.post('/food/gallery', {
      type: '아침',
      image: props.image.base64,
    }).then(res => {
      if (res.status === 201) {
        setPrediction(res.data.name);
      } else {
        console.log(res.data);
      }
    }).catch(err => {
      console.log(err);
    }).finally(() => {
      props.setIsLoading(false);
    });
  }

  return (
    <View style={styles.cameraViewContainer}>
      <Image source={{ uri: props.image.uri }} style={styles.previewImage} />
      <View style={styles.choiceButtonContainer}>
        <TouchableOpacity disabled={props.isLoading} onPress={() => {
          props.setImage(null);
        }}>
          <Text style={{ fontSize: 20 }}>다시 찍기</Text>
        </TouchableOpacity>
        <TouchableOpacity disabled={props.isLoading} onPress={predict}>
          <Text style={{ fontSize: 20 }}>사용하기</Text>
        </TouchableOpacity>
      </View>
      {prediction !== '' && (<Text>{prediction}</Text>)}
    </View >
  )
}

const CameraView = (props) => {
  const [cameraRef, setCameraRef] = useState(null);

  const _pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });
    if (!result.cancelled)
      props.setImage(result);
  };

  return (
    <View style={styles.cameraViewContainer}>
      <Camera
        ref={ref => setCameraRef(ref)}
        style={styles.cameraPreview}
      />
      <TouchableOpacity
        style={styles.picButtonContainer}
        onPress={async () => {
          if (cameraRef) {
            const res = await cameraRef.takePictureAsync({ base64: true });
            props.setImage(res);
          }
        }}>
        <View style={styles.picButtonInner}>
          <View style={styles.picButtonOuter} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.albumButton} onPress={_pickImage}>
        <Text style={styles.albumText}>앨범 탐색 버튼이 올 곳</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CameraScreen = (props) => {
  const [image, setImage] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [rollPermission, setRollPermission] = useState(null);
  const [screenLoaded, setScreenLoaded] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      let status = null;
      if (Platform.OS === 'ios') {
        result = (await Permissions.askAsync(Permissions.CAMERA_ROLL)).status;
        setRollPermission(result === 'granted');
      } else {
        setRollPermission(true);
      }

      status = (await Permissions.askAsync(Permissions.CAMERA)).status;
      setCameraPermission(status === 'granted');
    })();

    props.navigation.addListener('blur', () => {
      setScreenLoaded(false);
    });
    props.navigation.addListener('focus', () => {
      setImage(null);
      setScreenLoaded(true);
    });
    setIsLoading(false);

    return () => { };
  }, []);

  if (!rollPermission || !cameraPermission) {
    return <Text>카메라 접근 권한이 필요합니다.</Text>;
  }

  return (
    <View>
      {image ?
        <ImagePreviewView
          image={image}
          setImage={setImage}
          setIsLoading={setIsLoading}
        /> :
        (screenLoaded && (
          <CameraView
            setImage={setImage}
          />))}
      {isLoading ?
        <ActivityIndicator color='blue' /> : null}
    </View>
  );
};
