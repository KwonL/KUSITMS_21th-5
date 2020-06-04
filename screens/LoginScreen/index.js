import React, { useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { KakaoBoldText } from '../../components/StyledText';
import axios from '../../utils/axios';
import styles from './styles';

export default (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get('/login').then((res) => {
      if (res.status === 200) {
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'Root' }],
        });
      }
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  const login = () => {
    axios.post('/login', {
      username,
      password,
    }).then((res) => {
      if (res.status === 200) {
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'Root' }],
        });
      } else { console.log(res.data); }
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.logoImage}
          source={require('../../assets/images/icon.png')}
        />
      </View>
      <TextInput
        autoCapitalize="none"
        placeholder="아이디"
        style={styles.inputText}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        autoCapitalize="none"
        placeholder="비밀번호"
        style={styles.inputText}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity
        onPress={login}
      >
        <KakaoBoldText style={{
          fontSize: 20,
          marginBottom: 50,
          marginTop: 20,
        }}
        >
          로그인
        </KakaoBoldText>
      </TouchableOpacity>
    </View>
  );
};
