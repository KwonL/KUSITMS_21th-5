import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        flex: 1,
    },
    sectionContainer: {
        marginTop: 5,
        padding: 8,
        backgroundColor: '#FFFFFF'
    },
    characterImage: {
        alignContent: 'center',
        height: 150,
        resizeMode: 'contain'
    },
    msgText: {
        color: 'black',
        fontSize: 16
    },
    progressBarContainer: {
        alignItems: 'center',
    },
    progressBar: {
        marginTop: 5
    },
    dot: {
        height: 10,
        width: 10,
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
    foodCardContainer: {
        width: 100,
        marginHorizontal: 8,
        padding: 4,
        paddingTop: 0,
        borderWidth: 0.4,
        borderRadius: 10,
        borderColor: 'black',
        alignItems: 'center',
    },
    cardImage: {
        width: 99,
        height: 99,
        resizeMode: 'contain',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    flatList: {
        marginTop: 14,
    },
    shopCardDescriptionText: {
        fontSize: 12,
        alignSelf: 'flex-start',
        marginHorizontal: 2,
    },
    shopCardPriceText: {
        fontSize: 11,
        alignSelf: 'flex-start',
        fontWeight: 'bold',
        marginHorizontal: 2,
    }
});
