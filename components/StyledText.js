import * as React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />;
}

export function KakaoRegularText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'kakao-regular' }]} />;
}

export function KakaoBoldText(props) {
  return <Text {...props} style={[props.style, { fontFamily: 'kakao-bold' }]} />;
}
