import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#D8DFE581',
        flex: 1
    },
    welcomeText: {
        fontSize: 17,
        marginTop: 18,
        alignSelf: 'center'
    },
    sectionContainer: {
        marginTop: 20,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        alignItems: 'center'
    },
    characterImage: {
        alignContent: 'center',
        height: 150,
        resizeMode: 'contain'
    },
    msgText: {
        marginTop: 28,
        marginLeft: 22,
        fontSize: 16
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
        color: '#FFFFFF'
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
        borderRadius: 50
    },
    explainContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
    colorExplainText: {
        fontSize: 10
    },
    graphCalText: {
        textAlign: 'center',
        fontSize: 32,
        position: 'absolute',
        alignSelf: 'center'
    }
});
