import React, { useEffect, useState } from 'react';
import { View, Button, Image } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default CameraScreen = (props) => {
  const [image, setImage] = useState(null);

  const _pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 1,
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };

  const _takeImage = async () => {
    const result = await ImagePicker.launchCameraAsync();
    if (!result.cancelled)
      setImage(result.uri);
  };

  useEffect(() => {
    (async () => {
      if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  })

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
      <Button title="앨범에서 가져오기!" onPress={_pickImage} />
      <Button title="사진 찍기!" onPress={_takeImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );
};