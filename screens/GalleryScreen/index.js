import React from 'react';
import { ScrollView, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import styles from './style';
import { KakaoRegularText, KakaoBoldText } from '../../components/StyledText';

export default GalleryScreen = () => {
  const data = [
    {
      id: 1,
      photo_container: {
        month: 5,
        day: 15,
        total_calorie: 2705,
      },
      images: [
        require('../../assets/images/examples/kkhokkho.png'),
        require('../../assets/images/examples/myfood1.png'),
        require('../../assets/images/examples/515lunch.png'),
      ],
      components: [
        '매추리알',
        '양념치킨',
        '라면사리',
        '떡갈비',
        '김치찌개',
        '공기밥',
        '보쌈',
        '김치',
      ],
    },
    {
      id: 2,
      photo_container: {
        month: 5,
        day: 14,
        total_calorie: 1900,
      },
      images: [
        require('../../assets/images/examples/myfood2.png'),
        require('../../assets/images/examples/maramara.png'),
      ],
      components: ['하이루', '방가방가'],
    },
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
        }}
      >
        <KakaoBoldText style={styles.galleryText}>갤러리</KakaoBoldText>
      </View>
      <ScrollView style={styles.container}>
        {data.map((item) => (
          <View key={item.id} style={[styles.photoContainer, { height: 550 }]}>
            <KakaoRegularText style={styles.date}>
              {item.photo_container.month}
              월
              {item.photo_container.day}
              일
            </KakaoRegularText>
            <KakaoRegularText style={styles.calorie}>
              {item.photo_container.total_calorie}
              {' '}
              kcal
            </KakaoRegularText>
            <SliderBox
              images={item.images}
              sliderBoxHeight={400}
              marginTop={10}
              dotColor="#FFEE58"
              inactiveDotColor="#B5BACE"
            />
            <View style={styles.hashtag_container}>
              {item.components.map((hash) => (
                <KakaoRegularText key={hash} style={styles.hashtag}>
                  #
                  {hash}
                </KakaoRegularText>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
