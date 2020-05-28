import React, { useEffect, useState } from 'react';
import { Image, View, ScrollView } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import * as Progress from 'react-native-progress';

import axios from '../../utils/axios';
import styles from './styles';
import { KakaoRegularText, KakaoBoldText } from '../../components/StyledText';

export default () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await axios.get('/login');
      const sampleData = {
        calorie: 2332,
        nutrients: {
          carbohydrate: 0.5,
          protein: 0.25,
          fat: 0.25,
        },
      };
      data.name = res.data.kor_name;
      setData({
        ...sampleData,
        ...data,
      });
      setLoading(false);
    })();
  }, []);

  return loading ? <View /> : (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <KakaoBoldText style={styles.titleText}>
          단짠단짠
        </KakaoBoldText>
      </View>
      <ScrollView>
        <View style={[styles.sectionContainer, { height: 310, backgroundColor: 'white' }]}>
          {/* 캐릭터 이미지 */}
        </View>

        <KakaoRegularText style={styles.msgText}>
          오늘
          {' '}
          {data.name}
          님의 영양 상태
        </KakaoRegularText>

        <View style={[styles.sectionContainer, { marginBottom: 100 }]}>
          <KakaoBoldText style={styles.nutAlertText}>지방 섭취가 부족해요!</KakaoBoldText>

          <View style={{ justifyContent: 'center', flex: 1, marginBottom: 15 }}>
            <View style={styles.graphCalText}>
              <KakaoRegularText style={{ fontSize: 32, textAlign: 'center' }}>
                {data.calorie}
              </KakaoRegularText>
              <KakaoRegularText style={{
                fontSize: 11, textAlign: 'center', color: '#352641', opacity: 53,
              }}
              >
                Total Calories
              </KakaoRegularText>
            </View>
            <PieChart
              style={{ width: 200, height: 200 }}
              valueAccessor={({ item }) => item.percent}
              data={[
                {
                  key: 1,
                  percent: data.nutrients.carbohydrate,
                  svg: { fill: '#608BAC' },
                },
                {
                  key: 2,
                  percent: data.nutrients.protein,
                  svg: { fill: '#D47FA6' },
                },
                {
                  key: 3,
                  percent: data.nutrients.fat,
                  svg: { fill: '#B5BACE' },
                },
              ]}
              spacing={0}
              outerRadius="100%"
              innerRadius="75%"
              startAngle={Math.PI / 3}
              endAngle={Math.PI * (7 / 3)}
            />
          </View>

          <View>
            <View style={styles.nutpgContainer}>
              <KakaoRegularText style={styles.pgbarNutText}>
                탄수화물
              </KakaoRegularText>
              <Progress.Bar style={{ alignSelf: 'center' }} progress={data.nutrients.carbohydrate} color="#87A9C3" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
              <KakaoRegularText style={styles.pgbarPercentText}>
                {data.nutrients.carbohydrate * 100}
                %
              </KakaoRegularText>
            </View>
            <View style={styles.nutpgContainer}>
              <KakaoRegularText style={styles.pgbarNutText}>
                단백질
              </KakaoRegularText>
              <Progress.Bar progress={data.nutrients.protein} color="#D47FA6" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
              <KakaoRegularText style={styles.pgbarPercentText}>
                {data.nutrients.protein * 100}
                %
              </KakaoRegularText>
            </View>
            <View style={styles.nutpgContainer}>
              <KakaoRegularText style={styles.pgbarNutText}>
                지방
              </KakaoRegularText>
              <Progress.Bar progress={data.nutrients.fat} color="#B5BACE" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
              <KakaoRegularText style={styles.pgbarPercentText}>
                {data.nutrients.fat * 100}
                %
              </KakaoRegularText>
            </View>
          </View>

          <KakaoRegularText style={styles.msgText}>오늘 필요한 영양</KakaoRegularText>
          <KakaoBoldText style={[styles.nutAlertText, { marginTop: 30 }]}>
            지방이 들어간 음식을 드셔보세요!
          </KakaoBoldText>
          <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Image
              style={styles.recommendImage}
              source={require('../../assets/images/recommend-foods/image1.png')}
            />
            <Image
              style={styles.recommendImage}
              source={require('../../assets/images/recommend-foods/image2.png')}
            />
            <Image
              style={styles.recommendImage}
              source={require('../../assets/images/recommend-foods/image3.png')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
