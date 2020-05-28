import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#D8DFE581',
    flex: 1,
  },
  titleContainer: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#E7E4E9',
  },
  titleText: {
    fontSize: 26,
    alignSelf: 'center',
    marginTop: 11,
    marginBottom: 22,
  },
  welcomeText: {
    fontSize: 17,
    marginTop: 18,
    alignSelf: 'center',
  },
  sectionContainer: {
    alignItems: 'center',
  },
  characterImage: {
    alignContent: 'center',
    height: 150,
    resizeMode: 'contain',
  },
  msgText: {
    color: '#334856',
    marginTop: 28,
    marginLeft: 35,
    marginRight: 'auto',
    fontSize: 16,
  },
  progressBar: {
    marginVertical: 36,
    marginHorizontal: 25,
    justifyContent: 'center',
  },
  progressText: {
    marginHorizontal: 25,
    position: 'absolute',
    alignSelf: 'center',
    color: '#FFFFFF',
  },
  calorieText: {
    fontSize: 14,
    color: '#71677A',
    position: 'absolute',
    bottom: 15,
    right: 15,
  },
  nutAlertText: {
    textAlign: 'center',
    marginVertical: 25,
    fontSize: 17,
  },
  dot: {
    height: 14,
    width: 14,
    backgroundColor: '#000000',
    borderRadius: 50,
  },
  explainContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  colorExplainText: {
    fontSize: 10,
  },
  graphCalText: {
    textAlign: 'center',
    fontSize: 32,
    position: 'absolute',
    alignSelf: 'center',
  },
  nutpgContainer: {
    marginTop: 25,
    marginBottom: 30,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
  },
  pgbarNutText: {
    marginRight: 'auto',
    color: '#1C1C1C',
    fontSize: 16,
  },
  pgbarPercentText: {
    marginLeft: 26,
    color: '#352641',
    fontSize: 14,
  },
  recommendImage: {
    width: 90,
    height: 90,
  },
});
