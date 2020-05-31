import React, { useEffect, useState } from 'react';
import {
  View, ActivityIndicator, Image, Platform, TouchableOpacity, Alert,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { KakaoRegularText } from '../../components/StyledText';
import styles from './styles';
import axios from '../../utils/axios';

const ImagePreviewView = (props) => {
  const predict = async () => {
    props.setIsLoading(true);

    axios.post('/food/gallery', {
      type: '아침',
      image: props.image.base64,
    }).then((res) => {
      if (res.status === 201) {
        Alert.alert(
          '음식 예측 결과',
          `예측 결과는 ${res.data.name} 입니다.`,
          [
            {
              text: '맞와요!',
              onPress: () => props.navigation.navigate('Gallery'),
            },
            {
              text: '틀렸어요 ㅎ;',
              onPress: () => {
                axios.delete(`/food/gallery/${res.data.id}`);
              },
            },
          ],
        );
      } else {
        console.log(res.data);
      }
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      props.setIsLoading(false);
    });
  };

  return (
    <View style={styles.cameraViewContainer}>
      <Image source={{ uri: props.image.uri }} style={styles.previewImage} />
      <View style={styles.choiceButtonContainer}>
        <TouchableOpacity
          disabled={props.isLoading}
          onPress={() => {
            props.setImage(null);
          }}
          style={styles.selectionButton}
        >
          <KakaoRegularText style={{ fontSize: 20 }}>다시 찍기</KakaoRegularText>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={props.isLoading}
          onPress={predict}
          style={styles.selectionButton}
        >
          <KakaoRegularText style={{ fontSize: 20 }}>사용하기</KakaoRegularText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CameraView = (props) => {
  const [cameraRef, setCameraRef] = useState(null);

  return (
    <View style={styles.cameraViewContainer}>
      <Camera
        ref={(ref) => setCameraRef(ref)}
        style={styles.cameraPreview}
      />
      <TouchableOpacity
        style={styles.picButtonContainer}
        onPress={async () => {
          if (cameraRef) {
            const res = await cameraRef.takePictureAsync({ base64: true });
            props.setImage(res);
          }
        }}
      >
        <View style={styles.picButtonInner}>
          <View style={styles.picButtonOuter} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default (props) => {
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
        const result = (await Permissions.askAsync(Permissions.CAMERA_ROLL)).status;
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
    return <KakaoRegularText>카메라 접근 권한이 필요합니다.</KakaoRegularText>;
  }

  return (
    <View>
      {image
        ? (
          <ImagePreviewView
            navigation={props.navigation}
            image={image}
            setImage={setImage}
            setIsLoading={setIsLoading}
          />
        )
        : (screenLoaded && (
          <CameraView
            setImage={setImage}
          />
        ))}
      {isLoading
        ? <ActivityIndicator color="blue" /> : null}
    </View>
  );
};
