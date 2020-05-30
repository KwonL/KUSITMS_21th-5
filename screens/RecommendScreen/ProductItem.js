import React, {Component} from "react";
import {StyleSheet, Text, View, Image, ListView} from "react-native";
import { KakaoRegularText, KakaoBoldText } from '../../components/StyledText';

const styles = StyleSheet.create({
    productItem: {
        flexDirection: "row",
        backgroundColor: "#FFFFFF",
        borderBottomColor: "#E7E4E9",
        borderBottomWidth: 1,
        padding: 5,
        height: 144.33
    },
    cover: {
        width: 90, height: 90,
        marginLeft: 19.5,
        flex: 1,
        height: 150,
        marginBottom: 28,
        resizeMode: "contain"
    },
    info: {
        flex: 3,
        flexDirection: "column",
        alignSelf: "center",
        padding: 20,
    },
    delnewline:{
        flexDirection: 'row',
        marginRight: 71,
    },
    title: {fontSize: 17, paddingBottom: 9},
    store: {fontSize: 14, alignSelf: "baseline", paddingBottom: 9},
    price:{fontSize: 15},
    rate: {fontSize: 15},
    description:{fontSize: 12, color: "#6E8CA0", paddingTop: 9, marginRight: 28,},
    star: {color:"#FEC82E"},
    delivery: {color: "#0D9A48", fontSize:12, marginLeft: 185, marginBottom: 3}
});

class ProductItem extends Component {
    render(){

        //배달 여부 확인 함수
        const deliveryOK = this.props.delivery;

        let message=""
        if (deliveryOK) {
            message = "배달 가능";
          } else {
            message=""
          }

        return (
            
            <View style={styles.productItem}>
                <Image style={styles.cover} source={this.props.imageURL}/>
                <View style={styles.info}>
                <KakaoRegularText style={styles.delivery}>{message}</KakaoRegularText>
                    <View style={styles.delnewline}>
                        <KakaoRegularText style={styles.title}>{this.props.title}</KakaoRegularText>
                        <KakaoRegularText style={styles.store}>  [{this.props.store}]</KakaoRegularText>
                    </View>
                    <View style={styles.delnewline}>
                        <KakaoRegularText style={styles.price}>{this.props.price}원 | </KakaoRegularText>
                        <KakaoRegularText style={styles.rate}><KakaoRegularText style={styles.star}>★</KakaoRegularText>{this.props.rate}</KakaoRegularText>
                    </View>
                    <KakaoRegularText style={styles.description}>{this.props.description}</KakaoRegularText>

                </View>
            </View>
        );
    }
}
export default ProductItem;
