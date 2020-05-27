import React from 'react';
import {Image, ScrollView, View } from 'react-native';
import styles from './style';
import { KakaoRegularText, KakaoBoldText } from '../../components/StyledText';
import {SliderBox} from "react-native-image-slider-box" ;

export default GalleryScreen = (props) => { 
  const data = {
    user_id: {
       id :'kkyu_98',
    },
    photo_container1: {
        month: 5,
        day: 15,
        total_calorie: 2705,
    },
    images1: [
        require('../../assets/images/examples/kkhokkho.png'),
        require('../../assets/images/examples/myfood1.png'),
        require('../../assets/images/examples/515lunch.png')
    ],
    componests1: [
        '매추리알','양념치킨','라면사리','떡갈비', '김치찌개', '공기밥', '보쌈', '김치',
    ],

    photo_container2: {
        month: 5,
        day: 14,
        total_calorie: 1900,
    },

    images2: [
        require('../../assets/images/examples/myfood2.png'),
        require('../../assets/images/examples/maramara.png'),
    ]
  }
  return (
    <ScrollView style={styles.container}>
      <KakaoBoldText style={styles.galleryText}> {data.user_id.id} </KakaoBoldText>

      <View style={[styles.photoContainer, {height : 550}]}>
        <KakaoRegularText style={styles.date}>{data.photo_container1.month}월{data.photo_container1.day}일</KakaoRegularText>
        <KakaoRegularText style={styles.calorie}>{data.photo_container1.total_calorie} kcal</KakaoRegularText>
        <SliderBox images = {data.images1}
                   sliderBoxHeight={400}
                   marginTop = {10}
                   dotColor="#FFEE58"
                   inactiveDotColor="#B5BACE"
        />

        <View style ={styles.hashtag_container}> 
        <KakaoRegularText style={styles.hashtag}> #{data.componests1[0]}
        </KakaoRegularText>
        <KakaoRegularText style={styles.hashtag}> #{data.componests1[1]}
        </KakaoRegularText>
        <KakaoRegularText style={styles.hashtag}> #{data.componests1[2]}
        </KakaoRegularText>
        </View>

      </View>
      
      <View style={[styles.photoContainer, {height : 550}]}>
        <KakaoRegularText style={styles.date}>{data.photo_container2.month}월{data.photo_container2.day}일</KakaoRegularText>
        <KakaoRegularText style={styles.calorie}>{data.photo_container2.total_calorie} kcal</KakaoRegularText>
        <SliderBox images = {data.images2}
                   sliderBoxHeight={400}
                   marginTop = {10}
                   dotColor="#FFEE58"
                   inactiveDotColor="#B5BACE"
        />
      
      </View> 
      
    </ScrollView>  
  );
}