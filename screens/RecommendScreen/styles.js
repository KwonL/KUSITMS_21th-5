import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        flex: 1
    },

    Title: {
        fontSize: 26,
        marginTop: 30,
        marginLeft: 41,
        marginHorizontal: 24,
        borderBottomColor: '#E7E4E9',
    },

    productContainer: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
    },

    ProductText: {
        marginHorizontal: 25,
        position: 'absolute',
        color: '#334856'
    },

    filterContainer:{
        marginTop: 15.49,
        flex: 1,
        flexDirection: 'row',

    },
    filterImage:{
        marginLeft: 20,
        width: 19.8,
        height: 19.8,
        alignContent: 'center',
        resizeMode: 'contain'
    },

    filterText: {
        fontSize: 13,
    },

    input: {
        marginTop: 46.51,
        width: 312,
        color: "#555555",
        padding: 10,
        height: 45,
        borderColor: '#F0F3F4',
        borderWidth: 1,
        borderRadius: 5,
        alignSelf: "center",
        backgroundColor: '#F0F3F4',
        marginLeft: 20,
        marginRight: -10
        },

    button: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#F0F3F4',
        padding: 10,
        marginTop: 10,
        backgroundColor: '#F0F3F4',
        width:45,
        height: 45,
        marginTop: 46.9,
        marginRight: 20,
        marginLeft: -10,
    },
    buttonImage:{
        marginLeft: 20,
        width: 16,
        height: 16,
        alignContent: 'center',
        resizeMode: 'contain',
        marginRight:21.52
        },

    delnewline:{
        flexDirection: 'row',
        marginRight: 71,
    },
        
});
