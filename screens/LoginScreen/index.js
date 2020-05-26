import React, { useEffect, useState } from 'react';
import { View, Text } from "react-native";
import axios from '../../utils/axios';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default LoginScreen = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    axios.get('/login').then(res => { 
      if (res.status === 200) {
        props.navigation.reset({
          index: 0,
          routes: [{name: 'Root'}]
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const login = () => {
    axios.post('/login', {
      username: username,
      password: password,
    }).then(res => {
      if (res.status === 200) {
        props.navigation.reset({
          index: 0,
          routes: [{name: 'Root'}]
        });
      }
      else
        console.log(res.data);
    }).catch(err => {
      console.log(err);
    });
  }

  return (
    <View>
      <TextInput
        autoCapitalize='none'
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        autoCapitalize='none'
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <TouchableOpacity
        onPress={login}
      >
        <Text>로그인하기</Text>
      </TouchableOpacity>
    </View>
  )
}