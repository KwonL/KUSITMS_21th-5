import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
  },
  logoImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain',
  },
  inputText: {
    height: 30,
    width: 200,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    fontFamily: 'kakao-regular',
    fontSize: 17,
    borderRadius: 10,
    paddingHorizontal: 13,
  },
});
