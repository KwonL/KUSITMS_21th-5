import React, { useState, useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import styles from './style';
import { KakaoRegularText, KakaoBoldText } from '../../components/StyledText';
import axios from '../../utils/axios';

export default (props) => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios.get('/food/gallery').then((res) => {
      const tmp = [];
      const response = res.data;
      response.reverse();
      response.forEach((val, idx) => {
        const initMonth = 5;
        const initDay = 15;
        const slice = response.slice(idx, idx + 3);

        if (!(idx % 3)) {
          tmp.push({
            id: val.id,
            photo_container: {
              month: initMonth,
              day: initDay + (idx / 3),
              total_calorie: slice.map((item) => item.kcal).reduce((a, b) => a + b),
            },
            images: slice.map((item) => item.image),
            components: slice.map((item) => item.name)
              .filter((value, index, self) => self.indexOf(value) === index),
          });
        }
      });
      tmp.reverse();
      setData(tmp);
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    props.navigation.addListener('focus', () => {
      fetchData(true);
    });
  }, []);

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
