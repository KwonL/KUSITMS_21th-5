import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  cameraViewContainer: {
    marginTop: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cameraPreview: {
    width: 400,
    height: 500,
  },
  picButtonContainer: {
    alignSelf: 'center',
    margin: 40,
  },
  picButtonInner: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    height: 90,
    width: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  picButtonOuter: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'white',
    height: 75,
    width: 75,
    backgroundColor: 'white',
  },
  albumButton: {
    alignSelf: 'flex-end',
    marginRight: 20,
    fontSize: 20,
  },
  albumText: {
    fontSize: 20,
  },
  previewImage: {
    width: 400,
    height: 500,
  },
  choiceButtonContainer: {
    marginTop: 40,
    alignSelf: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
