// styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },

  Title: {
    fontSize: 26,
    marginTop: 30,
    marginLeft: 41,
    marginHorizontal: 14,
    borderBottomColor: '#E7E4E9',
  },

  productContainer: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
  },

  ProductText: {
    marginHorizontal: 25,
    position: 'absolute',
    color: '#334856',
  },

  filterContainer: {
    marginTop: 15.49,
    flex: 1,
    flexDirection: 'row',

  },
  filterImage: {
    marginLeft: 20,
    width: 19.8,
    height: 19.8,
    alignContent: 'center',
    resizeMode: 'contain',
    marginRight: 7,
  },

  weekText: {
    fontSize: 17,
    marginLeft: 52,
    marginTop: 20,
  },

  calText: {
    fontSize: 24,
    marginLeft: 52,
    marginTop: 5,
  },

  circleText: {
    color: '#259BB1',
    fontSize: 19,
  },

  input: {
    marginTop: 46.51,
    width: 312,
    color: '#555555',
    padding: 10,
    height: 45,
    borderColor: '#F0F3F4',
    borderWidth: 1,
    borderRadius: 5,
    alignSelf: 'center',
    backgroundColor: '#F0F3F4',
    marginLeft: 20,
    marginRight: -10,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#F0F3F4',
    padding: 10,
    backgroundColor: '#F0F3F4',
    width: 45,
    height: 45,
    marginTop: 46.9,
    marginRight: 20,
    marginLeft: -10,
  },
  buttonImage: {
    marginLeft: 20,
    width: 16,
    height: 16,
    alignContent: 'center',
    resizeMode: 'contain',
    marginRight: 21.52,
  },

  delnewline: {
    flexDirection: 'row',
    marginRight: 71,
  },
  barChart: {
    borderTopRightRadius: 5,
  },

  secondContainer: {
    backgroundColor: '#F1F0F2',
    height: 558,
    alignItems: 'center',

  },

  weekContainer: {
    backgroundColor: '#F1F0F2',
    marginTop: 0,
    height: 50,
  },

  nutpgContainer: {
    marginTop: 25,
    marginBottom: 30,
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    width: '80%',
  },
  graphCalText: {
    textAlign: 'center',
    fontSize: 32,
    position: 'absolute',
    alignSelf: 'center',
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

  storyContainer: {
    backgroundColor: '#FFFFFF',
    height: 200,
  },

  comment: {
    fontSize: 12,
    color: '#71677A',
    paddingTop: 15,
    marginRight: 20,
    marginLeft: 19,
    marginBottom: 20,
  },
});
