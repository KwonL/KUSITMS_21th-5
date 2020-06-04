import React, { useEffect, useState } from 'react';
import { Image, View, ScrollView } from 'react-native';
import { PieChart } from 'react-native-svg-charts';
import * as Progress from 'react-native-progress';

import { TouchableOpacity } from 'react-native-gesture-handler';
import axios from '../../utils/axios';
import styles from './styles';
import { KakaoRegularText, KakaoBoldText } from '../../components/StyledText';

export default (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('/home');
      setData(res.data);
      if (res.data.calories) { setLoading(false); }
    };

    props.navigation.addListener('focus', () => {
      fetchData();
    });
  }, []);

  const logout = () => {
    axios.delete('/login').then((res) => {
      if (res.status === 200) {
        props.navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      } else {
        console.log(res);
      }
    }).catch((err) => {
      console.log(err);
    });
  };

  return loading ? <View /> : (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <TouchableOpacity onPress={logout}>
          <KakaoBoldText style={styles.titleText}>
            단짠단짠
          </KakaoBoldText>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.characterContainer}>
          <Image
            style={styles.characterImage}
            source={{ uri: data.image }}
          />
          {/* <KakaoBoldText style={styles.characterMsgText}>너무 배가 고파..</KakaoBoldText> */}
        </View>

        <View style={[styles.sectionContainer, { marginBottom: 100 }]}>
          <KakaoRegularText style={styles.msgText}>
            {`오늘 ${data.kor_name} 님의 영양 상태`}
          </KakaoRegularText>

          <View style={{ justifyContent: 'center', flex: 1, marginBottom: 15 }}>
            <View style={styles.graphCalText}>
              <KakaoRegularText style={{
                fontSize: 10, textAlign: 'center', color: '#352641', opacity: 53,
              }}
              >
                목표(
                {data.target_nutrients.calorie}
                Kcal) 대비
              </KakaoRegularText>
              <KakaoRegularText style={{ fontSize: 32, textAlign: 'center' }}>
                {data.calories.reduce((a, b) => a + b, 0)}
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
              valueAccessor={({ item }) => (item.percent)}
              data={data.calories.map((val, idx) => ({
                key: idx,
                percent: val / data.target_nutrients.calorie,
                svg: { fill: ['#259BB1', '#52BFD3', '#A8DDE6'][idx % 3] },
              }))}
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
              <Progress.Bar style={{ alignSelf: 'center' }} progress={data.carbohydrate / data.target_nutrients.carbohydrate} color="#87A9C3" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
              <KakaoRegularText style={styles.pgbarPercentText}>
                {Math.round((data.carbohydrate / data.target_nutrients.carbohydrate) * 100, 2)}
                %
              </KakaoRegularText>
            </View>
            <View style={styles.nutpgContainer}>
              <KakaoRegularText style={styles.pgbarNutText}>
                단백질
              </KakaoRegularText>
              <Progress.Bar progress={data.protein / data.target_nutrients.protein} color="#D47FA6" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
              <KakaoRegularText style={styles.pgbarPercentText}>
                {Math.round((data.protein / data.target_nutrients.protein) * 100, 2)}
                %
              </KakaoRegularText>
            </View>
            <View style={styles.nutpgContainer}>
              <KakaoRegularText style={styles.pgbarNutText}>
                지방
              </KakaoRegularText>
              <Progress.Bar progress={data.fat / data.target_nutrients.fat} color="#B5BACE" unfilledColor="#EAE7F0" width={183} height={19} borderRadius={7} />
              <KakaoRegularText style={styles.pgbarPercentText}>
                {Math.round((data.fat / data.target_nutrients.fat) * 100, 2)}
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
